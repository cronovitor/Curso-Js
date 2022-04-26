import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Titulo, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Titulo>
        Login
        <small>Oie</small>
      </Titulo>
      <Paragrafo>Id duis nostrud ullamco sint.</Paragrafo>
      <a href="none">Oieeee</a>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
