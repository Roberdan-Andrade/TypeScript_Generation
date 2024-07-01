import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([1,2,3,4,5,6,7,8,9,10]);

let numeroDesejado: number;

//Apresentação
console.log(" --- Verificador de set ---");
console.log("Bem-vindo! vamos começar?\n");

//Pergunta qual valor procurar no set
numeroDesejado = readlinesync.questionInt("Qual numero devo procurar no set? ", {limitMessage: '\nErro, por favor digite apenas numeros'})

//Confere se o numero existe e informa usuario
if(numeros.has(numeroDesejado)){
    console.log(`O numero ${numeroDesejado} foi encontrado!`);
} else {
    console.log(`O numero ${numeroDesejado} não foi encontrado!`)
}
