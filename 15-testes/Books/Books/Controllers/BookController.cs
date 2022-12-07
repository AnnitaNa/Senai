using Books.Models;
using Books.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Books.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
[ApiController]
public class BookController : Controller
{
    private readonly BookRepository _bookRepository;

    public BookController(BookRepository bookRepository)
    {
        _bookRepository = bookRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            return Ok(_bookRepository.GetAll());
        }

        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    [HttpGet("{id}")]
    public IActionResult GetById([FromRoute]int id)
    {
        try
        {
            Book book = _bookRepository.GetById(id);
            if (book is null)
            {
                return NotFound();
            }
            return Ok(book);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
        
    }

    [HttpPost()]
    public IActionResult Create([FromBody] Book book)
    {
        try
        {
            _bookRepository.Create(book);
            return StatusCode(201);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Update([FromRoute] int id, [FromBody] Book book)
    {
        try
        {
            _bookRepository.Update(id, book);
            return StatusCode(204);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete([FromRoute] int id)
    {
        try
        {
            _bookRepository.Delete(id);
            return Ok("Book removed");
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }
}