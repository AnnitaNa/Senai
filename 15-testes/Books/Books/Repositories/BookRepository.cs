using Books.Contexts;
using Books.Models;

namespace Books.Repositories;

public class BookRepository
{
    private readonly BookContext _bookContext;

    public BookRepository(BookContext bookContext)
    {
        _bookContext = bookContext;
    }

    public List<Book> GetAll()
    {
        return _bookContext.Books.ToList();
    }

    public Book GetById(int id)
    {
        return _bookContext.Books.Find(id);
    }

    public void Create(Book book)
    {
        _bookContext.Books.Add(book);
        _bookContext.SaveChanges();
    }

    public void Update(int id, Book book)
    {
        Book bookSearched = _bookContext.Books.Find(id);
        if (bookSearched is not null)
        {
            bookSearched.Titulo = book.Titulo;
            bookSearched.Disponivel = book.Disponivel;
            bookSearched.QuantidadePaginas = book.QuantidadePaginas;
        }

        _bookContext.Books.Update(bookSearched);
        _bookContext.SaveChanges();
    }

    public void Delete(int id)
    {
        Book book = _bookContext.Books.Find(id);
        _bookContext.Books.Remove(book);
        _bookContext.SaveChanges();
    }
}
