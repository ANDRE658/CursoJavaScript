//ARRAY 
// Os array são indexados igual as strings, agora cada indice é um elemento
//                  0       1       2
const alunos = ['André', 'Lucas','Leticia']
console.log(alunos)

//pode ser alterado elementos do array
alunos[1] = 'José'
console.log(alunos)

//adicionando elementos no array
alunos[3] = 'Carlos' 
console.log(alunos)

alunos[alunos.length] = 'Suzana' //Adiciona um elemento ao final do array
console.log(alunos)

alunos.push('Maria'); //Função que faz adição de um elemento ao final do array
console.log(alunos)

alunos.unshift('Ariane') //Adiciona um elemento ao começo do array - isso mudará o indice dos demais elementos
console.log(alunos)


//remover elementos
alunos.pop()//Remove elemento ao final do array  - isso mudará o indice dos demais elementos
console.log(alunos)

alunos.shift()//Remove elemento no começo do array - isso mudará o indice dos demais elementos
console.log(alunos)
 

//Removendo sem altera os indices
delete alunos[2]
console.log(alunos)//No lugar do elemento removido ficará vago

///acessando indice não existente retorna undefined
