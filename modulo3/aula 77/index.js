// função contrutora -> objetos
//função fabrica -> objeto
//contrutota -> pessoa (new)

function Pessoa(nome, sobrenome){

  //Atributos ou metodos privados usando const ou let
  const ID = 3215456;
  const metodoInterno = function(){

    console.log('exemplo')

  };

  //atributos ou metodos pblicos usando this

  this.nome = nome;
  
  this.sobrnome = sobrenome;

  this.metodo = function(){

    console.log('metodo publico');

  };

}

const p1 = new Pessoa('Vitor', 'Alves');
const p2 = new Pessoa('Aquilles', 'Alves');

p2.metodo();