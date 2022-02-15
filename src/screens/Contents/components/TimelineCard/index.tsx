import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { Container, IconContainer, Title, Description } from './styles';
import shadow from '../../../../styles/shadow';

export function TimelineCard(): JSX.Element {
  const theme = useTheme();

  return (
    <Container style={shadow}>
      <IconContainer>
        <Feather name="book" size={22} color={theme.colors.primary} />
      </IconContainer>

      <Title>
        Meu título aqui{'\n'}
        <Description>Minha descrição aqui</Description>
      </Title>
    </Container>
  );
}
