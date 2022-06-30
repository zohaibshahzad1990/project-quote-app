using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuoteAPI.DAL;
using QuoteAPI.Model;

namespace QuoteAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class MarginController : Controller
  {
    private readonly quote_databaseContext _context;

    public MarginController(quote_databaseContext context)
    {
      _context = context;
    }


    [HttpGet("{projectId}")]
    public async Task<IActionResult> Get(long? projectId)
    {
      if (projectId == null || _context.Projects == null)
      {
        return NotFound();
      }
      return Ok(await _context.Margins.Where(x => x.ProjectId==projectId).ToListAsync());

    }

    [HttpPost]

    public async Task<IActionResult> Create(MarginRequest marginRequest)
    {
      if (ModelState.IsValid)
      {

        var margin = new Margin()
        {
          MarginAmount = marginRequest.MarginAmount,
          MarginLineItem = marginRequest.MarginLineItem,
          ProjectId = marginRequest.ProjectId,
          CreatedOn = DateTime.Now,
          UpdatedOn = DateTime.Now,
        };
        _context.Margins.Add(margin);
        await _context.SaveChangesAsync();
        return Ok();
      }
      return BadRequest();
    }



    [HttpPut("{id}")]

    public async Task<IActionResult> Edit(long id, Margin margin)
    {

      if (ModelState.IsValid)
      {
        try
        {
          margin.Id = id;
          _context.Update(margin);
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!MarginExists(margin.Id))
          {
            return NotFound();
          }
          else
          {
            throw;
          }
        }
        return Ok();
      }
      return Ok();
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(long? id)
    {
      if (id == null || _context.Margins == null)
      {
        return NotFound();
      }

      var project = await _context.Margins
          .FirstOrDefaultAsync(m => m.Id == id);
      if (project == null)
      {
        return NotFound();
      }
      else
      {
        _context.Remove(project);
        await _context.SaveChangesAsync();
      }

      return Ok(project);
    }


    private bool MarginExists(long id)
    {
      return (_context.Margins?.Any(e => e.Id == id)).GetValueOrDefault();
    }
  }
}
