//map
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobro = numeros.map(valor => valor * 2)

console.log(dobro)

*/


const pessoas = [

  {nome : 'vitor', idade: 28},
  {nome : 'ronaldo', idade: 26},
  {nome : 'ivania', idade: 72},
  {nome : 'aquilles', idade: 2},
  {nome : 'nivalda', idade: 50},
  {nome : 'marta', idade: 52},

];

const nomes = pessoas.map( obj => obj.nome);

const idades = pessoas.map( obj => ({idade: obj.idade}));

const objComId = pessoas.map ((obj, indice) => {

  const newObj = {...obj};
  newObj.id = indice;
  return newObj

})

console.log(nomes)

console.log(idades)

console.log(objComId)
