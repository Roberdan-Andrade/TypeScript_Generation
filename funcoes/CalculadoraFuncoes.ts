import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`\nSoma: ${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
console.log(`Subtração: ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
console.log(`Multiplicação: ${numero1} x ${numero2} = ${multiplicar(numero1, numero2)}`);

let resultadoDivisao = dividir(numero1, numero2);

if(resultadoDivisao){
    console.log(`Divisão: ${numero1} / ${numero2} = ${resultadoDivisao}`);
} else {
    console.log("\nNão existe divisão por zero");
}


mensagem();


// Funçoes
function somar(numero1: number, numero2: number): number{
    return numero1 + numero2
}

function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2
}

function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2
}

function dividir(numero1: number, numero2: number): number|null{
    let divisao = numero1 / numero2

    // (condiçao ? ação se verdadeiro : ação se falso)
    return(divisao !== Infinity ? divisao : null)
}

function mensagem(): void{
    console.log("\nMalfeito feito")
}
