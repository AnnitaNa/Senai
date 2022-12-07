using System.ComponentModel.DataAnnotations;

namespace Books.ViewModel;

public class LoginViewModel
{
    [Required(ErrorMessage = "E-mail is required")]
    public string Email { get; set; }
    
    [Required(ErrorMessage = "Password is required")]
    public string Senha { get; set; }
}