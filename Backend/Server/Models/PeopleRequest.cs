namespace Server.Models {
    public class PeopleRequest {
        public int Id { get; }
        public string Query { get; }

        public PeopleRequest(int id, string query) {
            Id = id;
            Query = query;
        }
    }
}