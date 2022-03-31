const $parafragos = document.querySelector('.paragrafos');

const ps = $parafragos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps){

  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#ffffff'

}