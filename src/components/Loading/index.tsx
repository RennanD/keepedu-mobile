import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export function Loading(): JSX.Element {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
}
