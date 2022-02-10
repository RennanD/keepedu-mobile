import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';

import { Notifications } from '../screens/Notifications';
import { Profile } from '../screens/Profile';
import { StackRoutes } from './stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Notifications: undefined;
      Profile: undefined;
    }
  }
}

export function AppRoutes(): JSX.Element {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.placeholder,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: getBottomSpace() + 60,
        },
      }}
    >
      <Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
