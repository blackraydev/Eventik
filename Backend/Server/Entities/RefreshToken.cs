using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Entities {
    public class RefreshToken {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Token { get; set; }

        public RefreshToken(int userId, string token) {
            this.UserId = userId;
            this.Token = token;
        }
    }
}