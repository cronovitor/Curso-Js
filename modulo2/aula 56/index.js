// for classico - geralmente com iteraveis (array ou strongs)
// for in - retorna o indice ou chave (string, array, ou objetos)
//for off - retorna o valor em si (iteraveis, arrays ou string)

const nome = ['vitor alves', 'ronaldo', 'aquilles'];

for(let i = 0; i < nome.length; i++){

  console.log(nome[i]);

}

console.log('####')

for(let i in nome){
  console.log(nome[i]);

}

console.log('###')

for(let v of nome){

  console.log(v)

}

console.log('###')

nome.forEach(function (v, i, a){

  console.log(v, i, a)

})