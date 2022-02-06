import React from 'react';

import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import { AppRoutes } from './app.routes';

export function Routes(): JSX.Element {
  const { user, loadingUser } = useAuth();

  if (loadingUser) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {!user.email ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
