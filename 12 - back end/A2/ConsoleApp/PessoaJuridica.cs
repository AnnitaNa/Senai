namespace ConsoleApp;

public class PessoaJuridica : Pessoa
{
    public string cnpj { get; set; }
    public string razaoSocial { get; set; }
    
    public override void pagarImposto()
    {
        Console.WriteLine("I am the method of PessoaJuridica");
       
    }
}