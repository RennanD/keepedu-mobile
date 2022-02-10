import { Feather } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';

import { ScreenHeader } from '../../components/ScreenHeader';

import {
  Container,
  Content,
  CourseThumbnail,
  CourseInfo,
  CourseSchoolYear,
  CoursePeriod,
  SectionTitle,
  DisciplinesSection,
  DisciplineCard,
  DisciplineTitle,
  CourseIcon,
} from './styles';

const course = {
  title: 'Turbinão Enem',
  thumbnail:
    'https://gestor.replayedu.com.br/assets/uploads/3e91a1b1f9611f7dda00e804cd914e41ce50c496200e3c823946a14fb238db48.png',

  school_year: 2222,
  period: '21/02/2022 à 10/11/2022',

  disciplines: [
    {
      id: '1',
      title: 'Matemática',
      thumbnail:
        'https://api-cursos-develop.keepedu.com.br/uploads/thumbnails/capa-disciplina-keepedu.png',
    },
    {
      id: '2',
      title: 'Química',
      thumbnail:
        'https://gestor.replayedu.com.br/uploads/disciplinas/866695980571937ad219398f8cd11bb3.png',
    },
  ],
};

export function Disciplines(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <ScreenHeader title={course.title} />

      <Content
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
      >
        <CourseThumbnail source={{ uri: course.thumbnail }} />

        <CourseInfo>
          <CourseIcon>
            <Feather name="calendar" size={20} color={theme.colors.primary} />
          </CourseIcon>
          <CourseSchoolYear>
            Período Letivo 2022{'\n'}
            <CoursePeriod>21/02/2022 à 10/11/2022</CoursePeriod>
          </CourseSchoolYear>
        </CourseInfo>

        <SectionTitle>Disciplinas</SectionTitle>
        <DisciplinesSection>
          {course.disciplines.map(discipline => (
            <DisciplineCard
              borderRadius={8}
              resizeMode="cover"
              source={{ uri: discipline.thumbnail }}
              key={discipline.id}
            >
              <DisciplineTitle>{discipline.title}</DisciplineTitle>
            </DisciplineCard>
          ))}
        </DisciplinesSection>
      </Content>
    </Container>
  );
}
