import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";


//Teste Transporte --> Terrestre
const t1: Transporte = new Transporte(2);
t1.visualizar();

console.log("\n----------\n");

const tr1: Terrestre = new Terrestre(2, 2, 180);
tr1.visualizar();

console.log("\n----------\n");

//Teste Transporte --> Terrestre --> Automovel
const auto1: Automovel = new Automovel(4, 4, 80, "Cinza", 4, "ACB123", 6);
auto1.visualizar();

console.log("\n----------\n");

const auto2: Automovel = new Automovel(32, 4, 75, "Amarelo", 3, "XYZ987", 8);
auto2.visualizar();
