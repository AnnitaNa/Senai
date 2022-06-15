
package testesenai;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteBuscarCursos {
	private WebDriver driver;
	
	@Before
	public void abrirNavegador() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chromedriver\\chromedriver.exe"); //where webdriver is saved
		driver =  new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test
	public void testeNavegador() {
		driver.get("https:\\informatica.sp.senai.br"); //site that i want
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // time to wait before executing
		driver.findElement(By.id("Busca1_txtFiltro")).sendKeys("informática"); //search it 
		driver.findElement(By.id("Busca1_btnBusca")).click(); //click button
	}
}

//Busca1_txtFiltro - ID do texto de busca (inspecionar site)
//Busca1_btnBusca - ID do botão de procurar (inspecionar site)

