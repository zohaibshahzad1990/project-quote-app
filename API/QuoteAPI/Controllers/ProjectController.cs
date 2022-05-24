using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using QuoteAPI.DAL;
using QuoteAPI.Model;

namespace QuoteAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ProjectController : Controller
  {
    private readonly quote_databaseContext _context;

    public ProjectController(quote_databaseContext context)
    {
      _context = context;
    }

    // GET: Projects
    [HttpGet]
    public async Task<IActionResult> Index()
    {
      return _context.Projects != null ?
                  Ok(await _context.Projects.ToListAsync()) :
                  Problem("Entity set 'quote_databaseContext.Projects'  is null.");
    }

    // GET: Projects/Details/5
    [HttpGet("{id}")]
    public async Task<IActionResult> Details(long? id)
    {
      if (id == null || _context.Projects == null)
      {
        return NotFound();
      }

      var project = await _context.Projects
          .FirstOrDefaultAsync(m => m.Id == id);
      if (project == null)
      {
        return NotFound();
      }

      return Ok(project);
    }



    // POST: Projects/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]

    public async Task<IActionResult> Create([Bind("Name")] ProjectRequest project)
    {
      if (ModelState.IsValid)
      {
        
        _context.Add(new Project() { Name = project.Name });
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
      }
      return BadRequest();
    }



    // POST: Projects/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPut("{id}")]
    
    public async Task<IActionResult> Edit(long id, [Bind("Name")] Project project)
    {

      if (ModelState.IsValid)
      {
        try
        {
          project.Id = id;  
          _context.Update(project);
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!ProjectExists(project.Id))
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

    // GET: Projects/Delete/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(long? id)
    {
      if (id == null || _context.Projects == null)
      {
        return NotFound();
      }

      var project = await _context.Projects
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


    private bool ProjectExists(long id)
    {
      return (_context.Projects?.Any(e => e.Id == id)).GetValueOrDefault();
    }
  }
}
