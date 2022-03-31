//factory function
function  criaPessoa(nome, sobrenome, altura, peso) {

  return{
    nome,

    sobrenome,

    get nomeCompleto(){

      return `${this.nome} ${this.sobrenome}`

    },

    set nomeCompleto(valor){

      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');

    },

    fala(assunto){

      return `${this.nome} está ${assunto}.`

    },

    altura: altura,

    peso: peso,

    get imc(){

      const indice = this.peso / (this.altura ** 2);

      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Vitor', 'Alves', 1.83, 85);

const p2 = criaPessoa('Ronaldo', 'Alves', 1.93, 80);

console.log(p1)

p1.nomeCompleto = 'Aquilles Alves'

console.log(p1.nomeCompleto)

console.log(p1.sobrenome)

console.log(p1.fala('falando merda nem uma'))

console.log(p1.imc)

//constructor function


