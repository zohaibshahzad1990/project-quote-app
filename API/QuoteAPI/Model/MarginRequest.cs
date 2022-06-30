namespace QuoteAPI.Model
{
  public class MarginRequest
  {
    public long ProjectId { get; set; }
    public string MarginLineItem { get; set; }
    public decimal MarginAmount { get; set; }
  }
}
