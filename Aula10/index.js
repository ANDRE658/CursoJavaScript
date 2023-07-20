let i = 1;
console.log(i++);
console.log(i);
console.log('-------------');

let j = 1;
console.log(++j)

console.log('-------------'); 

// operador de atribuição

let contador = 0;
const passo = 3;

contador += passo;
contador += passo;
contador += passo;

console.log(contador);

// NaN - not a number
const num = 10;
const num2 = parseInt('3.9'); //  faz a converção de Str para int - aqui int != float
const num3 = parseFloat('3.9'); //  faz a converção de Str para Float- aqui int != float
const num4 = Number('3.9'); //  faz a converção de Str para Nmber
console.log(num + num2)
console.log(num + num3)
console.log(num + num4)