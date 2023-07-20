const nome = 'André Lucas';
const sobrenome = 'Rolim';
const idade = 18;
const peso = 83;
const alturaEmM = 1.83;
let imc = (peso/alturaEmM**2)
let anoNascimento =  (2023 - idade);

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg`)
console.log(` Ele tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)