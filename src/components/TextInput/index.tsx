import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { TextInputProps as RNTextInputProps } from 'react-native';

import { useTheme } from 'styled-components';
import { Container, Label, InputContainer, RNTextInput } from './styles';

export interface TextInputProps extends RNTextInputProps {
  icon: React.ComponentProps<typeof Feather>['name'];
  label: string;
}

export function TextInput({
  icon,
  label,
  value,
  ...rest
}: TextInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
    setIsFilled(true);
  }

  function handleInputBlur() {
    setIsFocused(false);

    setIsFilled(!!value);
  }

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer isFocused={isFocused}>
        <Feather
          name={icon}
          size={24}
          color={isFilled ? theme.colors.primary : theme.colors.placeholder}
        />
        <RNTextInput
          onFocus={() => handleInputFocus()}
          onBlur={() => handleInputBlur()}
          {...rest}
          value={value}
          placeholderTextColor={theme.colors.placeholder}
        />
      </InputContainer>
    </Container>
  );
}
