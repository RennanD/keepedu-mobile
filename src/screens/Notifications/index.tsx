import React from 'react';
import { FlatList } from 'react-native';
import { ScreenHeader } from '../../components/ScreenHeader';

import {
  Container,
  NotificationCard,
  NotificationHeader,
  NotificationTitle,
  NotificationDate,
  NotificationText,
} from './styles';

const notifications = [
  {
    id: '1',
    title: 'Aula Inaugural',
    date: '3min',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde vitae fugit, voluptates provident voluptate cum iure laboriosam nobis. Illum enim asperiores incidunt vel ducimus reiciendis suscipit unde quasi non sunt?',
  },
  {
    id: '2',
    title: 'Aula Text',
    date: '4d',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde vitae fugit, voluptates provident voluptate cum iure laboriosam nobis. Illum enim asperiores incidunt vel ducimus reiciendis suscipit unde quasi non sunt?',
  },
];

export function Notifications(): JSX.Element {
  return (
    <Container>
      <ScreenHeader title="Notificações" />

      <FlatList
        data={notifications}
        keyExtractor={notification => notification.id}
        renderItem={({ item }) => (
          <NotificationCard>
            <NotificationHeader>
              <NotificationTitle>{item.title}</NotificationTitle>
              <NotificationDate>{item.date}</NotificationDate>
            </NotificationHeader>
            <NotificationText numberOfLines={2}>{item.text}</NotificationText>
          </NotificationCard>
        )}
      />
    </Container>
  );
}
