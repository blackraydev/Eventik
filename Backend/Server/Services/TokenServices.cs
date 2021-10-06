using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Server.Data;
using Server.Entities;
using Server.Interfaces;
using Server.Models;

namespace Server.Services {
    public class TokenServices : ITokenServices {
        private readonly AppDbContext _dbContext;
        private readonly SecurityKeys _securityKeys;

        public TokenServices(AppDbContext dbContext, IOptions<SecurityKeys> securityKeys) {
            _dbContext = dbContext;
            _securityKeys = securityKeys.Value;
        }

        public async Task<RefreshToken> SaveToken(int userId, string refreshToken) {
            var currentRefreshToken = await _dbContext.RefreshTokens.SingleOrDefaultAsync(x => x.UserId == userId);

            if (currentRefreshToken != null) {
                currentRefreshToken.Token = refreshToken;
            }
            else {
                var refreshTokenEntity = new RefreshToken(userId, refreshToken);
                await _dbContext.RefreshTokens.AddAsync(refreshTokenEntity);
            }

            await _dbContext.SaveChangesAsync();
            
            return currentRefreshToken;
        }

        public async Task<AuthResponse> RefreshToken(string token) {
            var refreshTokenEntity = await FindToken(token);
            var user = await _dbContext.Users.SingleOrDefaultAsync(x => x.Id == refreshTokenEntity.UserId);

            if (user == null) return null;

            var accessToken = GenerateAccessToken(user);
            var refreshToken = GenerateRefreshToken();

            await SaveToken(user.Id, refreshToken);

            return new AuthResponse(user, accessToken, refreshToken);
        }

        public async Task<RefreshToken> FindToken(string refreshToken) {
            var foundToken = await _dbContext.RefreshTokens.SingleOrDefaultAsync(x => x.Token == refreshToken);
            return foundToken;
        }

        public async Task<RefreshToken> DeleteToken(string refreshToken) {
            var currentRefreshToken = await _dbContext.RefreshTokens.SingleOrDefaultAsync(x => x.Token == refreshToken);
            _dbContext.RefreshTokens.Remove(currentRefreshToken);
            
            return currentRefreshToken;
        }
        
        public string GenerateAccessToken(User user) {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_securityKeys.AccessToken);
            var expirationTime = 30;
            var claimsDictionary = new Dictionary<string, object>();
            
            var claims = new Claim[] {
                new Claim(ClaimTypes.Name, user.Email)
            };
            
            foreach (var claim in claims) {
                claimsDictionary.Add(claim.Type, claim.Value);
            }
            
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(expirationTime),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
        
        public string GenerateRefreshToken() {
            var randomNumber = new byte[32];
            
            using (var rng = RandomNumberGenerator.Create()){
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }
    }
}