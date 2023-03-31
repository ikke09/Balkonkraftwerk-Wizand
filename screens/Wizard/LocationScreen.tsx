import { Box, Button, Text } from 'native-base';
import React, { useState } from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';
import * as Location from 'expo-location';

export default function LocationScreen({ navigation }: WizardStackScreenProps<'Location'>) {
  const userContext = useUserStateValue();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Zugriff auf Standort verweigert!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Low });
    userContext.setUserData({
      UserLocation: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        altitude: location.coords.altitude,
      },
    });
  };

  return (
    <Box alignItems="center">
      <Button onPress={getUserLocation}>Lokalisieren</Button>
      <Button
        isDisabled={!userContext.UserLocation.lat || !userContext.UserLocation.lng}
        onPress={() => navigation.navigate('Usage')}
      >
        Weiter
      </Button>
      <Text>
        Aktuelle Position: {userContext.UserLocation.lat || ''} |{' '}
        {userContext.UserLocation.lng || ''}
      </Text>
      {errorMsg && <Text color="red">{errorMsg}</Text>}
    </Box>
  );
}
