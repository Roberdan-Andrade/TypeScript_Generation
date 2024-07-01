import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

let numerosQuantidade: number;

//Apresentação
console.log(" --- Lista de numeros ---");
console.log("Bem-vindo! vamos começar?\n")

//Define quantas vezes vai ser pedido um numero
numerosQuantidade = readlinesync.questionInt("Quantos numeros serao digitados agora? ", {limitMessage: '\nErro, por favor digite apenas numeros'});
console.log("");

//Prenche set
for(let i=0; i<numerosQuantidade; i++){
    numeros.add(readlinesync.questionInt(`Digite o numero da posicao ${i}: `, {limitMessage: '\nErro, por favor digite apenas numeros'}));
}

//Mostra set
console.log("\nEsse é o set atual(Lembre-se: numeros repitidos foram ignorados!): ");
console.table(numeros);
