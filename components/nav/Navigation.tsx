/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationParamList } from '../../types/types';
import StartScreen from '../../screens/StartScreen';
import PrivacyScreen from '../../screens/PrivacyScreen';
import BalconyImageScreen from '../../screens/BalconyImageScreen';
import LocationScreen from '../../screens/LocationScreen';
import { useTheme } from 'native-base';

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
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen}></Stack.Screen>
        <Stack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{ title: 'Datenverarbeitung' }}
        ></Stack.Screen>
        <Stack.Screen
          name="BalconyImage"
          component={BalconyImageScreen}
          options={{ title: 'Foto' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ title: 'Standort' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
