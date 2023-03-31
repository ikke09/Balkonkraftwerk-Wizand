/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { useTheme } from 'native-base';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WizardNavigation from './WizardNavigation';
import { NavigationParamList } from '../../types/types';
import StartScreen from '../../screens/StartScreen';
import InformationScreen from '../../screens/InformationScreen';
import ProviderScreen from '../../screens/ProviderScreen';
import ChecklistScreen from '../../screens/ChecklistScreen';
import ARScreen from '../../screens/ARScreen';

export default function Navigation() {
  const Stack = createNativeStackNavigator<NavigationParamList>();
  const { colors } = useTheme();
  const navTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.white,
      background: colors.primary[400],
      card: colors.primary[600],
      text: colors.secondary[400],
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerBackTitle: 'Zurück',
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ title: 'Balkonkraftwerk-Wizard' }}
        ></Stack.Screen>
        <Stack.Screen name="Information" component={InformationScreen}></Stack.Screen>
        <Stack.Screen name="Provider" component={ProviderScreen}></Stack.Screen>
        <Stack.Screen name="Checklist" component={ChecklistScreen}></Stack.Screen>
        <Stack.Screen name="AR" component={ARScreen}></Stack.Screen>
        <Stack.Screen
          name="Wizard"
          component={WizardNavigation}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
