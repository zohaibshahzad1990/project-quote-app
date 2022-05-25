namespace QuoteAPI.Model
{
  public class LinetItemResponse
  {
    public decimal GrandTotal { get; set; }
    public List<LinetItemCategory> LinetItemCategory { get; set; }

  }
  public class LinetItemCategory
  {
    public long Id { get; set; }
    public string Name { get; set; }
    public decimal TotalExGst { get; set; }
    public decimal Total { get; set; }
    public decimal GSTAmount { get; set; }
    public decimal MarginAmount { get; set; }
    public List<LinetItem> LinetItem { get; set; }

  }
  public class LinetItem
  {
    public long CategoryPositionId { get; set; }
    public decimal CategoryPosition { get; set; }
    public string ItemDescription { get; set; }
    public string Uom { get; set; } = null!;
    public decimal PricePerQuantity { get; set; }
    public decimal Quantity { get; set; }
    public decimal Waste { get; set; }
    public long MarginId { get; set; }
    public decimal Cost { get; set; }
    public decimal TotalExGst { get; set; }
    public decimal Total { get; set; }
    public decimal MarginAmount { get; set; }
    public decimal GSTAmount { get; set; }

  }
}
