function aula67() {

  const $inputTarefa = document.querySelector('.input-tarefa')
  const $btnTarefa = document.querySelector('.btn-tarefa');
  const $ulTarefas = document.querySelector('.ul-tarefas')

  $inputTarefa.addEventListener('keypress', function (e) {

    if (e.keycode === 13) {

      if (!$inputTarefa.value) return;
      criaTarefa($inputTarefa.value)

    }

  })

  function limpaInput(){

    $inputTarefa.value = ''
    $inputTarefa.focus();

  }

  $btnTarefa.addEventListener('click', function () {

    if (!$inputTarefa.value) return;
    criaTarefa($inputTarefa.value)

  })

  function criaTarefa(textoInput) {

    const li = criaLi();
    li.innerText = textoInput;
    $ulTarefas.appendChild(li)
    limpaInput();
    criaBotaoApag(li);
    salvaTarefas();

  }

  function salvaTarefas(){

    const liTarefas = $ulTarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas){

      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);

    }

    console.log(listaDeTarefas)

    const tarefasJSON = JSON.stringify(listaDeTarefas)

    localStorage.setItem('tarefas', tarefasJSON)

  }

  function criaLi() {

    const li = document.createElement('li')
    return li

  }

  function criaBotaoApag(li){

    li.innerHTML += ' ';
    const botaoApag = document.createElement('button')
    botaoApag.innerText = 'Apagar'
    botaoApag.setAttribute('class', 'apagar')
    botaoApag.setAttribute('title', 'apagar essa tarefa')
    li.appendChild(botaoApag)

  }

  document.addEventListener('click', function(e){

    const el = e.target;

    if(el.classList.contains('apagar')){

      el.parentElement.remove();
      salvaTarefas()

    }
  })

  function addTarefasSalvas(){

    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){

      criaTarefa(tarefa);

    }

  }

  addTarefasSalvas();


}
aula67();