import React from 'react';

import { FlatList } from 'react-native';
import shadow from '../../styles/shadow';
import {
  Container,
  Content,
  Title,
  CourseCard,
  CourseThumbnail,
  CourseCardBody,
  CourseTitle,
} from './styles';

const courses = [
  {
    id: '1',
    thumbnail:
      'https://res.cloudinary.com/rennand/image/upload/v1644287131/hero-1_lfimib.png',
    title: '8º Ano Fundamental',
    workload: '',
  },
];

const odlCourses = [
  {
    id: '2',
    thumbnail:
      'https://res.cloudinary.com/rennand/image/upload/v1644287125/hero-3_lc3x3v.png',
    title: '1ª Série - Médio',
    workload: '',
  },
  {
    id: '3',
    thumbnail:
      'https://res.cloudinary.com/rennand/image/upload/v1644287143/hero-2_b0jmst.png',
    title: 'Supermed ENEM',
    workload: '',
  },
];

export function Courses(): JSX.Element {
  return (
    <Container
      contentContainerStyle={{ padding: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <Content>
        <Title>Cursos de 2022</Title>

        {courses.map(course => (
          <CourseCard style={shadow}>
            <CourseThumbnail
              resizeMode="cover"
              source={{ uri: course.thumbnail }}
            />
            <CourseCardBody>
              <CourseTitle>{course.title}</CourseTitle>
            </CourseCardBody>
          </CourseCard>
        ))}
      </Content>

      <Content>
        <Title>Cursos de Anos Anteriores</Title>

        {odlCourses.map(course => (
          <CourseCard style={shadow}>
            <CourseThumbnail
              resizeMode="cover"
              source={{ uri: course.thumbnail }}
            />
            <CourseCardBody>
              <CourseTitle>{course.title}</CourseTitle>
            </CourseCardBody>
          </CourseCard>
        ))}
      </Content>
    </Container>
  );
}
