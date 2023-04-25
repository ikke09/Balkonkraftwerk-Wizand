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
import InvestmentScreen from '../../screens/Wizard/InvestmentScreen';
import { IconButton } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<WizardParamList>();

export default function WizardNavigation() {
  return (
    <Stack.Navigator initialRouteName="WizardStart">
      <Stack.Screen
        name="WizardStart"
        component={WizardStartScreen}
        options={{
          title: 'Start',
          headerLeft: () => <CustomBackButton label="Start" navigateTo="Start" />,
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          title: 'Datenverarbeitung',
        }}
      />
      <Stack.Screen
        name="Balcony"
        component={BalconyScreen}
        options={{
          title: 'Balkon',
        }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: 'Standort',
        }}
      />
      <Stack.Screen
        name="Module"
        component={ModuleScreen}
        options={{
          title: 'Solarmodule',
        }}
      />
      <Stack.Screen
        name="Investment"
        component={InvestmentScreen}
        options={{
          title: 'Kosten',
        }}
      />
      <Stack.Screen
        name="Usage"
        component={UsageScreen}
        options={{
          title: 'Verbrauch',
        }}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{
          title: 'Ergebniss',
          headerRight: () => (
            <IconButton icon={<MaterialCommunityIcons name="restart" size={24} color="white" />} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
