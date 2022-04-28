import React, { useRef } from 'react';

import { useRoute } from '@react-navigation/native';

import { Video } from 'expo-av';

import { Container, Content, ClasseTitle, ClasseDescription } from './styles';

import { useClasse } from '../../hooks/classe';
import { Loading } from '../../components/Loading';
import { ClasseActionButton } from '../../components/ClasseActionButton';

type RouteParams = {
  content_id: string;
};

export function Classes(): JSX.Element {
  const video = useRef();

  const { params } = useRoute();

  const { content_id } = params as RouteParams;

  const { content, currentClasse, isFetchingClasse } = useClasse(content_id);

  return (
    <Container>
      {isFetchingClasse ? (
        <Loading />
      ) : (
        <>
          <Video
            ref={video}
            style={{ height: 300, width: '100%' }}
            source={{
              uri: currentClasse.video_url,
            }}
            posterSource={{ uri: currentClasse.thumbnail }}
            useNativeControls
            resizeMode="contain"
          />
          <Content>
            <ClasseTitle>
              {currentClasse.title}
              {'\n'}
              <ClasseDescription>
                {currentClasse.module.title}
              </ClasseDescription>
            </ClasseTitle>

            <ClasseActionButton
              icon="link"
              title="Visualizar Módulos"
              description={`${content.count_modules} módulo(s) e ${content.count_classes} aula(s)`}
            />

            <ClasseActionButton
              icon="download-cloud"
              title="Visualizar Anexos da Aula"
              description={`${currentClasse.attachments.length} anexo(s) para esta aula`}
            />
          </Content>
        </>
      )}
    </Container>
  );
}
