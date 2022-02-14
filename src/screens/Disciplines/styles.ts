import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const Content = styled.ScrollView``;

export const CourseThumbnail = styled.Image`
  width: 100%;
  height: 220px;
  border-radius: 16px;

  margin-bottom: 32px;
`;

export const CourseDescription = styled.Text`
  font-size: 14px;

  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;

export const CourseInfo = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 24px;
  padding-bottom: 24px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.shape};
`;

export const CourseIcon = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 8px;
  margin-right: 16px;
`;

export const CourseSchoolYear = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.bold};
  `}
`;

export const CoursePeriod = styled.Text`
  font-size: 14px;
  line-height: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.medium};
  `}
`;

export const SectionTitle = styled.Text`
  font-size: 24px;

  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.bold};
  `}
`;

export const DisciplinesSection = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DisciplineWrapper = styled.View`
  width: 48%;
`;

export const DisciplineCard = styled.ImageBackground`
  width: 100%;
  height: 180px;

  padding: 20px;

  margin-bottom: 16px;
`;

export const DisciplineTitle = styled.Text`
  font-size: 20px;

  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.background_color};
    font-family: ${theme.fonts.bold};
  `}
`;

export const DisciplineContents = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.background_color};
    font-family: ${theme.fonts.medium};
  `}
`;
