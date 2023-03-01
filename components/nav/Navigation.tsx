/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationParamList } from '../../types/types';
import StartScreen from '../../screens/StartScreen';
import PrivacyScreen from '../../screens/PrivacyScreen';

export default function Navigation() {
  const Stack = createNativeStackNavigator<NavigationParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen}></Stack.Screen>
        <Stack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{ title: 'Datenverarbeitung' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
