using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;
using Server.Entities;

namespace Server.Interfaces {
    public interface IUserServices {
        public Task<AuthResponse> Register(User user);
        public Task<AuthResponse> Login(User user);
        public Task<RefreshToken> Logout(string refreshToken);
        public Task<AuthResponse> Verify(User user);
        public List<User> GetPeople(PeopleRequest peopleRequest);
    }
}