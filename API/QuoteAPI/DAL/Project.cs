using System;
using System.Collections.Generic;

namespace QuoteAPI.DAL
{
    public partial class Project
    {
        public Project()
        {
            Categories = new HashSet<Category>();
            Margins = new HashSet<Margin>();
            Quotedata = new HashSet<Quotedatum>();
        }

        public long Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<Category> Categories { get; set; }
        public virtual ICollection<Margin> Margins { get; set; }
        public virtual ICollection<Quotedatum> Quotedata { get; set; }
    }
}
