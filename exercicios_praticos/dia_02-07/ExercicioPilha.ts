import readlinesync = require("readline-sync");

import { Stack } from "../../interface/Stack";

const pilha = new Stack<string>();

let escolha: number;
let programa: boolean = true;

//Apresentação
console.log("--- Pilha de livros ---");
console.log("Bem-vindo! vamos começar?");

//Inicio do loop
while (programa) {

    //Exibe menu
    console.log("\n****************  Menu  ****************");
    console.log("     1 - Adicionar livro a pilha");
    console.log("     2 - Listar todos os livros");
    console.log("     3 - Retirar livro da pilha");
    console.log("     0 - Sair");
    console.log("****************************************");

    //Le escolha
    escolha = readlinesync.questionInt("Digite o codigo da acao desejada:  ", { limitMessage: '\nErro, por favor digite apenas numeros' });

    switch (escolha) {
        //Adiciona livro
        case 1:
            let livro: string;
            livro = readlinesync.question("\nQual o nome do livro a ser adicionado? ");
            pilha.push(livro);
            console.log(`livro ${livro} adicionado com sucesso!`)
            break;

        //Exibindo lista
        case 2:
            console.log("\nEssa é o estado da pilha atual: ");
            pilha.printStack();
            console.log(`\nExistem ${pilha.count()} livros na pilha`);
            break;

        //Retirando livro
        case 3:
            if (pilha.count() > 0) {
                console.log(`\nO Primeiro livro (${pilha.peek()}) foi retirado da pilha: `);
                pilha.pop();
                console.log("");
                pilha.printStack();
            } else {
                console.log("\nA pilha esta vazia!");
            }

            break;

        //Encerrando programa
        case 0:
            console.log("\nPrograma encerrado")
            programa = false;
            break;

        //Mensagem default
        default:
            console.log("\nDigite um codigo valido!");
            break;
    }
}
