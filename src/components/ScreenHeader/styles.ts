import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
  width: 100%;
  padding-top: ${getStatusBarHeight() + 40}px;

  margin-bottom: 20px;

  justify-content: center;
  position: relative;
`;

export const GoBackButtonContainer = styled.View`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.bold};
  `}
`;
