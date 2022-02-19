import React from 'react';
import { FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  TimelineItem,
  TimelineIndicator,
  TimelineCardContainer,
  TimelineCard,
  TimelineCardDescription,
  TimelineCardIconContainer,
  TimelineCardTitle,
} from './styles';
import shadow from '../../styles/shadow';
import { EmptyList } from '../EmptyList';

type DataListProps = {
  id: string;
  icon?: React.ComponentProps<typeof Feather>['name'];
  title: string;
  description: string;
};

export type TimelineProps = {
  data: DataListProps[];
};

export function Timeline({ data }: TimelineProps): JSX.Element {
  const lastIndex = data.length - 1;

  const theme = useTheme();

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
      ListEmptyComponent={<EmptyList message="Nenhum conteúdo disponível" />}
      renderItem={({ item, index }) => (
        <TimelineItem>
          <TimelineIndicator />
          <TimelineCardContainer isLastItem={index === lastIndex}>
            <TimelineCard style={shadow}>
              <TimelineCardIconContainer>
                <Feather
                  name={item.icon || 'book'}
                  size={24}
                  color={theme.colors.primary}
                />
              </TimelineCardIconContainer>
              <TimelineCardTitle>
                {item.title}
                {'\n'}
                <TimelineCardDescription>
                  {item.description}
                </TimelineCardDescription>
              </TimelineCardTitle>
            </TimelineCard>
          </TimelineCardContainer>
        </TimelineItem>
      )}
    />
  );
}
