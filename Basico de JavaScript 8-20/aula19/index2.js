// Referencia (mutável) - array, object, function

let a = [1, 2, 3];
let b = a; 
console.log(a, b)

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b); 

// Resumo: Podemos dizer que nos dados primitivos, quando usamos sinal de atribuição o valor é copiado sendo ele imutável, já nos dados por refrência, quando usamos sinal de atribuição ele referência os objs(eles apontam para o mesmo lugar na memória).
b = [...a]; //nesse caso o valor de a é copiado para b (funciona tbm para objetos {...x})

b.pop();
console.log(a,b); 