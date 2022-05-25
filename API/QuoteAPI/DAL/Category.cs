using System;
using System.Collections.Generic;

namespace QuoteAPI.DAL
{
    public partial class Category
    {
        public Category()
        {
            Categorypostions = new HashSet<Categorypostion>();
        }

        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public long ProjectId { get; set; }
        public long CategoryId { get; set; }

        public virtual Project Project { get; set; } = null!;
        public virtual ICollection<Categorypostion> Categorypostions { get; set; }
    }
}
