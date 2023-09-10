//Operação ternária
//(condição) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 5510;
const nivelUsuario = pontuacaoUsuario >=1000 ? "Usuário vip" : "Usuário normal";


// if(pontuacaoUsuario >= 1000){
//     console.log("Usuário vip")
// }else{
//     console.log("Usuário normal")
// }


const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao)