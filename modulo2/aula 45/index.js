const pontuacaoUsuario = 999;

//forma if (ja vista antes)

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario)

// mesma operação if so que da forma antiga

// if (pontuacaoUsuario >= 1000) {

//   console.log('usuario vip')

// } else {

//   console.log('usuario normal')

// }

// set padrão (tambem ja visto)

const corUsuario = '';

const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao)