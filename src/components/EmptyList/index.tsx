import { Feather } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';

import { Container, EmptyMessage } from './styles';

type EmptyListProps = {
  message: string;
};

export function EmptyList({ message }: EmptyListProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Feather name="info" color={theme.colors.shape} size={40} />
      <EmptyMessage>{message}</EmptyMessage>
    </Container>
  );
}
