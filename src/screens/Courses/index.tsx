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
} from './styles';

const courses = [
  {
    id: '1',
    thumbnail:
      'https://res.cloudinary.com/rennand/image/upload/v1644287143/hero-2_b0jmst.png',
    title: '3ª Série - Médio',
    workload: '',
  },

  {
    id: '2',
    thumbnail:
      'https://res.cloudinary.com/rennand/image/upload/v1644287143/hero-2_b0jmst.png',
    title: 'Supermed Advanced',
    workload: '',
  },
];

const odlCourses = [
  {
    id: '2',
    title: '2ª Série - Médio',
    period: '',
  },
  {
    id: '3',
    title: '1ª Série - Médio',
    period: '',
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
                <CourseTitle>{course.title}</CourseTitle>
              </CourseCardBody>
            </CourseCard>
          )}
        />
      </CurrentCoursesContent>

      <OldCoursesContent>
        <Title>Cursos Anteriores</Title>

        {odlCourses.map(course => (
          <OldCourseItem style={shadow} key={course.id}>
            <OldCoursesIcon>
              <Feather name="bookmark" size={24} color={theme.colors.primary} />
            </OldCoursesIcon>
            <OldCourseTitle>
              7º Ano Fundamental {'\n'}
              <OldCoursePeriod>21/01/2021 à 15/12/2021</OldCoursePeriod>{' '}
            </OldCourseTitle>
          </OldCourseItem>
        ))}
      </OldCoursesContent>
    </Container>
  );
}
