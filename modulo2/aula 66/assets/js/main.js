function relogio() {

  const $divRelogio = document.querySelector('.divRelogio')
  let segundos = 0;
  let timer;

  function iniciarRelogio() {

    timer = setInterval(function () {

      segundos++
      $divRelogio.innerHTML = getTimefromSec(segundos);

    }, 1000);

  }

  function getTimefromSec(segundos) {

    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {

      hour12: false,
      timeZone: 'UTC'

    })

  }

  document.addEventListener('click', function (e) {

    const el = e.target

    if (el.classList.contains('iniciar')) {

      $divRelogio.classList.remove('pausado');
      clearInterval(timer);
      iniciarRelogio()

    }

    if (el.classList.contains('parar')) {

      $divRelogio.classList.add('pausado')
      clearInterval(timer);

    }

    if (el.classList.contains('zerar')) {
      
      clearInterval(timer);
      $divRelogio.innerHTML = '00:00:00';
      segundos = 0;
      $divRelogio.classList.remove('pausado')

    }

  })


};

relogio();