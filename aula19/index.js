/* Dados primitivos (imutáveis)-> String, number, boolean, undefind, null, (bigint, symbol)

*/
//          01234
let nome = 'Andre'; // váriavel != dado
nome[0] ='D';//Mesmo eu atribuino um novo valor ao indice 0 a string é imutável
console.log(nome[0]);

// Valores primitivos - imutáveis

console.log('---------------------')
let a = "A";
let b = a; // CÓPIA 
console.log(a, b);

a = 'outra coisa'
console.log(a, b);
