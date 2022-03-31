//Superclass

function Conta(agencia, conta, saldo){

  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;

}

Conta.prototype.sacar = function(valor){

  if(valor > this.saldo){

    console.log(`Saldo insuficiente: ${this.saldo}`)
    return

  }
  this.saldo -= valor;
  this.verSaldo();

}
Conta.prototype.depositar = function(valor){

  this.saldo += valor
  this.verSaldo()

}
Conta.prototype.verSaldo = function(){

  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);

}

function ContaCorrente(agencia, conta, saldo, limite){

  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;

}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){

  if(valor > this.saldo + this.limite){

    console.log(`Saldo insuficiente: ${this.saldo}`)
    return

  }
  this.saldo -= valor;
  this.verSaldo();

}

function ContaPoupanca(agencia, conta, saldo){

  Conta.call(this, agencia, conta, saldo);

}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
const cp = new ContaPoupanca(33, 44, 0)

cc.depositar(55)
cc.depositar(2)
cc.sacar(88)
console.log('//////')
cp.depositar(63)
cp.depositar(7)
cp.sacar(88)

