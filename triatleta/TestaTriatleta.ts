import { Triatleta } from "./Triatleta";

const t1: Triatleta = new Triatleta("Fernando");

t1.visualizar();
console.log("");

t1.aquecer();
console.log("");

t1.correr();
t1.nadar();
t1.pedalar();

console.log("");
t1.cansou();
