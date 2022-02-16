

// ****************************************************************************
// *************************  CADASTRO_PRODUTOS  ******************************
// ****************************************************************************
// ********* by: Tatiane A. Nicchetti | tanicchetti@hotmail.com ***************
// ****************************************************************************

// código simples para verificar algumas condições. Deve-se rodar no terminal
// atividade do Senai, 16/02/022.


// ------------------------  REQUERIMENTS  ------------------------------------
// olhar comments

const prompt = require('prompt-sync')();



// ------------------- 1º)  pode cadastrar se peso > 100g ---------------------

console.log(" ")                               

const peso = prompt("Indique o peso (g): ");

if (peso > 100) {
    console.log("   --  pode cadastrar");
} else {
    console.log("   --  não pode cadastrar");
}

console.log(" ")                          


// --------------- 2º)  Se lista de produtos > 10 não pode cadastrar -----------

let lista_produtos = ["A", "B", "C"];
const q = lista_produtos.length;

console.log(`A lista atual de produtos (${lista_produtos}) é composta por ${q} itens`);


if ( q <= 10) {
    console.log ("   --  Pode-se cadastrar novo produto");
} else {
    console.log("    --  Não é possível cadastrar mais produtos");
}

console.log(" ") 


//  ------------- 3º)  Se nome do produto < 3 char, mensagem de erro  -------

const produto = prompt("Nome do produto: ");

if (produto.length < 3) {
    console.log ("   --  ERRO! Nome do produto precisa ter 3 char ou mais");
} else {
    console.log("    --  Nome adequado");
}

console.log(" ") 



// ****************************************************************************
// ******************************   COMMENTS  *********************************
// ****************************************************************************

/* 

1º)
    console.log(" ") -> utilizado apenas para estilizar o terminal

2º)
    para usar o prompt é preciso rodar no terminal: 
    npm install prompt-sync

*/