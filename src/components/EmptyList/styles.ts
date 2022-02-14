import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const EmptyMessage = styled.Text`
  font-size: 24px;

  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.regular};
  `}
`;
