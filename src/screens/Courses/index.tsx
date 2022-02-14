import React, { useEffect, useState } from 'react';
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
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { EmptyList } from '../../components/EmptyList';

type CoursePeriod = {
  id: string;
  start_date: Date;
  end_date: Date;
  expired: boolean;
  workload?: string;
  formmatedPeriod?: string;
  course: {
    id: string;
    title: string;
    thumbnail?: string;
  };
};

type AxiosResponse = {
  course_periods: CoursePeriod[];
};

export function Courses(): JSX.Element {
  const [currentCourses, setCurrentCourses] = useState<CoursePeriod[]>([]);
  const [expiredCourses, setExpiredCourses] = useState<CoursePeriod[]>([]);

  const theme = useTheme();

  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Disciplines');
  }

  useEffect(() => {
    async function loadCoursePeriods() {
      const response = await api.get<AxiosResponse>('/students/profile');

      const { course_periods } = response.data;

      setCurrentCourses(
        course_periods.filter(coursePeriod => !coursePeriod.expired),
      );

      setExpiredCourses(
        course_periods
          .filter(coursePeriod => coursePeriod.expired)
          .map(coursePeriod => ({
            ...coursePeriod,
            formmatedPeriod: `${formatDate(
              coursePeriod.start_date,
              'dd/MM/yyyy',
            )} à ${formatDate(coursePeriod.end_date, 'dd/MM/yyyy')}`,
          })),
      );
    }
    loadCoursePeriods();
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <CurrentCoursesContent>
        <Title style={{ marginLeft: 4 }}>Cursos atuais</Title>

        {currentCourses.length ? (
          <FlatList
            data={currentCourses}
            keyExtractor={coursePeriod => coursePeriod.id}
            horizontal
            bounces={false}
            contentContainerStyle={{
              paddingLeft: 4,
              paddingVertical: 10,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: coursePeriod }) => (
              <CourseCard
                onPress={handleNavigate}
                activeOpacity={0.7}
                style={[
                  shadow,
                  { minWidth: currentCourses.length === 1 && 365 },
                ]}
              >
                <CourseThumbnail
                  resizeMode="cover"
                  source={{
                    uri:
                      coursePeriod.course.thumbnail ||
                      'https://res.cloudinary.com/rennand/image/upload/v1644287125/hero-3_lc3x3v.png',
                  }}
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
                    {coursePeriod.course.title}
                    {'\n'}
                    <CourseWorkload>{coursePeriod.workload}</CourseWorkload>
                  </CourseTitle>
                </CourseCardBody>
              </CourseCard>
            )}
          />
        ) : (
          <EmptyList message="Você não está em nenhum curso no período atual" />
        )}
      </CurrentCoursesContent>

      <OldCoursesContent>
        <Title>Cursos Anteriores</Title>

        {expiredCourses.length ? (
          <>
            {expiredCourses.map(coursePeriod => (
              <OldCourseItem key={coursePeriod.id} style={shadow}>
                <OldCoursesIcon>
                  <Feather
                    name="bookmark"
                    size={24}
                    color={theme.colors.primary}
                  />
                </OldCoursesIcon>
                <OldCourseTitle>
                  {coursePeriod.course.title} {'\n'}
                  <OldCoursePeriod>
                    {coursePeriod.formmatedPeriod}
                  </OldCoursePeriod>{' '}
                </OldCourseTitle>
              </OldCourseItem>
            ))}
          </>
        ) : (
          <EmptyList message="Você não possúi cursos anteiores" />
        )}
      </OldCoursesContent>
    </Container>
  );
}
