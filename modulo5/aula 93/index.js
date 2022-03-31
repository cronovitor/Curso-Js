//contrutora -> molde (classe)
function Pessoa(nome, sobrenome){

  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

}

Pessoa.prototype.nomeCompleto = function(){

  return this.nome + ' ' + this.sobrenome;

}

//instancia

const pessoa1 = new Pessoa('Vitor', 'Alves');
const pessoa2 = new Pessoa('Aquilles', 'Alves');
const data = new Date();

console.dir(pessoa1.nomeCompleto)
console.dir(data)
