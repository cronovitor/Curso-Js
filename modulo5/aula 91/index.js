//Getters and Setters
function Produto(nome, preco, estoque) {

  this.nome = nome;
  this.preco = preco;

  let estoquePrivador = estoque;

  Object.defineProperty(this, 'estoque', {

    enumerable: true, //mostra a chave (no caso chave estoque)
    configurable: true, //configuravel e não permite apaar a chave
    get: () => {

      return estoquePrivador

    },
    set: valor => {

      if (typeof valor !== 'number') {

        console.log('bad value');
        return

      }

      estoquePrivador = valor;

    }

  });

};

// const p1 = new Produto('camiseta', 'estoque', 20, 3);
// p1.estoque = 800
// console.log(p1.estoque)

function Criaproduto(nome) {
  return {
    get nome() {

      return nome;

    },

    set nome(valor){

      valor = valor.replace('coisa', '');
      nome = valor;

    }
  };

};

const p2 = Criaproduto('camiseta');
p2.nome = 'qualquer coisa.'
console.log(p2.nome)

