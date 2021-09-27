using System.Threading.Tasks;
using Server.Entities;
using Server.Models;

namespace Server.Interfaces {
    public interface ITokenServices {
        public Task<RefreshToken> SaveToken(int userId, string refreshToken);
        public Task<AuthResponse> RefreshToken(string refreshToken);
        public Task<RefreshToken> DeleteToken(string refreshToken);
        public string GenerateAccessToken(User user);
        public string GenerateRefreshToken();
    }
}