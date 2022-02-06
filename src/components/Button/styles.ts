import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  height: 50px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  margin-left: 10px;

  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.colors.background_color};
    font-family: ${theme.fonts.medium};
  `}
`;
