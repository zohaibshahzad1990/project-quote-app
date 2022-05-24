using System;
using System.Collections.Generic;

namespace QuoteAPI.DAL
{
    public partial class Margin
    {
        public Margin()
        {
            Quotedata = new HashSet<Quotedatum>();
        }

        public long Id { get; set; }
        public string MarginLineItem { get; set; } = null!;
        public decimal MarginAmount { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public long ProjectId { get; set; }

        public virtual Project Project { get; set; } = null!;
        public virtual ICollection<Quotedatum> Quotedata { get; set; }
    }
}
