// function retornaMaior(n1, n2){


//   if(n1 > n2){

//     return console.log(`ganhador foi o numero 1: ${num1}`);

//   }else {

//     return console.log(`ganhador foi o numero 2: ${num2}`);

//   }

// }

// const num1 = Math.ceil(Math.random() * 10);
// console.log(`numero 1 = ${num1}`)
// const num2 = Math.ceil(Math.random() * 10)
// console.log(`numero 2 = ${num2}`)
// retornaMaior(num1, num2);

//resolução do professor

function max(x, y){

  // if (x > y) return x;
  // return y;

  return x > y ? x : y;

}

const max2 = (x,y) => x > y ? x : y;

console.log(max2(10, 2))