import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const CurrentCoursesContent = styled.View`
  padding: 24px 20px;
  padding-right: 0;
  padding-bottom: 4px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.bold};
  `}
`;

export const CourseCard = styled.TouchableOpacity`
  width: 340px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const CourseThumbnail = styled.Image`
  height: 170px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CourseCardBody = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const CourseIcon = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 8px;
  margin-right: 10px;
`;

export const CourseTitle = styled.Text`
  flex: 1;
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const CourseWorkload = styled.Text`
  font-size: 14px;

  line-height: 22px;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.regular};
  `}
`;

export const OldCoursesContent = styled.View`
  padding: 24px;
`;

export const OldCoursesIcon = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 8px;
  margin-right: 16px;
`;

export const OldCourseItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_color};
  padding: 20px;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const OldCourseTitle = styled.Text`
  font-size: 18px;
  line-height: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const OldCoursePeriod = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.regular};
  `}
`;
