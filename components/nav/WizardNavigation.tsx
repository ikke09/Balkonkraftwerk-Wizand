import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WizardParamList } from '../../types/types';
import ModuleScreen from '../../screens/Wizard/ModuleScreen';
import ResultScreen from '../../screens/Wizard/ResultScreen';
import UsageScreen from '../../screens/Wizard/UsageScreen';
import BalconyScreen from '../../screens/Wizard/BalconyScreen';
import LocationScreen from '../../screens/Wizard/LocationScreen';
import PrivacyScreen from '../../screens/Wizard/PrivacyScreen';
import WizardStartScreen from '../../screens/Wizard/WizardStartScreen';
import CustomBackButton from './CustomBackButton';

const Stack = createNativeStackNavigator<WizardParamList>();

export default function WizardNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="WizardStart"
      screenOptions={{
        headerBackTitle: 'Zurück',
      }}
    >
      <Stack.Screen
        name="WizardStart"
        component={WizardStartScreen}
        options={{
          title: 'Persönliche Kennzahlen ermitteln',
          headerLeft: () => <CustomBackButton label="Start" navigateTo="Start" />,
        }}
      />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Balcony" component={BalconyScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Module" component={ModuleScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="Usage" component={UsageScreen} />
    </Stack.Navigator>
  );
}
