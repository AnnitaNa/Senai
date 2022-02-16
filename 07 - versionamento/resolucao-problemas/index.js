// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

//Laços de repetição

let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

console.log("----for: -----")
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	const alunoCorrente = listaDeEstudantes[indice];
	console.log(alunoCorrente);
}

let i = 0;

console.group("-----do... While: ----")
do {
	console.log(listaDeEstudantes[i]);
	i++;
} while (i < quantidadeDeEstudantes);

//------------------------------------------------//

//Com o while:

let j=0;
console.log("-----While: -----")
while (j < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[j]);
	j++;
}

// new student:
listaDeEstudantes.push("José");
console.log(listaDeEstudantes);
let q=listaDeEstudantes.length;

if (q < 4) {
	listaDeEstudantes.push("Alberto");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}