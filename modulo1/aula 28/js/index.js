const numero = Number(prompt('Digite um numero'))

const $meuNumero = document.getElementById('meuNumero');

const $minhaDiv = document.getElementById('texto');

$meuNumero.innerHTML = numero;

$minhaDiv.innerHTML += `<p>A Raiz quadrada de ${numero} é : ${Math.sqrt(numero)} </p>`
$minhaDiv.innerHTML +=  `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
$minhaDiv.innerHTML +=  `<p>É NaN: ${Number.isNaN(numero)}</p>`
$minhaDiv.innerHTML +=  `<p>Arredondando pra baixo: ${Math.floor(numero)}</p>`
$minhaDiv.innerHTML +=  `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
$minhaDiv.innerHTML +=  `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`

