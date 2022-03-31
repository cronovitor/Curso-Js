function criaPessoa(nome, sobrenome) {


  return Object.create(pessoaProto, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  })

}


const falar = {
  
  falar() {
    
    console.log(`${this.nome} esta falando`)
    
  }
  
}

const comer = {
  
  comer() {
    
    console.log(`${this.nome} esta comendo`)
    
  }
  
}

const beber = {
  
  beber() {
    
    console.log(`${this.nome} esta bebendo`)
    
  },
  
}

const pessoaProto = {...falar, ...beber, ...comer}
const p1 = criaPessoa('Vitor', 'Alves')
console.log(p1.falar())