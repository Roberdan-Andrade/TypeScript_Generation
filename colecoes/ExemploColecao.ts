import readlinesync = require("readline-sync");

const frutas: Set<string> = new Set<string>();


// Adiciona frutas no set
frutas.add("Kiwi");
frutas.add("Manga");
frutas.add("Banana");
frutas.add("Kiwi");
frutas.add("Abacate");

console.table(frutas);


// Confere se a fruta existe
console.log(`\nA fruta Banana existe? ${frutas.has("Banana")}`);


// Deleta fruta do set
frutas.delete("Kiwi");
console.table(frutas);

