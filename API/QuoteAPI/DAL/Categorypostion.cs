using System;
using System.Collections.Generic;

namespace QuoteAPI.DAL
{
    public partial class Categorypostion
    {
        public Categorypostion()
        {
            Quotedata = new HashSet<Quotedatum>();
        }

        public long Id { get; set; }
        public decimal CategoryPosition { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public long CategoryId { get; set; }

        public virtual Category Category { get; set; } = null!;
        public virtual ICollection<Quotedatum> Quotedata { get; set; }
    }
}
