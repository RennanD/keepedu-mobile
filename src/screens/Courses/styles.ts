import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const Content = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.bold};
  `}
`;

export const CourseCard = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const CourseThumbnail = styled.Image`
  height: 200px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CourseCardBody = styled.View`
  padding: 20px;
`;

export const CourseTitle = styled.Text``;
