const nome = 'vitor';

function retornaNome(){

  function retornaRetorna(){

    return nome;

  }

  return retornaRetorna()

}

const armazenaFunction = retornaNome()

console.log(armazenaFunction)