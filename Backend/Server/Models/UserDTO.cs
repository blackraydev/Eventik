namespace Server.Models {
    public class UserDTO {
        public int Id;
        public string Email;

        public UserDTO(int id, string email) {
            this.Id = id;
            this.Email = email;
        }
    }
}