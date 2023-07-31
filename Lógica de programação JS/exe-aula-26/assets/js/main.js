function meuEscopo(){
    const form = document.querySelector(".form");
    const inputPeso = document.querySelector("#inputPeso");
    const inputAltura = document.querySelector("#inputAltura");
    const resposta = document.querySelector("#resposta");
    
    function eventoForm (evento){
        evento.preventDefault();
        let peso = Number(inputPeso.value);
        let altura = Number(inputAltura.value);
        let IMC = (peso/altura**2)

        if (isFinite(peso)){
            if (isFinite(altura)){

            }else{
                resposta.innerHTML = `A altura foi digitada incorretamente`;
            }
         }else{
            resposta.innerHTML = `O peso foi digitado incorretamente`;
         }
        
    }
    form.addEventListener('submit', eventoForm);
}
meuEscopo()
