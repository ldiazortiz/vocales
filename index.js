/*Identifica y cuenta la cantidad de vocales en una cadena de texto*/

let message = prompt(
  "Escriba una palabra, frase, oración o párrafo.  Contaremos cuantas vocales hay en su mensaje."
);
let vocalA = message.match(/a/gi).length;
console.log(`La vocal a aparece ${vocalA} veces`);
let vocalE = message.match(/e/gi).length;
console.log(`La vocal e aparece ${vocalE} veces`);
let vocalI = message.match(/i/gi).length;
console.log(`La vocal i aparece ${vocalI} veces`);
let vocalO = message.match(/o/gi).length;
console.log(`La vocal o aparece ${vocalO} veces`);
let vocalU = message.match(/u/gi).length;
console.log(`La vocal u aparece ${vocalU} veces`);

document.getElementById("a").innerHTML = `La vocal a aparece ${vocalA} veces`;
document.getElementById("e").innerHTML = `La vocal e aparece ${vocalE} veces`;
document.getElementById("i").innerHTML = `La vocal i aparece ${vocalI} veces`;
document.getElementById("o").innerHTML = `La vocal o aparece ${vocalO} veces`;
document.getElementById("u").innerHTML = `La vocal u aparece ${vocalU} veces`;
