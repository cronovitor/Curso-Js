// function falaFrase(comeco){

//   function falaResto(resto){

//     return comeco + ' ' + resto;

//   }

//   return falaResto;

// }

// const fala = falaFrase('Ola');
// const resto = fala('mundo');
// console.log(resto)

function criaMultiplicação(multiplicador){

  return function(n){

    return n * multiplicador;

  };

};

const duplica = criaMultiplicação(2);
const triplica = criaMultiplicação(3);
const quadriplica = criaMultiplicação(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))