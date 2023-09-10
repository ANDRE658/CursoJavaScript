function meuEscopo(){
    const form = document.querySelector(".form");
    const inputPeso = document.querySelector("#inputPeso");
    const inputAltura = document.querySelector("#inputAltura");
    const resposta = document.querySelector("#resposta");

    function eventoForm (evento){
        evento.preventDefault();
        let peso = Number(inputPeso.value);
        let altura = Number(inputAltura.value);
        let IMC = Number((peso/altura**2).toFixed(2))

        if (isFinite(peso) && peso != 0){
            if (isFinite(altura) && altura != 0 ){

                if(IMC > 40){
                    resposta.innerHTML = `Seu IMC é ${IMC}(Obesidade grau 3)`;
                }else if(IMC < 40 && IMC > 35){
                    resposta.innerHTML = `Seu IMC é ${IMC}(Obesidade grau 2)`;
                }else if(IMC < 35 && IMC > 30){
                    resposta.innerHTML = `Seu IMC é ${IMC}(Obesidade grau 1)`;
                }else if(IMC < 30 && IMC > 25){
                    resposta.innerHTML = `Seu IMC é ${IMC}(Sobrepeso)`;
                }else if(IMC < 25 && IMC > 18.5){
                    resposta.innerHTML = `Seu IMC é ${IMC}(Peso normal)`;
                }else if(IMC < 18.5){
                    resposta.innerHTML = `Seu IMC é ${IMC}(Abaixo do peso)`;
                }
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
