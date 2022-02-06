import styled, { css } from 'styled-components/native';

interface InputContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 16px;

  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-width: 1px;

  border-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary : theme.colors.shape};

  height: 50px;
  align-items: center;

  padding: 0 16px;
`;

export const RNTextInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
