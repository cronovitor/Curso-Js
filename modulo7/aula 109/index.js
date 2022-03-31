function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {

    
    setTimeout(() => {
      
      if (typeof msg !== 'string') {
        
        reject('CAI NO ERRO');
        return
      }
      resolve(msg.toUpperCase() + ' - passei na promise');
      return;

    }, tempo);


  })


}

function aleatorio(min, max) {

  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)

}

const promises = [

  //'primeiro valor',
  esperaAi('promise 1', aleatorio(1, 5)),
  esperaAi('promise 2', aleatorio(1, 5)),
  esperaAi('promise 3', aleatorio(1, 5)),
  //esperaAi(1000, aleatorio(1, 5)),
  //'outro valor'

];

// Promise.race(promises).then((valor) =>{

//   console.log(valor);

// }).catch(erro => {

//   console.log(erro)

// })

function baixaPagina() {

  const emCache = true;

  if(emCache){

    return Promise.resolve('Pagina em cache')

  }else{

    return esperaAi('baixei a pagina', 3000)

  }
}

baixaPagina().then(dadosPagina => {

  console.log(dadosPagina)

}).catch(e => console.log(e))