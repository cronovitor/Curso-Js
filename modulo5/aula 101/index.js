const pessoas = [

  {id: 3, nome: 'Vitor'},
  {id: 2, nome: 'Aquilles'},
  {id: 1, nome: 'Ronaldo'},

];

// const novasPessoas = {};

// for (const pessoa of pessoas){

//   const {id} = pessoa;
//   novasPessoas[id] = { ...pessoa}

// }

const novasPessoas = new Map();

for (const pessoa of pessoas){

  const {id} = pessoa;
  novasPessoas.set(id, { ...pessoa})

}

console.log(novasPessoas.get(2))

for(const pessoas of novasPessoas){

  console.log(pessoas)

}