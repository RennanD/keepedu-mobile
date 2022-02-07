import React from 'react';

import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

// import { Container } from './styles';

export function GoBackButton(): JSX.Element {
  const theme = useTheme();

  return (
    <BorderlessButton>
      <Feather name="chevron-left" size={28} color={theme.colors.label} />
    </BorderlessButton>
  );
}
