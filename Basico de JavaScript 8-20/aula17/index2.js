// Os dados de variaveis e constantes estão "protegidos" de alteraçãoes ex: uma variavel definida dentro de uma function não existe fora dela
// As funções poden serem reutilizadas durante todo código
function soma(x,y ){ // podemos definir valores padão para os parametros
    const resultado = x + y;
    return resultado;// A função acaba no return, oque estivr abaixo dela não será exibido
}

console.log(soma(1,2))
console.log(soma(41,72))
console.log(soma(12,25))
console.log(soma(41,22))

