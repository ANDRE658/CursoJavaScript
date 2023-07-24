
function saudacao(nome){
    console.log(`Bom dia ${nome}`) //nesse caso a função faz a impreção da frase
}

saudacao('andre');
saudacao('Lucas');// definição de parametro
saudacao('maria');
//------------------------------------------------------------------------------------------------------------------------------------
function saudacao(nome){
    return `Bom dia ${nome}` //nesse caso a função retorna o valor da frase que será definido na 'const' e a const será impressa na tela
}

const variavel = saudacao('André');
console.log(variavel)