// class ValidaCPF {

//   constructor(cpf) {

//     this.cpf = cpf;

//   }

//   cpfLimpo() {

//     const limpo = this.cpf.replace(/\D+/g, '')
//     return limpo

//   }

//   valida() {

//     if (typeof this.cpfLimpo() === 'undefined') return false;
//     if (this.cpfLimpo().length !== 11) return false;
//     if (this.isSequencia()) return false;
//     const cpfParcial = this.cpfLimpo().slice(0, -2);
//     const digito1 = this.criaDigito(cpfParcial)
//     const digito2 = this.criaDigito(cpfParcial + digito1)
//     const novoCpf = cpfParcial + digito1 + digito2
//     return novoCpf === this.cpfLimpo()

//   }

//   criaDigito(cpfParcial) {

//     const cpfArray = Array.from(cpfParcial);
//     let regressivo = cpfParcial.length + 1
//     const total = cpfArray.reduce((ac, val) => {

//       ac += (regressivo * Number(val))
//       regressivo--
//       return ac

//     }, 0)

//     let digito = 11 - (total % 11)
//     return digito > 9 ? 0 : String(digito)

//   }

//   isSequencia() {

//     const sequencia = this.cpfLimpo()[0].repeat(this.cpfLimpo().length);
//     return sequencia === this.cpfLimpo();

//   }

// }

// const c1 = new ValidaCPF('100.625.906-69')

// if(c1.valida() === true){

//   console.log('CPF valido')

// }else{

//   console.log('CPF invalido')

// }

class ValidaCPF {

  constructor(cpfEnviado){

    Object.defineProperty(this, 'cpfLimpo', {

      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')

    })

  }

  isSequencia(){

    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

  }

  geraNovoCpf(){

    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito)
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1)
    this.NovoCPF = cpfSemDigito + digito1 + digito2

  }

  static geraDigito(cpfSemDigito){

    let total = 0;
    let reverso = cpfSemDigito.length + 1

    for(let stringNumerica of cpfSemDigito){

      total += reverso * Number(stringNumerica)
      reverso--;


    }

    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : 0

  }

  valida(){

    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false
    this.geraNovoCpf()

    return this.NovoCPF === this.cpfLimpo

  }

}

// const validacpf = new ValidaCPF('705.484.450-52')

// if (validacpf.valida()){

//   console.log('CPF valido')

// }else{

//   console.log('CPF invalido')

// }