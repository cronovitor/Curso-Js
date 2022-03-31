//Declaração de função (function hoisting)
falaOi();
function falaOi(){

  console.log('Oie');

}

//Fist-class objects 
//function expression

const souUmDado = function(){

  console.log('Sou um dado');

}

souUmDado();

//Arrow function

const funcaoArrow = () => {

  console.log('Sou uma arrow function');

};

funcaoArrow()

//Dentro de um objeto

const obj = {

  falar: function(){

    console.log('Estou falando...')

  }

};

obj.falar();
