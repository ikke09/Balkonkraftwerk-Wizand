import { Box, Button, Text } from 'native-base';
import React, { useState } from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavProps } from '../types/types';
import * as Location from 'expo-location';

export default function LocationScreen({ navigation }: NavProps) {
  const userContext = useUserStateValue();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    userContext.setUserData({
      UserLocation: {
        lat: location.coords.latitude,
        long: location.coords.longitude,
        altitude: location.coords.altitude,
      },
    });
  };

  return (
    <Box alignItems="center">
      <Button onPress={getUserLocation}>Locate Me!</Button>
      <Button onPress={() => navigation.navigate('Usage')}>Weiter</Button>
      {errorMsg && <Text color="red">{errorMsg}</Text>}
    </Box>
  );
}
