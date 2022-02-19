import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const ThumbnailContent = styled.View`
  padding-right: 2px;
  padding-left: 10px;
  padding-bottom: 0;
`;

export const Thumbnail = styled.ImageBackground`
  width: 100%;
  height: 180px;

  padding: 20px;

  margin-bottom: 16px;
`;

export const DisciplineTitle = styled.Text`
  font-size: 28px;

  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.background_color};
    font-family: ${theme.fonts.bold};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-right: 20px;
  padding-left: 10px;
  padding-bottom: 0;
`;
