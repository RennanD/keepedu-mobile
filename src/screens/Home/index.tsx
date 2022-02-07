import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { useAuth } from '../../hooks/auth';

import { Container, Header, Avatar, Greetings, Info, Content } from './styles';

const links = [
  {
    key: 'courses',
    title: 'Cursos',
  },
  {
    key: 'evaluations',
    title: 'Avaliações',
  },
  {
    key: 'simulations',
    title: 'Simulados',
  },
];

export function Home(): JSX.Element {
  const [activeLink, setActiveLink] = useState('courses');

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

      <Content>
        <Navbar
          links={links}
          activeLink={activeLink}
          onChangeLink={setActiveLink}
        />
      </Content>
    </Container>
  );
}
