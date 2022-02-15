import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_color};
  padding: 20px;
  align-items: center;
  border-radius: 8px;
`;

export const IconContainer = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 8px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const Description = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.regular};
  `}
`;
