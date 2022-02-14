import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { ScreenHeader } from '../../components/ScreenHeader';

import {
  Container,
  Content,
  CourseThumbnail,
  CourseDescription,
  CourseInfo,
  CourseSchoolYear,
  CoursePeriod,
  SectionTitle,
  DisciplinesSection,
  DisciplineWrapper,
  DisciplineCard,
  DisciplineTitle,
  CourseIcon,
  DisciplineContents,
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
      count_contents: '8',
      thumbnail:
        'https://res.cloudinary.com/rennand/image/upload/v1644544663/matem%C3%A1tica_whjym7.png',
    },
    {
      id: '2',
      title: 'Química',
      count_contents: '5',
      thumbnail:
        'https://res.cloudinary.com/rennand/image/upload/v1644544663/qu%C3%ADmica_b9vnms.png',
    },
    {
      id: '3',
      title: 'Biologia',
      count_contents: '10',
      thumbnail:
        'https://res.cloudinary.com/rennand/image/upload/v1644544662/biologia_zxviie.png',
    },
    {
      id: '4',
      title: 'Inglês',
      count_contents: '4',
      thumbnail:
        'https://res.cloudinary.com/rennand/image/upload/v1644544662/Ingl%C3%AAs_pvvznz.png',
    },
    {
      id: '5',
      title: 'Geografia',
      count_contents: '7',
      thumbnail:
        'https://res.cloudinary.com/rennand/image/upload/v1644544662/geografia_zoby1i.png',
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
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <CourseThumbnail source={{ uri: course.thumbnail }} />

        <CourseDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          officia voluptas totam at sunt. Impedit tempora consequuntur aperiam
          error expedita dicta, cum ipsa alias minus nostrum quibusdam autem
          explicabo nihil.
        </CourseDescription>

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
          <DisciplineWrapper>
            {course.disciplines.map(
              (discipline, index) =>
                index % 2 === 0 && (
                  <TouchableOpacity activeOpacity={0.7} key={discipline.id}>
                    <DisciplineCard
                      borderRadius={8}
                      source={{ uri: discipline.thumbnail }}
                      resizeMode="cover"
                      style={{
                        height: index % 2 === 0 && 180,
                      }}
                    >
                      <DisciplineTitle>{discipline.title}</DisciplineTitle>
                      <DisciplineContents>
                        {discipline.count_contents} Conteúdos
                      </DisciplineContents>
                    </DisciplineCard>
                  </TouchableOpacity>
                ),
            )}
          </DisciplineWrapper>

          <DisciplineWrapper>
            {course.disciplines.map(
              (discipline, index) =>
                index % 2 === 1 && (
                  <TouchableOpacity activeOpacity={0.7} key={discipline.id}>
                    <DisciplineCard
                      borderRadius={8}
                      source={{ uri: discipline.thumbnail }}
                      resizeMode="cover"
                      style={{
                        height: index % 2 === 1 && 200,
                      }}
                    >
                      <DisciplineTitle>{discipline.title}</DisciplineTitle>
                      <DisciplineContents>
                        {discipline.count_contents} Conteúdos
                      </DisciplineContents>
                    </DisciplineCard>
                  </TouchableOpacity>
                ),
            )}
          </DisciplineWrapper>
        </DisciplinesSection>
      </Content>
    </Container>
  );
}
