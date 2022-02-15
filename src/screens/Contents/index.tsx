import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatListProps, View } from 'react-native';
import TimeLine, { TimelineProps } from 'react-native-timeline-flatlist';

import { useTheme } from 'styled-components';

import { ScreenHeader } from '../../components/ScreenHeader';
import { api } from '../../services/api';
import { TimelineCard } from './components/TimelineCard';

import {
  Container,
  Content,
  ThumbnailContent,
  Thumbnail,
  DisciplineTitle,
} from './styles';

type RouteParams = {
  course_discipline_id: string;
  discipline_title: string;
};

const data = [
  {
    title: 'Teste de conteúdo',
    description: '16 módulos',
  },
  {
    title: 'Teste de conteúdo',
    description: '16 módulos',
  },
  {
    title: 'Teste de conteúdo',
    description: '16 módulos',
  },
];

type DisciplineProps = {
  thumbnail: string;
};

type ContentProps = {
  id: string;
  title: string;
  count_modules: number;
  count_classes: number;
  count_attachments: number;
  description: string;
};

type CourseDisciplineProps = {
  id: string;
  discipline: DisciplineProps;
  contents: ContentProps[];
};

type AxiosResponse = {
  course_discipline: CourseDisciplineProps;
};

export function Contents(): JSX.Element {
  const [courseDiscipline, setCourseDiscipline] =
    useState<CourseDisciplineProps>({} as CourseDisciplineProps);

  const { params } = useRoute();

  const theme = useTheme();

  const { discipline_title, course_discipline_id } = params as RouteParams;

  useEffect(() => {
    async function loadCourseDiscipline() {
      const response = await api.get<AxiosResponse>(
        `/disciplines/courses/${course_discipline_id}`,
      );

      const { course_discipline } = response.data;

      setCourseDiscipline({
        ...course_discipline,
        contents: course_discipline.contents.map(content => ({
          ...content,
          description: `Módulos: ${content.count_modules} / Aulas: ${content.count_classes} /  Anexos: ${content.count_attachments}`,
        })),
      });
    }
    loadCourseDiscipline();
  }, [course_discipline_id]);

  return (
    <Container>
      <ScreenHeader title="Detalhes da Disciplina" />

      <Content>
        <TimeLine
          data={data}
          circleSize={14}
          titleStyle={{
            fontSize: 18,
            fontFamily: theme.fonts.medium,
            color: theme.colors.text,
          }}
          rowContainerStyle={{ paddingRight: 4 }}
          showTime={false}
          columnFormat="single-column-left"
          circleColor={theme.colors.primary}
          lineColor={theme.colors.shape}
          renderDetail={(item: CourseDisciplineProps) => <TimelineCard />}
          options={{
            ListHeaderComponent: ({ discipline }: CourseDisciplineProps) => (
              <ThumbnailContent>
                <Thumbnail
                  borderRadius={8}
                  source={{ uri: discipline.thumbnail }}
                >
                  <DisciplineTitle>{discipline_title}</DisciplineTitle>
                </Thumbnail>
              </ThumbnailContent>
            ),
            contentContainerStyle: {
              paddingBottom: 24,
            },
            showsVerticalScrollIndicator: false,
          }}
        />
      </Content>
    </Container>
  );
}
