import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const Logo = styled.Image`
  align-self: center;
  margin-bottom: 30px;
`;

export const FormContainer = styled.View``;

export const ButtonContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const SingInInfo = styled.Text`
  text-align: center;
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Terms = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;
