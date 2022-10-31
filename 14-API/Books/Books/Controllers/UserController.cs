using Books.Models;
using Books.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Books.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
[ApiController]


public class UserController : Controller
{
    private readonly UserRepository _userRepository;

    public UserController(UserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            return Ok(_userRepository.GetAll());
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    [HttpGet("{id}")]
    public IActionResult GetById([FromRoute] int id)
    {
        try
        {
            User user = _userRepository.GetById(id);

            if (user is null)
            {
                return StatusCode(404);
            }
            
            return Ok(user);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    [HttpPost]
    public IActionResult Create([FromBody] User user)
    {
        try
        {
            _userRepository.Create(user);
            return StatusCode(201);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Update([FromRoute] int id, [FromBody] User user)
    {
        try
        {
            _userRepository.Update(id, user);
            return Ok("Updated with success!");
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
            _userRepository.Delete(id);
            return StatusCode(204);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }
}