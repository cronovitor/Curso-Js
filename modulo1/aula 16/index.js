const nome = 'Vitor';

const sobrenome = 'Alves';

const idade = '28';

const peso = 87;

const alturaEmM = 1.83;

let indiceDeMassa = peso / (alturaEmM * alturaEmM);

console.log(indiceDeMassa);

console.log(`${nome} ${sobrenome} tem ${idade} pesa ${peso} kg`);

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceDeMassa}`);

console.log(`${nome} nasceu em`, 2021 - idade);