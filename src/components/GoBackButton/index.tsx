import React from 'react';

import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function GoBackButton(): JSX.Element {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <BorderlessButton onPress={goBack}>
      <Feather name="chevron-left" size={30} color={theme.colors.label} />
    </BorderlessButton>
  );
}
