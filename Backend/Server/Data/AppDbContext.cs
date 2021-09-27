using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Data {
    public class AppDbContext : DbContext {
        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
            Database.EnsureCreated();
        }
    }
}