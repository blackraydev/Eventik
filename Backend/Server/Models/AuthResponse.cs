using System.Text.Json.Serialization;
using Server.Entities;

namespace Server.Models {
    public class AuthResponse {
        public User User { get; set; }
        public string AccessToken { get; set; }

        [JsonIgnore]
        public string RefreshToken { get; set; }

        public AuthResponse(User user, string accessToken, string refreshToken) {
            this.User = user;
            this.AccessToken = accessToken;
            this.RefreshToken = refreshToken;
        }
    }
}