import React from 'react';

import { GoBackButton } from '../GoBackButton';

import { Container, HeaderTitle, GoBackButtonContainer } from './styles';

type ScreenHeaderProps = {
  title: string;
};

export function ScreenHeader({ title }: ScreenHeaderProps): JSX.Element {
  return (
    <Container>
      <GoBackButtonContainer>
        <GoBackButton />
      </GoBackButtonContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
}
