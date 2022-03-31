import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

(function(){

  const gera = new GeraCpf()

  const cpfGerado = document.querySelector('.resultado')

  cpfGerado.innerHTML = gera.geraNovoCpf()


})();

