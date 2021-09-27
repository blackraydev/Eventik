using System;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Server.Data;
using Server.Entities;
using Server.Interfaces;
using Server.Models;

namespace Server.Services {
    public class UserServices : IUserServices {
        private AppDbContext _dbContext;
        private ITokenServices _tokenServices;
        private PasswordHasher<User> passwordHasher = new PasswordHasher<User>();

        public UserServices(AppDbContext dbContext, ITokenServices tokenServices) {
            _dbContext = dbContext;
            _tokenServices = tokenServices;
        }

        public async Task<AuthResponse> Register(User user) {
            var currentUser = _dbContext.Users.SingleOrDefault(x => x.Email == user.Email);

            if (currentUser != null) return null;

            string hashedPassword = passwordHasher.HashPassword(user, user.Password);
            
            var newUser = await _dbContext.Users.AddAsync(
                new User {
                    Email = user.Email, 
                    Password = hashedPassword
                }
            );
            
            await _dbContext.SaveChangesAsync();

            var accessToken = _tokenServices.GenerateAccessToken(user);
            var refreshToken = _tokenServices.GenerateRefreshToken();

            await _tokenServices.SaveToken(newUser.Entity.Id, refreshToken);

            return new AuthResponse(newUser.Entity, accessToken, refreshToken);
        }

        public async Task<AuthResponse> Login(User user) {
            var currentUser = await _dbContext.Users.SingleOrDefaultAsync(x => x.Email == user.Email);

            if (currentUser == null) return null;

            var passwordVerification = passwordHasher.VerifyHashedPassword(user, currentUser.Password, user.Password);

            if (passwordVerification == PasswordVerificationResult.Failed) return null;

            var accessToken = _tokenServices.GenerateAccessToken(user);
            var refreshToken = _tokenServices.GenerateRefreshToken();
            
            await _tokenServices.SaveToken(currentUser.Id, refreshToken);

            return new AuthResponse(currentUser, accessToken, refreshToken);
        }

        public async Task<RefreshToken> Logout(string refreshToken) {
            return await _tokenServices.DeleteToken(refreshToken);
        }
    }
}