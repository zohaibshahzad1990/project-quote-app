using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuoteAPI.DAL;
using QuoteAPI.Model;
using QuoteAPI.Model.Response;

namespace QuoteAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class CategoryController : Controller
  {
    private readonly quote_databaseContext _context;
    public CategoryController(quote_databaseContext context)
    {
      _context = context;
    }
    [HttpPost]
    public async Task<IActionResult> Add(string Name, long ProjectId)
    {
      long categoryId = 1;
      decimal categoryPosition = 1.0M;
      var existingCategory = await _context.Categories.Where(x => x.ProjectId == ProjectId).OrderByDescending(x => x.CategoryId).FirstOrDefaultAsync();
      if (existingCategory != null)
      {
        categoryId = existingCategory.CategoryId + 1;
        //var existingCtegoryPosition = await _context.Categorypostions.Where(x => x.Id == existingCategory.CategoryId).OrderByDescending(x => x.CategoryPosition).FirstOrDefaultAsync();
        //  if (existingCtegoryPosition != null) {
        //  categoryPosition = existingCtegoryPosition.CategoryPosition + 0.1M;
        //}
        // categoryPosition = categoryId;
      }


      var c = new Category() { CategoryId = categoryId, ProjectId = ProjectId, Name = Name, UpdatedOn = DateTime.Now, CreatedOn = DateTime.Now };
      _context.Categories.Add(c);
      int res = await _context.SaveChangesAsync();
      if (res == 0)
      {

        return Ok(new ApiResponse() { isScuccess=false });
      }
      //var cp = new Categorypostion() { CategoryId = c.Id, CategoryPosition = categoryPosition, CreatedOn = DateTime.Now, UpdatedOn = DateTime.Now };
      //_context.Categorypostions.Add(cp);
      //await _context.SaveChangesAsync();
      return Ok(new ApiResponse() { isScuccess = true, data = new { CategoryId = c.Id } });
    }

    [HttpGet("{ProjectId}")]
    public async Task<IActionResult> Get(long ProjectId)
    {
      return Ok(await _context.Categories.Where(x => x.ProjectId==ProjectId).ToListAsync());
    }
    [HttpGet("positions/{catId}")]
    public async Task<IActionResult> GetAllCategoryPostions(long catId)
    {
      var catPoistions = await _context.Categorypostions.Where(x => x.CategoryId==catId).Select(x => new CategoryPositionResponse()
      {
        Id=x.Id,
        Position=x.CategoryPosition
      }
        ).ToListAsync();
      return Ok(catPoistions);
      
      
    }
  }
}
