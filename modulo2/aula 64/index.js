/*
try{
  //executada quando não ha erros
} catch{
  // executado quando ha erros
} finally{
  //executado sempre

} */

function retornaHora(data) {

  if (data && !(data instanceof Date)) {

    throw new TypeError('Esperando instância de Date.');

  }

  if (!data) {

    data = new Date();

  }

  return data.toLocaleTimeString('pt-BR', {

    hour12: false

  });

}

try {
  const data = new Date('01-01-1970 12:58:00')
  let dataHora = data.toLocaleTimeString('pt-BR');
  const hora = retornaHora();
  console.log(dataHora)
} catch (e) {

  console.log('olha o erro ai')

} finally{

  console.log('tenha um bom dia')

}