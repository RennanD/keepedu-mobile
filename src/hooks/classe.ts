import { useEffect, useState } from 'react';
import { api } from '../services/api';

type AttachmentProps = {
  id: string;
  title: string;
};

type ClasseProps = {
  id: string;
  title: string;
};

type ModuleProps = {
  id: string;
  title: string;
  classes: ClasseProps[];
};

type ContentProps = {
  id: string;
  count_modules: number;
  count_classes: number;
  modules: {
    id: string;
  }[];
};

type CurrentClasseProps = {
  id: string;
  title: string;
  embed: string;
  attachments: AttachmentProps[];
  module: ModuleProps;
  video_url: string;
  thumbnail?: string;
};

type ContenteAxiosResponse = {
  content: ContentProps;
};

type ModuleAxiosResponse = {
  module: ModuleProps;
};

type ClasseAxiosResponse = {
  classe: CurrentClasseProps;
};

export function useClasse(content_id: string) {
  const [currentContent, setCurrentContent] = useState<ContentProps>(
    {} as ContentProps,
  );
  const [modules, setModules] = useState<ModuleProps[]>([]);
  const [currentClasse, setCurrentClasse] = useState<CurrentClasseProps>(
    {} as CurrentClasseProps,
  );
  const [isFetchingModules, setIsFecthingModules] = useState(true);
  const [isFetchingClasse, setIsFecthingClasse] = useState(true);

  useEffect(() => {
    api.get<ContenteAxiosResponse>(`/contents/${content_id}`).then(response => {
      const { content } = response.data;
      setCurrentContent(content);
    });
  }, [content_id]);

  useEffect(() => {
    async function loadModules() {
      const { modules: contentModules } = currentContent;

      if (contentModules) {
        await Promise.all(
          contentModules.map(async moduleItem => {
            const responseItem = await api.get<ModuleAxiosResponse>(
              `/modules/${moduleItem.id}`,
            );
            const { module } = responseItem.data;

            setModules(oldState => [...oldState, module]);
          }),
        );

        setIsFecthingModules(false);
      }
    }

    loadModules();
  }, [currentContent]);

  useEffect(() => {
    if (!isFetchingModules) {
      const currentClasseId = modules[0].classes[0].id;

      api
        .get<ClasseAxiosResponse>(`/classes/${currentClasseId}`)
        .then(response => {
          const { classe } = response.data;

          fetch(`https://player.vimeo.com/video/${classe.embed}/config`)
            .then(resp => resp.json())
            .then(resp => {
              const video_url =
                resp.request.files.hls.cdns[resp.request.files.hls.default_cdn]
                  .url;
              const thumbnail = resp.video.thumbs['640'];
              setCurrentClasse({
                ...classe,
                video_url,
                thumbnail,
              });
              setIsFecthingClasse(false);
            });
        });
    }
  }, [isFetchingModules, modules]);

  return {
    isFetchingClasse,
    modules,
    currentClasse,
    content: currentContent,
  };
}
