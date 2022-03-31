//nome.splice(indiece, delete, eleme1, eleme2, eleme3)

const nomes = ['vitor', 'Aquilles', 'Ivania', 'Marta'];

//const removidos = nomes.splice(1, 1); //dessa forma eu removo um elemento ou mais elementos da minha array

//const removidos = nomes.splice(3, 0, 'Nivalda'); //dessa forma eu add um alemento a minha array

const removidos = nomes.splice(3, 1, 'Nivalda'); //dessa forma eu retiro um ou mais elemento da mainha array e add um ou mais alementos novos a minha array 


console.log(nomes, removidos)