const elemento = [

  {tag: 'p', texto: 'frase 1'},
  {tag: 'div', texto: 'frase 2'},
  {tag: 'footer', texto: 'frase 3'},
  {tag: 'section', texto: 'frase 4'}

]

const $container = document.querySelector('.container');
const $div = document.createElement('div');

$container.appendChild($div);

for(let i = 0; i < elemento.length; i++){

  const {tag, texto} = elemento[i];

  const tagCriada = document.createElement(tag);

  //tagCriada.innerText = texto; // forma usando innerText

  let textoCriado = document.createTextNode(texto); // forma criando TextNode

  tagCriada.appendChild(textoCriado) // usando textNode

  $div.appendChild(tagCriada)

}


