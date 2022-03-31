const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i of numeros){

  let numero = numeros[i]

  if(numero === 2){

    console.log('pulei o 2')
    continue

  }
  console.log(numero)

  if(numero === 7){

    console.log('encontrei o 7');
    break

  }

}