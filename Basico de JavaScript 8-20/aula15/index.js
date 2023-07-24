let num1 = 9.23451;
let num2 = Math.floor(num1); //Aredonda o número para Baixo
console.log(num2);
num2 = Math.ceil(num1); //Aredonda o número para Cima
console.log(num2);
num2 = Math.round(num1); //Aredonda para o número mais próximo
console.log(num2);

console.log(Math.max(5,5,49,9,984,65,498,7,52,249,)); //Retorna o maior valor
console.log(Math.min(5,5,49,9,984,-65,498,7,52,249,));//retorna o menor valor
console.log(Math.random()); //Retorna valores aleatórios


const aleatorio =Math.round( Math.random() * (10 - 5) + 5);
console.log(aleatorio)

console.log(100/0) // Essa conta não gera erro e >>>>> retorna true