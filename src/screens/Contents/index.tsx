import React, { useEffect, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { ScreenHeader } from '../../components/ScreenHeader';
import { api } from '../../services/api';

import {
  Container,
  Content,
  ThumbnailContent,
  Thumbnail,
  DisciplineTitle,
} from './styles';
import { Timeline } from '../../components/Timeline';
import { Loading } from '../../components/Loading';

type RouteParams = {
  course_discipline_id: string;
  discipline_title: string;
};

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
  const [loading, setLoading] = useState(true);
  const [courseDiscipline, setCourseDiscipline] =
    useState<CourseDisciplineProps>({} as CourseDisciplineProps);

  const { params } = useRoute();
  const navigation = useNavigation();

  const { discipline_title, course_discipline_id } = params as RouteParams;

  function handleShowContent(content_id: string) {
    navigation.navigate('Classes', { content_id });
  }

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

      setLoading(false);
    }
    loadCourseDiscipline();
  }, [course_discipline_id]);

  return (
    <Container>
      <ScreenHeader title="Detalhes da Disciplina" />

      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ThumbnailContent>
            <Thumbnail
              borderRadius={8}
              source={{ uri: courseDiscipline?.discipline.thumbnail }}
            >
              <DisciplineTitle>{discipline_title}</DisciplineTitle>
            </Thumbnail>
          </ThumbnailContent>
          <Timeline
            onSelectItem={handleShowContent}
            data={courseDiscipline.contents}
          />
        </Content>
      )}
    </Container>
  );
}
