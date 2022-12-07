using Books.Controllers;
using Books.Interfaces;
using Books.Models;
using Books.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Books_test.Controller;

public class LoginControllerTest
{
    [Fact]
    public void LoginController_Returns_Invalid_User()
    {
        //Arrange

        var fakeRepository = new Mock<IUserRepository>();
        fakeRepository.Setup(x => x.Login(It.IsAny<string>(), It.IsAny<string>())).Returns((User)null);

        LoginViewModel loginData = new LoginViewModel();

        loginData.Email = "email@gmail.com";
        loginData.Senha = "123";

        var controller = new LoginController(fakeRepository.Object);
        
        //Act
        var result = controller.Login(loginData);
        
        //Assert

        Assert.IsType<UnauthorizedObjectResult>(result);
    }
}