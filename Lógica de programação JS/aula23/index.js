/*
if e else
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/
const hora = 11.59;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
}else if(hora >= 12 && hora <= 17) {
    console.log('Bom tarde');
}else if (hora >= 18 && hora <=23){
    console.log('Bom noite');
} else {
    console.log('Tenha um bom dia')
}
