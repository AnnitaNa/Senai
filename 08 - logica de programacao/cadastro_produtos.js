//  -----------------  CADASTRO DE PRODUTOS ----------------
//  --------------------------------------------------------
//  ---------------- Tatiane A. Nicchetti ------------------

//    REQUISITOS



// 1º)  pode cadastrar se peso > 100g

let peso = 150;


if (peso > 100) {
    console.log("pode cadastrar");
} else {
    console.log("não pode cadastrar");
}


// 2º)  Se lista de produtos > 10 não pode cadastrar

let lista_produtos = ["A", "B", "C"];

if (lista_produtos.length <= 10) {
    console.log ("Pode-se cadastrar novo produto")
} else {
    console.log("Não é possível cadastrar mais produtos")
}


// 3º)  Se nome do produto < 3, mensagem de erro

let produto = "peça";

if (produto.length < 3) {
    console.log ("ERRO! Nome do produto precisa ter 3 char ou mais")
} else {
    console.log("Nome adequado")
}