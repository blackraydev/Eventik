using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Entities {
    public class User {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Email is required!")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Password is required!")]
        public string Password { get; set; }
    }
}