import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`\nSoma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`Subtração: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`Multiplicação: ${numero1} x ${numero2} = ${numero1 * numero2}`);
console.log(`Divisão: ${numero1} / ${numero2} = ${numero1 / numero2}`);
