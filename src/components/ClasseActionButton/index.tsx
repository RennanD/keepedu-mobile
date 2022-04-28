import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Container,
  ModulesCardTitle,
  ModulesDescription,
  ModulesIcon,
} from './styles';

type ClasseActionButtonProps = {
  title: string;
  description: string;
  icon: React.ComponentProps<typeof Feather>['name'];
};

export function ClasseActionButton({
  title,
  description,
  icon,
}: ClasseActionButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <ModulesIcon>
        <Feather name={icon} size={20} color={theme.colors.primary} />
      </ModulesIcon>
      <ModulesCardTitle>
        {title}
        {'\n'}
        <ModulesDescription>{description}</ModulesDescription>
      </ModulesCardTitle>
    </Container>
  );
}
