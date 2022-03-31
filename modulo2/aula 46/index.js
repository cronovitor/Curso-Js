
// const data = new Date(1630347159324);
// console.log('Dia: ', data.getDate())
// console.log('mes: ', data.getMonth())
// console.log('ano: ', data.getFullYear())
// console.log('hora: ', data.getHours())
// console.log('min: ', data.getMinutes())
// console.log('seg ', data.getSeconds())
// console.log('ms ', data.getMilliseconds())
// console.log('dia semana: ', data.getDay())
// console.log(data.toDateString())
// console.log(Date.now());

const data = new Date();

const  dataBrasil = formataData(data);

function formataData(data){

  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth()); +1;
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

function zeroEsquerda(num){

  return num >= 10? num : `0${num}`

}

console.log(dataBrasil)