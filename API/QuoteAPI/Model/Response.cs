namespace QuoteAPI.Model
{
    public class ApiResponse
    {
        public bool isScuccess { get; set; }
        public string message { get; set; }
        public object data { get; set; }
    }
}
