using Books.Models;
using Microsoft.EntityFrameworkCore;

namespace Books.Contexts;
public class BookContext: DbContext
{
    public BookContext()
    {}

    public BookContext(DbContextOptions<BookContext> options) : base(options)
    {
        // sends option to Dbcontext
    }

    //DB configuration
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer("Data Source = DESKTOP-GKESQAS; initial catalog = Chapter; Integrated Security = true; TrustServerCertificate=True");
        }
    }
    
    // entity that will be used
    public DbSet<Book> Books { get; set; }
    public DbSet<User> Users { get; set; }
}