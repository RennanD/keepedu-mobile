import React from 'react';
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
} from '@expo-google-fonts/work-sans';

import { Routes } from './src/routes';

import { AppProvider } from './src/hooks';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
