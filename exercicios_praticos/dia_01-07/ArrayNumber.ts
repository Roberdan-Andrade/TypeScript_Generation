import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(1,2,3,4,5,6,7,8,9,10);

let numeroDesejado: number;

//Apresentação
console.log(" --- Posição do numero ---");
console.log("Bem-vindo! vamos começar?\n");

//Exibe array
console.table(numeros);

//Pergunta numero desejado
numeroDesejado = readlinesync.questionInt("Qual numero voce gostaria de saber a posicao? ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Descobre se o numero existe, se não, informa usuario, se sim fala posição
if(!numeros.includes(numeroDesejado)){
    console.log(`O numero informado (${numeroDesejado}) não faz parte desse array`)
} else {
    console.log(`\n A posição do numero ${numeroDesejado} é: ${numeros.indexOf(numeroDesejado)}`);
}
