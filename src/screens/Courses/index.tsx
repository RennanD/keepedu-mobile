import { Feather } from '@expo/vector-icons';
import React from 'react';

import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
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
    id: '1',
    thumbnail:
      'https://pensarstore.com.br/gestor/uploads/2d7425c268f9de943cf5128906e6f740.jpg',
    title: '3ª Série - Médio',
    workload: '75 Horas',
  },

  {
    id: '2',
    thumbnail:
      'https://pensarstore.com.br/gestor/uploads/494ba1828408309f3933cba96a10651c.jpg',
    title: 'Supermed Advanced',
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
            <CourseCard activeOpacity={0.7} style={shadow}>
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
