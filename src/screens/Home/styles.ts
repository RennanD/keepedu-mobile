import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
  width: 100%;
  padding-top: ${getStatusBarHeight() + 40}px;

  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;

  margin-bottom: 10px;
`;

export const Greetings = styled.Text`
  font-size: 22px;
  margin-bottom: 4px;

  margin-left: 10px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.bold};
  `}
`;

export const Info = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;
