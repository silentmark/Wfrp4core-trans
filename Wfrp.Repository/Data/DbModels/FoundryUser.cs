using Microsoft.AspNetCore.Identity;

namespace Wfrp.Repository.Data.DbModels
{
    public class FoundryUser : IdentityUser
    {
        public virtual ICollection<Item> Items { get; set; }
    }
}