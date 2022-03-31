// function meuEscopo() {

//   const $form = document.querySelector('.form')

//   const $btnEnvio = $form.querySelector('.btnEnvio');  

//   function recebeEventoForm(evento) {

//     evento.preventDefault();

//     const $peso = $form.querySelector('.peso');

//     const $altura = $form.querySelector('.altura');

//     $peso.value = parseFloat($peso.value);

//     $altura.value = parseFloat($altura.value);

//     if ($peso.value > 500 || $peso.value < 30){

//       let invalidoPeso = `${$peso.value} não é um peso valido`

//       return escreve(invalidoPeso) 

//     } else if ($altura.value > 2.30 || $altura.value < 0.60){

//       let invalidoAltura = `${$altura.value} não é um peso valido`

//       return escreve(invalidoAltura)

//     } else {

//     return calcularIMC($peso.value, $altura.value)

//     };


//   };

//   function calcularIMC(peso, altura){

//     let resultadoCalculo = peso / (altura * altura);

//     if(resultadoCalculo < 18.5){

//       return escreve(`Abaixo do peso`)

//     } else if(resultadoCalculo >= 18,5 && resultadoCalculo <= 24.9){

//       return escreve(`Peso normal`)

//     } else if(resultadoCalculo >= 25 && resultadoCalculo <= 29.9){

//       return escreve(`Sobrepeso`)

//     } else if(resultadoCalculo >= 30 && resultadoCalculo <= 34.9){

//       return escreve(`Obesidade grau 1`) 

//     } else if(resultadoCalculo >= 35 && resultadoCalculo <= 39.9){

//       return escreve(`Obesidade grau 2`)

//     } else if(resultadoCalculo >= 40){


//       return escreve(`Obesidade grau 3`)

//     };

//   };

//   function escreve(escrever){

//     let $resultado = document.querySelector('.resultado');

//     $resultado.innerHTML = escrever;

//   };

//   $btnEnvio.addEventListener('click', recebeEventoForm);

// };

// meuEscopo();

//!!solução professor abaixo!!

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {

  e.preventDefault();

  const inputPeso = e.target.querySelector('.peso');

  const inputAltura = e.target.querySelector('.altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {

    setResultado(`Peso invalido`, false);

    return;

  }

  if (!altura) {

    setResultado(`Altura invalido`, false);

    return;

  }

  const imc = getImc(peso, altura);

  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);

});

function criaP() {

  const p = document.createElement('p');

  return p;

};

function setResultado(msg, isValid) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';

  const p = criaP();
  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad');

  }

  p.innerHTML = msg;
  resultado.appendChild(p);
};

function getImc(peso, altura) {

  const imc = peso / altura ** 2;

  return imc.toFixed(2);

};

function getNivelImc(imc) {

  const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`,
    `Obesidade grau 2`, `Obesidade grau 3`];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];

}