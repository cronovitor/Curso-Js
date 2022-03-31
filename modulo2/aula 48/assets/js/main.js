/*
function meuEscopo() {

  const capturaDia = new Date();

  function formataData() {

    const diaSemana = capturaDia.getDay();
    const dia = capturaDia.getDate();
    const mes = capturaDia.getMonth() + 1;
    const ano = capturaDia.getFullYear();
    const hora = capturaDia.getHours();
    const min = capturaDia.getMinutes();
    const mesFormatado = formataMes(mes);
    const diaSemanaFormatado = formataDiaSemana(diaSemana);

    escreveData(min, hora, dia, diaSemanaFormatado, mesFormatado, ano);

  }

  function formataMes(mes) {

    switch (mes) {

      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setenbro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';

    };

  };

  function escreveData(min, hora, dia, diaSemana, mes, ano){

    const $div = document.querySelector('.div');

    return $div.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;

  };

  function formataDiaSemana(diaSemana) {
    switch (diaSemana) {

      case 0:
        return `Domingo`;
      case 1:
        return 'Segunda-Feira'
      case 2:
        return 'Terça-Feira'
      case 3:
        return 'Quarta-Feira'
      case 4:
        return 'Quinta-Feira'
      case 5:
        return 'Sexta-Feira'
      case 6:
        return `Sabado`


    };
  }

  formataData();
};
meuEscopo();
*/

// Resolução professor da forma de quem não leu a documentação:

/*

const $div = document.querySelector('.div');
const data = new Date();

function getDiaSemanaTexto(diaSemana){

  switch (diaSemana) {

    case 0:
      return `Domingo`;
    case 1:
      return 'Segunda-Feira'
    case 2:
      return 'Terça-Feira'
    case 3:
      return 'Quarta-Feira'
    case 4:
      return 'Quinta-Feira'
    case 5:
      return 'Sexta-Feira'
    case 6:
      return `Sabado`
  };

};

function getNomeMes(numeroMes){

  let nomeMes;

  switch (numeroMes) {

    case 0:
      nomeMes = 'Janeiro';
      return nomeMes
    case 1:
      nomeMes = 'Fevereiro';
      return nomeMes
    case 2:
      nomeMes = 'Março';
      return nomeMes
    case 3:
      nomeMes = 'Abril';
      return nomeMes
    case 4:
      nomeMes = 'Maio';
      return nomeMes
    case 5:
      nomeMes = 'Junho';
      return nomeMes
    case 6:
      nomeMes = 'Julho';
      return nomeMes
    case 7:
      nomeMes = 'Agosto';
      return nomeMes
    case 8:
      nomeMes = 'Setembro';
      return nomeMes
    case 9:
      nomeMes = 'Outubro';
      return nomeMes
    case 10:
      nomeMes = 'Novembro';
      return nomeMes
    case 11:
      nomeMes = 'Dezembro';
      return nomeMes

  };

}

function criaData(data){

  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
  `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);


}

function zeroEsquerda(num){

  return num >= 10 ? num : `0${num}`;

}

$div.innerHTML = criaData(data)

*/

//Forma do professor e de quem leu a documentação:
/*
const $div = document.querySelector('.div');
const data = new Date();

$div.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'});
*/

//forma simplificada dos switch

const $div = document.querySelector('.div');
const data = new Date();

function getDiaSemanaTexto(diaSemana){

  const diasSemana = [`Domingo`, 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 
      'Quinta-Feira', 'Sexta-Feira', `Sabado`];

  return diasSemana[diaSemana]

};

function getNomeMes(numeroMes){

  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
                  'outubro', 'novembro', 'dezembro']
                  return meses[numeroMes]
}

function criaData(data){

  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
  `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);


}

function zeroEsquerda(num){

  return num >= 10 ? num : `0${num}`;

}

$div.innerHTML = criaData(data)

