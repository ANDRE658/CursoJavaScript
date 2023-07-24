/*
Operadores Lógico
&& and  e 
|| or  ou
! not  não
*/ 
const expreçãoAnd = true && true && true;
const expreçãoOr = true || false || false;
const expreçãoNot = (!true);
console.log(expreçãoAnd, expreçãoOr, expreçãoNot)

//avalhação de curto circuito -> retorna o valor mesmo sendo ela falsa
// vai retornar  valor verdadeiro (se em 10 dados o primeiro verdadeiro será retornado pelo or( para o and é o mesmo qundo o valor é false))

