using System;
using System.Collections.Generic;

namespace QuoteAPI.DAL
{
    public partial class Quotedatum
    {
        public int Id { get; set; }
        public long CategoryPositionId { get; set; }
        public string MarginLineItem { get; set; } = null!;
        public decimal MarginAmount { get; set; }
        public string ItemDescription { get; set; } = null!;
        public string Uom { get; set; } = null!;
        public decimal PricePerQuantity { get; set; }
        public decimal Quantity { get; set; }
        public decimal Waste { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public long ProjectId { get; set; }
        public long MarginId { get; set; }

        public virtual Categorypostion CategoryPosition { get; set; } = null!;
        public virtual Margin Margin { get; set; } = null!;
        public virtual Project Project { get; set; } = null!;
    }
}
