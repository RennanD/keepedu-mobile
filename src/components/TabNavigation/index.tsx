import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { Courses } from '../../screens/Courses';

// import { Container } from './styles';

const { Screen, Navigator } = createMaterialTopTabNavigator();

export function TabNavigation(): JSX.Element {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
        tabBarStyle: {
          width: 350,
          alignSelf: 'flex-start',
          backgroundColor: theme.colors.background_color,
        },
        tabBarContentContainerStyle: {
          alignItems: 'flex-start',
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 14,
        },
      }}
    >
      <Screen
        options={{
          tabBarLabel: 'Cursos',
        }}
        name="Courses"
        component={Courses}
      />
      <Screen
        options={{
          tabBarLabel: 'Avaliações',
        }}
        name="Evaluations"
        component={View}
      />
      <Screen
        options={{
          tabBarLabel: 'Simulados',
        }}
        name="Simulateds"
        component={View}
      />
    </Navigator>
  );
}
