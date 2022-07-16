// See https://aka.ms/new-console-template for more information

//Console.Beep();
//Console.WriteLine("Hello, World!");

using ConsoleApp;

PessoaFisica normal = new PessoaFisica();
normal.nome = "Normalíssima";
Console.WriteLine(normal.nome);
normal.pagarImposto();
PessoaJuridica estranha = new PessoaJuridica();
estranha.pagarImposto();