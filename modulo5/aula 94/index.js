// const objA = {

//   chaveA: 'A'

// };
// const objB = {

//   chaveB: 'B'

// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);

function Produto(nome, preco) {

  this.nome = nome;
  this.preco = preco;

}

Produto.prototype.desconto = function (percentual) {

  this.preco = this.preco - (this.preco * (percentual / 100));

}

Produto.prototype.aumento = function (percentual) {

  this.preco = this.preco + (this.preco * (percentual / 100));

}

const p1 = new Produto('camiseta', 50);
p1.desconto(10)
console.log(p1)

//literal

const p2 = {

  nome: 'caneca',
  preco: 15

};

Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);

console.log(p2)

const p3 = Object.create(Produto.prototype, {

  nome: {

    writable: true,
    configurable: true,
    enumerable: true,
    value: 'calça'

  },
  preco: {

    writable: true,
    configurable: true,
    enumerable: true,
    value: 113

  },


});
p3.aumento(10)
console.log(p3)