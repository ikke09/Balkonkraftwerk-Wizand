import { Button, Text, HStack } from 'native-base';
import React, { useState } from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';
import WizardContainer from '../../components/WizardContainer';

export default function LocationScreen({ navigation }: WizardStackScreenProps<'Location'>) {
  const userContext = useUserStateValue();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Zugriff auf Standort verweigert!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
    userContext.setUserData({
      Location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        altitude: location.coords.altitude,
      },
    });
  };

  return (
    <WizardContainer
      title="Wohnort"
      continueTo="Module"
      continueCondition={!!userContext.Location.latitude && !!userContext.Location.longitude}
      index={3}
      navigation={navigation}
    >
      <Text>
        Durch klicken auf "Lokalisieren" wird Ihr Standort ermittelt, um eine Berechnung mit Ihren
        Gegebenheiten zu ermöglichen.
      </Text>
      <Button
        w="60%"
        size="lg"
        onPress={getUserLocation}
        endIcon={<FontAwesome name="location-arrow" size={24} color="white" />}
      >
        Lokalisieren
      </Button>
      <Text fontWeight="bold">Aktuelle Position:</Text>
      <Text>Latitude: {userContext.Location.latitude}</Text>
      <Text>Longitude: {userContext.Location.longitude}</Text>
      {errorMsg && <Text color="red">{errorMsg}</Text>}
    </WizardContainer>
  );
}
