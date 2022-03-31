function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {

    if(typeof msg !== 'string') reject ('bad value');

    setTimeout(() => {

      resolve(msg);

    }, tempo);


  })


}

function aleatorio(min, max) {

  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)

}

esperaAi('frase 1', aleatorio(1, 5)).then(resposta => {

  console.log(resposta);

  return esperaAi(22222, aleatorio(1, 5));

}).then(resposta => {

  console.log(resposta)
  return esperaAi('frase 3', aleatorio(1, 5));

}).then(resposta => {

  console.log(resposta)

}).catch(e => {

  console.log('ERRO:', e)

})

