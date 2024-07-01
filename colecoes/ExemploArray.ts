import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();


// Adiciona numero ao array
numeros.push(0);
numeros.push(0);
numeros.push(7);


// Pede ao usuario um numero para adicionar
numeros.push(readlinesync.questionFloat("Digite um numero: "));


// Adiciona varios numeros de uma vez
numeros.unshift(42, 100, 24);


// Passa por todos os numeros do array
for(let numero of numeros)
    console.log(numero);


// confere a posição de um numero
console.log(`\n A posição do elemento 42 é: ${numeros.indexOf(42)}`);
console.log(` A posição do elemento 2000 é: ${numeros.indexOf(2000)}`);
console.log(` A posição do elemento 0 é: ${numeros.indexOf(0)}`);


// Confere se o numero existe
console.log(`\n Existe no array o elemento 42: ${numeros.includes(42)}`);
console.log(` Existe no array o elemento 2000: ${numeros.includes(2000)}`);
console.log(` Existe no array o elemento 0: ${numeros.includes(0)}`);


// Atualiza valor diretamente
numeros[numeros.indexOf(24)] = 10;

console.table(numeros);


// Apaga valor
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);
