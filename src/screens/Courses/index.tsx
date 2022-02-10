import React from 'react';
import { FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import shadow from '../../styles/shadow';
import {
  Container,
  CurrentCoursesContent,
  Title,
  CourseCard,
  CourseThumbnail,
  CourseCardBody,
  CourseTitle,
  OldCoursesContent,
  OldCourseItem,
  OldCourseTitle,
  OldCoursePeriod,
  OldCoursesIcon,
  CourseWorkload,
  CourseIcon,
} from './styles';

const courses = [
  {
    id: '2',
    thumbnail:
      'https://gestor.replayedu.com.br/assets/uploads/3e91a1b1f9611f7dda00e804cd914e41ce50c496200e3c823946a14fb238db48.png',
    title: 'Turbinão Enem',
    workload: '75 Horas',
  },
  {
    id: '1',
    thumbnail:
      'https://gestor.replayedu.com.br/assets/uploads/6eea88132cb0dec7535ea0cb94b600f0f81013fc10006b9f768c9aba055286e5.png',
    title: 'Med ENEM',
    workload: '75 Horas',
  },
];

const odlCourses = [
  {
    id: '2',
    title: '2ª Série - Médio',
    period: '21/01/2021 à 15/12/2021',
  },
  {
    id: '3',
    title: '1ª Série - Médio',
    period: '21/01/2020 à 15/12/2020',
  },
];

export function Courses(): JSX.Element {
  const theme = useTheme();

  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Disciplines');
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <CurrentCoursesContent>
        <Title style={{ marginLeft: 4 }}>Cursos de 2022</Title>

        <FlatList
          data={courses}
          keyExtractor={course => course.id}
          horizontal
          contentContainerStyle={{
            paddingLeft: 4,
            paddingVertical: 10,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: course }) => (
            <CourseCard
              onPress={handleNavigate}
              activeOpacity={0.7}
              style={shadow}
            >
              <CourseThumbnail
                resizeMode="cover"
                source={{ uri: course.thumbnail }}
              />
              <CourseCardBody>
                <CourseIcon>
                  <Feather
                    name="play-circle"
                    size={24}
                    color={theme.colors.primary}
                  />
                </CourseIcon>
                <CourseTitle>
                  {course.title}
                  {'\n'}
                  <CourseWorkload>{course.workload}</CourseWorkload>
                </CourseTitle>
              </CourseCardBody>
            </CourseCard>
          )}
        />
      </CurrentCoursesContent>

      <OldCoursesContent>
        <Title>Cursos Anteriores</Title>

        {odlCourses.map(course => (
          <OldCourseItem key={course.id} style={shadow}>
            <OldCoursesIcon>
              <Feather name="bookmark" size={24} color={theme.colors.primary} />
            </OldCoursesIcon>
            <OldCourseTitle>
              {course.title} {'\n'}
              <OldCoursePeriod>{course.period}</OldCoursePeriod>{' '}
            </OldCourseTitle>
          </OldCourseItem>
        ))}
      </OldCoursesContent>
    </Container>
  );
}
