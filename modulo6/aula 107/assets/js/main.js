class ValidaFormulario {

  constructor() {

    this.formualario = document.querySelector('.formulario')
    this.eventos();


  }

  eventos (){

    this.formualario.addEventListener('submit', e => {

      this.handleSubmit(e);

    });

    
  }
  
  handleSubmit(e){
  
    e.preventDefault();
    const camposValidos = this.camposSaoValidos()
    const senhasValidas = this.senhasSaoValidas()

    if(camposValidos && senhasValidas){

      alert('formulario enviado')

      this.formualario.submit();

    }
  
  }

  senhasSaoValidas(){

    let valid = true;

    const senha = this.formualario.querySelector('.senha')
    const repetirSenha = this.formualario.querySelector('.repetirSenha')

    if(senha.value !== repetirSenha.value) {

      valid = false;
      this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais.')

    }

    if(senha.value.length < 6 || senha.value.length > 12){

      valid = false;
      this.criaErro(senha, 'Senha precisa estar ente 6 e 12 caracteres.');

    }

    return valid

  }

  camposSaoValidos(){

    let valid = true;

    for(let errorText of this.formualario.querySelectorAll('.error-text')){

      errorText.remove();

    }

    for(let campo of this.formualario.querySelectorAll('.validar')) {

      const label = campo.previousElementSibling.innerText;

      if(!campo.value){

        this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;

      };

      if(campo.classList.contains('cpf')){

        if(!this.validaCPF(campo)) valid = false;

      };

      if(campo.classList.contains('usuario')){

        if(!this.validaUsuario(campo)) valid = false;

      };

    };

    return valid = true;

  };

  validaUsuario(campo){

    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12){

      this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.');
      valid = false;

    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){

      this.criaErro(campo, 'nome de usuario precisa conter apenas letras ou numeros.');
      valid = false;

    }

    return valid;

  }

  validaCPF(campo){

    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()){

      this.criaErro(campo, 'CPF invalido');
      return false;

    }

    return true;

  }

  criaErro(campo, msg){

    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);

  }

}

const valida = new ValidaFormulario();