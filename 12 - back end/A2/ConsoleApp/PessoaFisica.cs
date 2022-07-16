namespace ConsoleApp;

public class PessoaFisica: Pessoa
{
    public string cpf { get; set; }
    public string dataNascimento { get; set; }

    public override void pagarImposto()
    {
        Console.WriteLine("I am the child method");
       
    }
}