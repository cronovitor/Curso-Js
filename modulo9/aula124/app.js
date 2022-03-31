// const mod1 = require('./mod1')
// console.log(mod1.falaNome())

// const falaNome = require('./mod1').falaNome
// console.log(falaNome())

// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome;
// console.log(falaNome())

// const {nome, sobrenome, falaNome} = require('./mod1')

// console.log(nome, sobrenome)

// console.log(falaNome())

const path = require('path')

const {Pessoa} = require('./mod1')

const p1 = new Pessoa('Vitor')

console.log(p1)