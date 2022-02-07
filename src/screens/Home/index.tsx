import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Header, Avatar, Greetings, Info } from './styles';

export function Home(): JSX.Element {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />

        <Greetings>
          Olá, {user.name}!{'\n'}
          <Info>06, de Fev. de 2022</Info>
        </Greetings>
      </Header>
    </Container>
  );
}
