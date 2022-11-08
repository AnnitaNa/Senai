using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Books.Interfaces;
using Books.Models;
using Books.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Books.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
[ApiController]
public class LoginController : Controller
{
    private readonly IUserRepository _userRepository;

    public LoginController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpPost]
    public IActionResult Login(LoginViewModel login)
    {
        User foundUser = _userRepository.Login(login.Email, login.Senha);
        if (foundUser == null)
        {
            return Unauthorized(new { msg = "Invalid Email or password" });
        }

        var myClaims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Email, foundUser.Email),
            new Claim(JwtRegisteredClaimNames.Jti, foundUser.Id.ToString()),
            new Claim(ClaimTypes.Role, foundUser.Tipo)
        };

        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("chapter-chava-auteticacao"));

        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var myToken = new JwtSecurityToken(
            issuer: "chapter.webp",
            audience: "chapter.webp",
            claims: myClaims,
            signingCredentials: credentials,
            expires: DateTime.Now.AddMinutes(60)
        );
        return Ok(
            new
            {
                token = new JwtSecurityTokenHandler().WriteToken(myToken)
            }
        );
    }
}