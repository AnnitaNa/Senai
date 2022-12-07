using Projeto_teste;

namespace unit_test;

[TestClass]
public class teste_unitario
{
    [TestMethod]
    public void SomarDoisNumeros()
    {
        //Arrange
        double FirstNumber = 1;
        double SecondNumber = 2;
        double Expected = 3;

        //Act
        var Result = operacoes.Somar(FirstNumber, SecondNumber);

        //Assert
        Assert.AreEqual(Expected, Result);
    }
    
    //series of tests with different numbers
    [DataTestMethod]
    [DataRow(1,1,2)]
    [DataRow(1,3,4)]
    public void SomarDoisNumerosVarios(double num1, double num2, double expected)
    {

        //Act
        var Result = operacoes.Somar(num1, num2);

        //Assert
        Assert.AreEqual(expected, Result);
    }
}