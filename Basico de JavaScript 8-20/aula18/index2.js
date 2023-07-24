//Argumento é o valor que é passado para um parametro
function criaPesoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome, 
        idade: idade
    };
}
//Essa mesma function pode ser reduzida ex.:
// function criaPesoa(nome, sobrenome, idade){
//     return {nome,sobrenome,idade};
// }
const pessoa01 = criaPesoa('André', 'Lucas', 18);
const pessoa02 = criaPesoa('Arthur', 'Lucas', 18);
const pessoa03 = criaPesoa('Leticia', 'Lucas', 18);
const pessoa04 = criaPesoa('André', 'Lucas', 18);
const pessoa05 = criaPesoa('André', 'Lucas', 18);
console.log(pessoa01);