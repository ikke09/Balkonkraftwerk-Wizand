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
import BalconyScreen from '../../screens/BalconyScreen';
import LocationScreen from '../../screens/LocationScreen';
import { useTheme } from 'native-base';
import BalconyPreviewScreen from '../../screens/BalconyPreviewScreen';
import BalconyOutlineScreen from '../../screens/BalconyOutlineScreen';
import UsageScreen from '../../screens/UsageScreen';
import ResultScreen from '../../screens/ResultScreen';
import CameraScreen from '../../screens/CameraScreen';

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
          name="Balcony"
          component={BalconyScreen}
          options={{ title: 'Foto' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: 'Kamera' }}
        ></Stack.Screen>
        <Stack.Screen
          name="BalconyPreview"
          component={BalconyPreviewScreen}
          options={{ title: 'Preview' }}
        ></Stack.Screen>
        <Stack.Screen
          name="BalconyOutline"
          component={BalconyOutlineScreen}
          options={{ title: 'Umriss' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Usage"
          component={UsageScreen}
          options={{ title: 'Verbrauch' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ title: 'Standort' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: 'Ergebniss' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
