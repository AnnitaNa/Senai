
// ****************************************************************************
// *************************  CADASTRO_EVENTOS * ******************************
// ****************************************************************************
// ********* by: Tatiane A. Nicchetti | tanicchetti@hotmail.com ***************
// ****************************************************************************

// código simples para verificar algumas condições de cadastro de eventos. 
//Deve-se baixar o pacote inteiro no computador e rodar no terminal
// atividade do Senai, 21/02/022.


// ------------------------  REQUERIMENTS  ------------------------------------
// olhar comments

const prompt = require('prompt-sync')();



/* ---------------- data do evento  ----------------------*/

console.log("\n--------   DATA DO EVENTO -----------");

var diff;

do {
    let dia = prompt("Escreva data (YYYY-MM-DD): ");
    diff = getDate(dia);
    if (diff<0) {console.log("data inválida!\n")};
}
while (diff<0)
    
console.log("data válida\n");


/* -------------------- participantes ------------------*/

console.log("\n--------   ADICIONAR PARTICIPANTES -----------");

//nº máx de participantes
let evento = ["Antonio", "Beatriz", "Carla", "Danilo"];
let numMax = prompt("Digite o número máximo de participantes: ");


while (evento.length < numMax) {
            idade();
            let member = prompt("\nnome do participante: ");
            evento.push(member);
}


if (evento.length >= numMax) {
    console.log("\nNúmero máximo de partiCipantes atingido!");
}


//lista participantes do evento
console.log("\n--------   LISTA DE PARTICIPANTES -----------\n");

console.log("Os participantes do evento são: ")

 for (i=0 ; i<evento.length ; i++) {
     console.log(`  ${evento[i]}`);
 }



/*  ---------------    FUNCTIONS -------------------- */

// retorna a diferença entre hoje e uma certa data
function getDate(d) {
    const date = new Date(d);
    const today = new Date();
    return (date.getTime() - today.getTime() ); //returns time in ms
}

//Vê se tem + de 18 anos
function idade() {
    let age=prompt("idade do participante:");

    while (age < 18) {
        console.log("menores de idade não podem ser cadastrados\n");
        age =prompt("Indique nova idade: ");
    }
}
    

// ****************************************************************************
// ******************************   COMMENTS  *********************************
// ****************************************************************************

/*
1º)
    para usar o prompt é preciso rodar no terminal: 
    npm install prompt-sync

2º) 
    As funçãos idade() e getDate(d) foram criadas

3º) o termo  \n dentro de " " significa nova linha
*/