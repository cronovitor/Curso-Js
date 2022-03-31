import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senhasGeradas')
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiuscula = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-Senha')

export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera(){

  const senha = geraSenha(

    qtdCaracteres.value,
    chkMaiuscula.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked


  );

  return senha || "Nada selecionado"

}

// import geraSenha from './geradores';

// const senhaGerada = document.querySelector('.senhasGeradas');
// const qtdCaracteres = document.querySelector('.qtd-caracteres');
// const chkMaiusculas = document.querySelector('.chk-maiusculas');
// const chkMinusculas = document.querySelector('.chk-minusculas');
// const chkNumeros = document.querySelector('.chk-numeros');
// const chkSimbolos = document.querySelector('.chk-simbolos');
// const gerarSenha = document.querySelector('.gerar-Senha');

// export default () => {
//   gerarSenha.addEventListener('click', () => {
//     senhaGerada.innerHTML = gera();
//   });
// };

// function gera() {
//   const senha = geraSenha(
//     qtdCaracteres.value,
//     chkMaiusculas.checked,
//     chkMinusculas.checked,
//     chkNumeros.checked,
//     chkSimbolos.checked
//   );

//   return senha || 'Nada selecionado.';
// }
