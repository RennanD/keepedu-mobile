import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  margin-bottom: 24px;
  padding-bottom: 24px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.shape};
`;

export const ModulesIcon = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 8px;
  margin-right: 16px;
`;

export const ModulesCardTitle = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.bold};
  `}
`;

export const ModulesDescription = styled.Text`
  font-size: 14px;
  line-height: 22px;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.medium};
  `}
`;
