import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

let coresQuantidade: number;
let cor: string;

//Apresentação
console.log(" --- Lista de cores ---");
console.log("Bem-vindo! vamos começar?\n")

//Define tamanho do array
coresQuantidade = readlinesync.questionInt("Quantas cores a lista tera? ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Prenche array e deixa cores em minuscula
for(let i=0; i<coresQuantidade; i++){
    cor = readlinesync.question(`Digite a cor numero ${i+1}: `, {limitMessage: '\nErro, por favor digite apenas cores'});
    cores.push(cor.toLowerCase());
}

//Mostra array
console.log("\nEssa é a lista de cores atual: ");
console.table(cores);

//Organiza lista em ordem alfabetica
console.log("\nEssa é a lista de cores em ordem alfabetica: ");
console.table(cores.sort());
