import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Ciclista, Nadador{

    constructor(nome: string){
        super(nome);
    }

    aquecer(): void {
        console.log("Atleta aquecendo...");
    }

    correr(): void {
        console.log("Atleta correndo");
    }

    pedalar(): void {
        console.log("Atleta pedalando");
    }

    nadar(): void {
        console.log("Atleta nadando");
    }

    public cansou(): void {
        console.log("Atleta cansou!");
    }
}
