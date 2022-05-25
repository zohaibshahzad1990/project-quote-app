namespace QuoteAPI.Model
{
  public class AddLineItemRequest
  {
    public long CategoryId { get; set; }
    public string MarginLineItem { get; set; }
    public decimal MarginAmount { get; set; }
    public long ProjectId { get; set; }
    public string ItemDescription { get; set; }
    public string UOM { get; set; }
    public decimal PricePerQuantity { get; set; }
    public decimal Quantity { get; set; }
    public decimal Waste { get; set; }

  }
}
