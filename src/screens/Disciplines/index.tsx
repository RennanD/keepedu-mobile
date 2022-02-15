import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { ScreenHeader } from '../../components/ScreenHeader';
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatDate';

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
} from './styles';

type RouteParams = {
  course_period_id: string;
  course_title: string;
};

type CourseDiscipline = {
  id: string;
  discipline: {
    title: string;
    thumbnail: string;
  };
};

type CoursePeriodProps = {
  start_date: Date;
  end_date: Date;
  school_year: number;
  formattedPeriod: string;
  course: {
    description?: string;
    thumbnail?: string;
  };
  course_disciplines: CourseDiscipline[];
};

type AxiosResponse = {
  period_course: CoursePeriodProps;
};

export function Disciplines(): JSX.Element {
  const [coursePeriod, setCoursePeriod] = useState<CoursePeriodProps>(
    {} as CoursePeriodProps,
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute();

  const { course_period_id, course_title } = params as RouteParams;

  function handleShowCourseDiscipline(
    course_discipline_id: string,
    discipline_title: string,
  ) {
    navigation.navigate('Contents', { course_discipline_id, discipline_title });
  }

  useEffect(() => {
    async function loadCoursePeriod() {
      const response = await api.get<AxiosResponse>(
        `/courses/periods/${course_period_id}`,
      );

      const { period_course } = response.data;

      setCoursePeriod({
        ...period_course,
        formattedPeriod: `${formatDate(
          period_course.start_date,
          'dd/MM/yyyy',
        )} à ${formatDate(period_course.end_date, 'dd/MM/yyyy')}`,
      });
    }

    loadCoursePeriod();
  }, [course_period_id]);

  return (
    <Container>
      <ScreenHeader title={course_title} />

      {coursePeriod.school_year ? (
        <Content
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <CourseThumbnail
            source={{
              uri:
                coursePeriod.course.thumbnail ||
                'https://res.cloudinary.com/rennand/image/upload/v1644287125/hero-3_lc3x3v.png',
            }}
          />

          <CourseDescription>
            {coursePeriod.course.description}
          </CourseDescription>

          <CourseInfo>
            <CourseIcon>
              <Feather name="calendar" size={20} color={theme.colors.primary} />
            </CourseIcon>
            <CourseSchoolYear>
              Período Letivo {coursePeriod.school_year}
              {'\n'}
              <CoursePeriod>{coursePeriod.formattedPeriod}</CoursePeriod>
            </CourseSchoolYear>
          </CourseInfo>

          <SectionTitle>Disciplinas</SectionTitle>
          <DisciplinesSection>
            <DisciplineWrapper
              style={{
                width:
                  coursePeriod.course_disciplines.length === 1 ? '100%' : '48%',
              }}
            >
              {coursePeriod.course_disciplines.map(
                (courseDiscipline, index) =>
                  index % 2 === 0 && (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      key={courseDiscipline.id}
                      onPress={() =>
                        handleShowCourseDiscipline(
                          courseDiscipline.id,
                          courseDiscipline.discipline.title,
                        )
                      }
                    >
                      <DisciplineCard
                        borderRadius={8}
                        source={{ uri: courseDiscipline.discipline.thumbnail }}
                        resizeMode="cover"
                        style={{
                          height: index % 2 === 0 && 180,
                        }}
                      >
                        <DisciplineTitle>
                          {courseDiscipline.discipline.title}
                        </DisciplineTitle>
                        {/* <DisciplineContents>
                        {discipline.count_contents} Conteúdos
                      </DisciplineContents> */}
                      </DisciplineCard>
                    </TouchableOpacity>
                  ),
              )}
            </DisciplineWrapper>

            {coursePeriod.course_disciplines.length > 1 && (
              <DisciplineWrapper>
                {coursePeriod.course_disciplines.map(
                  (courseDiscipline, index) =>
                    index % 2 === 1 && (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        key={courseDiscipline.id}
                        onPress={() =>
                          handleShowCourseDiscipline(
                            courseDiscipline.id,
                            courseDiscipline.discipline.title,
                          )
                        }
                      >
                        <DisciplineCard
                          borderRadius={8}
                          source={{
                            uri: courseDiscipline.discipline.thumbnail,
                          }}
                          resizeMode="cover"
                          style={{
                            height: index % 2 === 1 && 200,
                          }}
                        >
                          <DisciplineTitle>
                            {courseDiscipline.discipline.title}
                          </DisciplineTitle>
                          {/* <DisciplineContents>
                        {discipline.count_contents} Conteúdos
                      </DisciplineContents> */}
                        </DisciplineCard>
                      </TouchableOpacity>
                    ),
                )}
              </DisciplineWrapper>
            )}
          </DisciplinesSection>
        </Content>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </Container>
  );
}
