class DispositivoEletronico{

  constructor(nome){

    this.nome = nome;
    this.ligado = false;

  }

  ligar(){

    if(this.ligado){

      console.log(this.nome + ' ja ligado')

      return

    }

    this.ligado = true;

  }

  desligar(){

    if(!this.ligado){

      console.log(this.nome + ' ja desligado')

      return

    }

    this.ligado = false;



  }

};

// const d1 = new DispositivoEletronico('smartphone');

// d1.ligar();
// d1.ligar();
// d1.desligar();
// console.log(d1)

class smartphone extends DispositivoEletronico{

  constructor(nome, cor, modelo){

    super(nome);
    this.cor = cor;
    this.modelo = modelo;

  }

}

class Tablet extends DispositivoEletronico{

  constructor(nome, temWifi){

    super(nome);
    this.temWifi = temWifi;

  }

  ligar(){

    console.log('olha, você alterou o método ligar')

  }

  falaOi(){

    console.log('oi')

  }

}

const s1 = new smartphone('iphone', 'preto', 'iphone 11');
console.log(s1)

const t1 = new Tablet('ipad', true)

console.log(t1)