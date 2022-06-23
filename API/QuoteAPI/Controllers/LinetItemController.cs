using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuoteAPI.DAL;
using QuoteAPI.Model;

namespace QuoteAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class LinetItemController : Controller
  {
    private readonly quote_databaseContext _context;
    public LinetItemController(quote_databaseContext context)
    {
      _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Add(AddLineItemRequest addLineItemRequest)
    {
      var transaction = _context.Database.BeginTransaction();
      try
      {
        decimal categoryPosition = 1.0M;
        var margin = new Margin()
        {
          MarginAmount = addLineItemRequest.MarginAmount,
          MarginLineItem = addLineItemRequest.MarginLineItem,
          ProjectId = addLineItemRequest.ProjectId,
          CreatedOn = DateTime.Now,
          UpdatedOn = DateTime.Now,
        };
        _context.Margins.Add(margin);
        await _context.SaveChangesAsync();
        decimal lastCateegoryPos = await _context.Categorypostions
          .Where(x => x.Category.ProjectId == addLineItemRequest.ProjectId && x.Category.Id == addLineItemRequest.CategoryId)
          .Select(x => x.CategoryPosition).OrderByDescending(z => z).FirstOrDefaultAsync();
        if (lastCateegoryPos == default)
        {
          lastCateegoryPos = 1;
        }
        else
        {
          lastCateegoryPos = lastCateegoryPos + 0.01M;
        }
        var cp = new Categorypostion() { CategoryId = addLineItemRequest.CategoryId, CategoryPosition = lastCateegoryPos, CreatedOn = DateTime.Now, UpdatedOn = DateTime.Now };
        _context.Categorypostions.Add(cp);
        await _context.SaveChangesAsync();

        var quoteDate = new Quotedatum()
        {
          CategoryPositionId = cp.Id,
          MarginId = margin.Id,
          ItemDescription = addLineItemRequest.ItemDescription,
          PricePerQuantity = addLineItemRequest.PricePerQuantity,
          Quantity = addLineItemRequest.Quantity,
          Uom = addLineItemRequest.UOM,
          Waste = addLineItemRequest.Waste,
          CreatedOn = DateTime.Now,
          UpdatedOn = DateTime.Now,
          ProjectId = addLineItemRequest.ProjectId

        };
        _context.Quotedata.Add(quoteDate);
        await _context.SaveChangesAsync();
        transaction.Commit();
        return Ok(new ApiResponse() { isScuccess = true });
      }
      catch (Exception ex)
      {
        transaction.Rollback();
        return Ok(new ApiResponse() { isScuccess = false });
      }
    }
    [HttpGet("{ProjectId}")]
    public async Task<IActionResult> Get(long ProjectId)
    {
      var res = new LinetItemResponse() { LinetItemCategory = new List<LinetItemCategory>() };
      decimal totalMarginSum = await _context.Margins.Where(x => x.ProjectId == ProjectId).SumAsync(x => x.MarginAmount);

      var catgories = await _context.Categorypostions.Where(x => x.Category.ProjectId == ProjectId).Select(x => new
      {
        CategoryName = x.Category.Name,
        x.CategoryId
      }).Distinct().ToListAsync();
      foreach (var cat in catgories)
      {
        var lineItemCat = new LinetItemCategory()
        {
          Id = cat.CategoryId,
          Name = cat.CategoryName,
          LinetItem = new List<LinetItem>()
        };


        var items = await _context.Categorypostions.Where(x => x.Category.Id == cat.CategoryId).Select(x => x.Quotedata!=null && x.Quotedata.Count>0?
          new LinetItem(totalMarginSum)
          {
            CategoryPosition = x.CategoryPosition,
            CategoryPositionId = x.Id,
            ItemDescription = x.Quotedata.FirstOrDefault()!.ItemDescription,
            Uom = x.Quotedata.FirstOrDefault()!.Uom,
            Quantity = x.Quotedata.FirstOrDefault()!.Quantity,
            Waste = x.Quotedata!.FirstOrDefault()!.Waste,
            PricePerQuantity = x.Quotedata.FirstOrDefault()!.PricePerQuantity,
            Cost = x.Quotedata.FirstOrDefault()!.PricePerQuantity * x.Quotedata.FirstOrDefault()!.Quantity,

          } :new LinetItem(0)).ToListAsync();
        lineItemCat.LinetItem.AddRange(items);
        res.LinetItemCategory.Add(lineItemCat);
      }
      return Ok(res);



    }
  }
}
