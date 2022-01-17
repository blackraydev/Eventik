using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Entities {
    public class User {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Email is required!")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Password is required!")]
        public string Password { get; set; }
        
        public string Login { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public bool isVerified { get; set; }
        public DateTime? LastActivityDate { get; set; }
        public string Status { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Country { get; set; }
    }
}