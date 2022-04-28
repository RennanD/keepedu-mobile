import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ClasseTitle = styled.Text`
  font-size: 24px;

  margin-bottom: 32px;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.medium};
  `}
`;

export const ClasseDescription = styled.Text`
  font-size: 16px;
  line-height: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;
