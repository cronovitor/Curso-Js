import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Titulo, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Titulo>
        Login
        <small>Oie</small>
      </Titulo>
      <Paragrafo>Id duis nostrud ullamco sint.</Paragrafo>
      <a href="none">Oieeee</a>
      <button type="button">Enviar</button>
    </Container>
  );
}
