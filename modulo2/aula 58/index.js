function random(min, max) {

  const r = Math.random() * (max - min) + min

  return Math.ceil(r)

}
const min = 1;

const max = 20;

let rand = random(min, max)

console.log(rand !== 20)

while (rand !== 20) {

  rand = random(min, max)
  console.log(rand)

}
console.log(rand !== 20)

console.log('#####')


rand = 20
console.log(rand !== 20)
do {


  rand = random(min, max)
  console.log(rand)

} while (rand !== 20)

console.log(rand !== 20)

