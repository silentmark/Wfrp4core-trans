using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Wfrp.Repository.Data.DbModels;

namespace Wfrp.Repository.Data
{
    public class ApplicationDbContext : IdentityDbContext<FoundryUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<FoundryUser>(
                typeBuilder =>
                {
                    typeBuilder.HasMany(owner => owner.Items)
                        .WithOne(item => item.Owner)
                        .HasForeignKey(item => item.OwnerId)
                        .IsRequired();
                });

            builder.Entity<Item>(
                typeBuilder =>
                {
                    typeBuilder.HasOne(item => item.Owner)
                        .WithMany(owner => owner.Items)
                        .HasForeignKey(item => item.OwnerId)
                        .IsRequired();
                });
        }
    }
}