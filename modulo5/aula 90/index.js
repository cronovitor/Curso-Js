// defineProperty - defineProperties


//defineProperty
// function Produto(nome, preco, estoque) {

//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, 'estoque', {

//     enumerable: true, //mostra a chave (no caso chave estoque)
//     value: estoque, //valor
//     writable: true, //pode alterar
//     configurable: true //configuravel e não permite apaar a chave

//   });

// };

// const p1 = new Produto('camiseta', 'estoque', 20, 3);

// console.log(Object.keys(p1)); //mostra as chaves do meu objeto

// for (let chaves in p1) {

//   console.log(chaves)

// }

//defineProperties

function Produto(nome, preco, estoque) {

  Object.defineProperty(this, 'estoque', {

    enumerable: true, //mostra a chave (no caso chave estoque)
    value: estoque, //valor
    writable: true, //pode alterar
    configurable: true //configuravel e não permite apaar a chave

  });

  Object.defineProperties(this, {

    nome: {

      enumerable: true, //mostra a chave (no caso chave estoque)
      value: nome, //valor
      writable: true, //pode alterar
      configurable: true //configuravel e não permite apaar a chave

    },
    preco: {

      enumerable: true, //mostra a chave (no caso chave estoque)
      value: preco, //valor
      writable: true, //pode alterar
      configurable: true //configuravel e não permite apaar a chave

    }

  });

};

const p1 = new Produto('camiseta', 'estoque', 20, 3);

console.log(Object.keys(p1), p1); //mostra as chaves do meu objeto

for (let chaves in p1) {

  console.log(chaves)

}