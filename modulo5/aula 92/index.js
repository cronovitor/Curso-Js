// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {

//   ...produto,
//   material: 'porcelana',

// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto)
// console.log(caneca)

// const produto = {nome: 'produto', preco: 1.8};
// const caneca = Object.assign({}, produto);

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto)
// console.log(caneca)

// const produto = {nome: 'produto', preco: 1.8};
// Object.defineProperty(produto, 'nome', {

//   writable: false,
//   configurable: false,
//   value: 'qualquer outra coisa'

// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// produto.nome = 'outra coisa';
// delete produto.preco;
// console.log(produto)

const produto = {nome: 'produto', preco: 1.8};
Object.freeze(produto) //trava o objeto e não permite modificações
console.log(Object.values(produto)) //retorna os valores



console.log(Object.entries(produto)) // retorna valores e chaves em arrays

for(let[chaves, valores] of Object.entries(produto)){

  console.log(chaves, valores)

}