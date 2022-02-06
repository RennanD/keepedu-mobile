import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, TextButton } from './styles';

interface ButtonProps extends RectButtonProps {
  icon: React.ComponentProps<typeof Feather>['name'];
  children: string;
}

export function Button({ children, icon, ...rest }: ButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Feather name={icon} size={22} color={theme.colors.background_color} />
      <TextButton>{children}</TextButton>
    </Container>
  );
}
