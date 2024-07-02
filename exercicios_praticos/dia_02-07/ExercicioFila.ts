import readlinesync = require("readline-sync");

import { Queue } from "../../interface/Queue";

const fila = new Queue<string>();

let escolha: number;
let programa: boolean = true;

//Apresentação
console.log("--- Fila de clientes ---");
console.log("Bem-vindo! vamos começar?");

//Inicia loop
while (programa) {

    //Exibe menu
    console.log("\n****************  Menu  ****************");
    console.log("     1 - Adicionar cliente a fila");
    console.log("     2 - Listar todos os clientes");
    console.log("     3 - Retirar cliente da fila");
    console.log("     0 - Sair");
    console.log("****************************************");

    //Le escolha
    escolha = readlinesync.questionInt("Digite o codigo da acao desejada:  ", { limitMessage: '\nErro, por favor digite apenas numeros' });

    switch (escolha) {
        //Adiciona cliente
        case 1:
            let cliente: string;
            cliente = readlinesync.question("\nQual o nome do cliente a ser adicionado? ");
            fila.enqueue(cliente);
            console.log(`Cliente ${cliente} adicionado com sucesso!`)
            break;

        //Exibindo lista
        case 2:
            console.log("\nEssa é o estado da fila atual: ");
            fila.printQueue();
            console.log(`\nExistem ${fila.count()} clientes aguardando atendimento`);
            break;

        //Retirando cliente
        case 3:
            if (fila.count() > 0) {
                console.log(`\nO Primeiro cliente (${fila.peek()}) foi retirado da fila: `);
                fila.dequeue();
                console.log("");
                fila.printQueue();
            } else {
                console.log("\nA Fila esta vazia!");
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
