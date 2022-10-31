using Books.Models;

namespace Books.Interfaces;

public interface IUserRepository
{
    List<User> GetAll();
    User GetById(int id);
    void Create(User user);
    void Update(int id, User user);
    void Delete(int id);
    User Login(string email, string senha);
}