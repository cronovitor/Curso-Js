//funçao com a palavra function: com a palavra arguments consigo recuperar todos
//os argumentos passados mesmo sem a função estar esperando receber parametros
/*
function funcao(a, b, c) {

  console.log(arguments);

  let total = 0;

  for(let argumento of arguments){

    total += argumento

  }

  console.log(total, a, b, c)

}

funcao(666, 665, 6565, 653);

*/

// function funcao(a, b = 2, c = 4){

//   console.log(a + b + c);

// }

// funcao(2, undefined, 10)


// function funcao({nome, sobrenome, idade}){

//   console.log(nome, sobrenome, idade);

// }

// funcao({nome: 'vitor', sobrenome: 'alves', idade: 28})

// function funcao([valor1, valor2, valor3]){

//   console.log(valor1, valor2, valor3);

// }

// funcao(['vitor', 'alves', 28])

//rest operator

const conta = (operador, acumulador, ...numeros) => {

  for(let numero of numeros){

    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;

  }

  console.log(acumulador);

};

conta('*', 1, 20, 30, 40, 50);

