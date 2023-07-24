function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    let i = 0

    function recebeEvontoForm (evento){ 
        evento.preventDefault();
        const nome = form.querySelector ('.nome');
        const sobrenome = form.querySelector ('.sobrenome');
        const peso = form.querySelector ('.peso');
        const altura = form.querySelector ('.altura');
        
        
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value });
            console.log(pessoas); 
            
            resultado.innerHTML += `${pessoas[i].nome} ${pessoas[i].sobrenome} ${pessoas[i].peso} ${pessoas[i].altura} <br>`
           
            i += 1
        }

    form.addEventListener('submit', recebeEvontoForm);//Previne o evento padrão de quando á um submit de acontecer, no caso a atualização de página
}
meuEscopo();






























// form.onsubmit = function (evento){
//     evento.preventDefault();
// };