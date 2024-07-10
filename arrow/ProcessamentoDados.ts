let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("\nmap() - Multiplicar todos os números por 3 e retornar um novo array\n");
let numerosMult3 = numeros.map(n => n * 3);
console.dir(numerosMult3);
 

console.log("\nfilter() - Listar todos os Estados que contém a palavra Rio\n");
let estadosContemRio = estados.filter(e => e.includes("Rio"));
console.dir(estadosContemRio);
 

console.log("\nincludes() - Checar se existe na lista o Estado de Minas Gerais\n");
let estadoMinasGerais = estados.includes("Minas Gerais");
console.log(estadoMinasGerais)
 

console.log("\nreduce() - Remover todos os elementos repetidos do array estados\n");
let estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1)
        acumulador.push(estado);
    return acumulador;
}, []);

console.dir(estadosSemRepeticoes);


console.log("\nfind() - Encontrar o primeiro número da lista maior do que 9\n");
let numeroMaior9 = numerosRepetidos.find(n => n > 9);
console.log(numeroMaior9);
 

console.log("\nfindIndex() - Encontrar o Índice do primeiro número da lista maior do que 9\n");
let posicaoNumeroMaior9 = numerosRepetidos.findIndex(n => n > 9);
console.log(posicaoNumeroMaior9);


console.log("\nspread - Combinar 2 arrays\n");
const array01: number[] = [1, 2, 3];
const array02: number[] = [4, 5, 6];
const arrayCombinado: number[] = [...array01, ...array02];

console.log(arrayCombinado);
