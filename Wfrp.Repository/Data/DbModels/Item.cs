using Microsoft.AspNetCore.Identity;
using Microsoft.Identity.Client;

namespace Wfrp.Repository.Data.DbModels
{
    public class Item
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public long Id { get; set; }

        public string FoundryId { get; set; }

        public string Tags { get; set; }

        public string Icon { get; set; }

        public DateTime Created { get; set; }

        public string Json { get; set; }

        public string OwnerId { get; set; }

        public bool HasEffects { get; set; }

        public bool HasAutomatedAnimation { get; set; }

        public virtual FoundryUser Owner { get; set; }
    }
}