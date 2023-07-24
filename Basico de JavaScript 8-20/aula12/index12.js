let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log(varA, varB, varC)

let varT = varA;
varA = varB;
varB = varC;
varC = varT;

console.log(varA, varB, varC)

varA = 'A';
varB = 'B';
varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)