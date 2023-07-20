//IEEE 754-2008

let num1 = 1500.000; //number
let num2 = 2.5 // number

console.log(num1.toString() + num2);
console.log(num1.toString(2));//Retorna um numero binario
console.log(num1.toFixed(2)); //aredonda um numero decimal
console.log(Number.isInteger(num1)); // verifica se o numero é inteiro
console.log(Number.isNaN(num1 * 'a'))// retorna um boolean (verdadeiro qundo a conta está errada)


console.log("--------------------------------------------------------")
console.log('Imprecisão nas contas ')

let n1 = 0.7;
let n2 = 0.1;

console.log(n1 + n2); // O resultado esperado 0.8

n1 = 0.7;
n1 += n2; //0.8
n1 += n2; //0.9
n1 += n2; //1.0

console.log(n1) // O resultado esperado 1 int.
console.log("--------------------------------------------------------")

console.log(n1.toFixed(2)); //Essa solução não resolve o problema pois o número continua sendo float
console.log(Number.isInteger(n1))
console.log("--------------------------------------------------------")


n1 = parseFloat(n1.toFixed(2));
console.log(n1)
console.log(Number.isInteger(n1));
console.log("--------------------------------------------------------")


n1 += n2
n1 = parseFloat(n1.toFixed(2));
console.log(n1)
console.log(Number.isInteger(n1));