function meuEscopo() {

  const $form = document.querySelector('.form');

  const $resultado = document.querySelector('.recebido');

  const pessoa = []


  function recebeEventoForm(evento) {

    evento.preventDefault();

    const $nome = $form.querySelector('.nome');

    const $sobrenome = $form.querySelector('.sobrenome');

    const $peso = $form.querySelector('.peso');

    const $altura = $form.querySelector('.altura');

    pessoa.push({

      nome: $nome.value,

      sobrenome: $sobrenome.value,

      peso: $peso.value,

      altura: $altura.value


    })

    console.log(pessoa)


    $resultado.innerHTML += `${pessoa[length].nome} ${pessoa[length].sobrenome} pesa: ${pessoa[length].peso} e tem de altura: ${pessoa[length].altura} <br />`;
    

  };

  
 
  $form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();