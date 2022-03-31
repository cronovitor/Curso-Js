function Produto(nome, preco){

  this.nome = nome;
  this.preco = preco;

};

Produto.prototype.aumento = function (quantia){

  this.preco += quantia

}

Produto.prototype.desconto = function (quantia){

  this.preco -= quantia

}

function Camiseta(nome, preco, cor){

  Produto.call(this, nome, preco)

}

Camiseta.prototype = Object.create(Produto.prototype)

Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual) {

  this.preco = this.preco + (this.preco * (this.preco / percentual));

}

function Caneca(nome, preco, material, estoque){

  Produto.call(this, nome, preco);
  this.material = material;
  
  Object.defineProperty(this, 'estoque', {

    unumerable: true,
    configurable: false,

    get: function(){

      return estoque

    },
    set: function(valor){

      if(typeof valor !== 'number') return
      estoque = valor

    }

  })

}

Caneca.prototype = Object.create(Produto.prototype);

Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);

const camiseta = new Camiseta('Regata', 7.5, 'preta');

const caneca = new Caneca('caneca', 13, 'plastico', 5);

console.log(camiseta)
console.log(produto)
console.log(caneca.estoque)