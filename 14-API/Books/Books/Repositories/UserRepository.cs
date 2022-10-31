using Books.Contexts;
using Books.Interfaces;
using Books.Models;

namespace Books.Repositories;

public class UserRepository: IUserRepository
{
    private readonly BookContext _userRepository;

    public UserRepository(BookContext userRepository)
    {
        _userRepository = userRepository;
    }

    public List<User> GetAll()
    {
        return _userRepository.Users.ToList();
    }

    public User GetById(int id)
    {
        return _userRepository.Users.Find(id);
    }

    public void Create(User user)
    {
        _userRepository.Users.Add(user);
        _userRepository.SaveChanges();
    }

    public void Update(int id, User user)
    {
        User userFound = _userRepository.Users.Find(id);

        if (userFound is not null)
        {
            userFound.Email = user.Email;
            userFound.Senha = user.Senha;
            userFound.Tipo = user.Tipo;
        }
        _userRepository.Users.Update(userFound);
        _userRepository.SaveChanges();
    }

    public void Delete(int id)
    {
        User deleteUser = _userRepository.Users.Find(id);
        _userRepository.Users.Remove(deleteUser);
        _userRepository.SaveChanges();
    }

    public User Login(string email, string senha)
    {
        return _userRepository.Users.FirstOrDefault(user => user.Email == email && user.Senha == senha);
    }
}