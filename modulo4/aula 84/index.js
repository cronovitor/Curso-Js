//Filter -> filter vai sepre retornar um array com a mesma quantidade de elementos ou menos
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter( valor => valor > 10);

console.log(numerosFiltrados)

*******/

const pessoas = [

  {nome : 'vitor', idade: 28},
  {nome : 'ronaldo', idade: 26},
  {nome : 'ivania', idade: 72},
  {nome : 'aquilles', idade: 2},
  {nome : 'nivalda', idade: 50},
  {nome : 'marta', idade: 52},

];

const pessoasNomeG = pessoas.filter( obj => obj.nome.length >= 7 );
const pessoasIdade50 = pessoas.filter( obj => obj.idade >= 50 );
const pessoasLetraIniA= pessoas.filter( obj => obj.nome.toLowerCase().startsWith('a') );

console.log(pessoasNomeG);
console.log(pessoasIdade50);
console.log(pessoasLetraIniA);