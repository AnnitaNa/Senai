namespace ConsoleApp;

public class Pessoa
{
    public string nome { get; set;} 
    
    public string endereco { get; set;} 
    
    public bool enderecoComercial { get; set; }
    
    public virtual void pagarImposto() {}
    }