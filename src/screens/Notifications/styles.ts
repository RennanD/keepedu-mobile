import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const NotificationCard = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.background_color};
  border-radius: 8px;

  border-bottom-width: 0.8px;
  border-color: ${({ theme }) => theme.colors.shape};
`;

export const NotificationHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

export const NotificationTitle = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const NotificationDate = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.medium};
  `}
`;

export const NotificationText = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;
