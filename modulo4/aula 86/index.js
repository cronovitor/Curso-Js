
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor, indice, array) =>{

  acumulador.push(valor * 2)

  return acumulador

}, [])


const pessoas = [

  {nome : 'vitor', idade: 28},
  {nome : 'ronaldo', idade: 26},
  {nome : 'ivania', idade: 72},
  {nome : 'aquilles', idade: 2},
  {nome : 'nivalda', idade: 50},
  {nome : 'marta', idade: 52},

];

const maisVelha = pessoas.reduce((acumulador, valor) =>{

  if(acumulador.idade > valor.idade) return acumulador;

  return valor

})

console.log(maisVelha)