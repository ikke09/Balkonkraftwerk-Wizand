import { Box, Button, Heading, Text, VStack } from 'native-base';
import React from 'react';
import { NavigationStackScreenProps } from '../types/types';
import { FontAwesome5 } from '@expo/vector-icons';

export default function StartScreen({ navigation }: NavigationStackScreenProps<'Start'>) {
  return (
    <Box alignItems="center" my={8} w="100%">
      <Heading mb={4} color="secondary.400">
        Willkommen
      </Heading>
      <FontAwesome5 name="solar-panel" size={24} color="white" />
      <Box my={8} w="80%" alignItems="center">
        <Text>
          Hierbei handelt es sich um eine kleine App, die Ihnen beim Einstieg in das Thema
          <Text fontWeight="bold"> “Balkonkraftwerk” </Text>
          behilflich sein soll.
        </Text>
        <Text>Bitte wählen Sie eine der folgenden Funktionen zum Starten.</Text>
      </Box>
      <VStack space={4}>
        <Button onPress={() => navigation.navigate('Information')}>Allgemeine Informationen</Button>
        <Button onPress={() => navigation.navigate('Wizard', { screen: 'WizardStart' })}>
          Persönliche Kennzahlen
        </Button>
        <Button onPress={() => navigation.navigate('AR')}>Balkonkraftwerk in AR</Button>
        <Button onPress={() => navigation.navigate('Checklist')}>Checkliste VRZ</Button>
        <Button onPress={() => navigation.navigate('Provider')}>Netzbetreiber</Button>
      </VStack>
    </Box>
  );
}
