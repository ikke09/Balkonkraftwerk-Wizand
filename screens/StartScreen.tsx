import { Box, Button, Text, Image } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavProps } from '../types/types';

export default function StartScreen({ navigation }: NavProps) {
  const userContext = useUserStateValue();
  return (
    <Box alignItems="center">
      <Text>
        Datenverarbeitung akzeptiert? {userContext.DataProcessingAccepted ? 'Ja' : 'Nein'}
      </Text>
      <Button my={2} onPress={() => navigation.navigate('Privacy')}>
        Datenverarbeitung
      </Button>
      <Button my={2} onPress={() => navigation.navigate('BalconyImage')}>
        Balkon erfassen
      </Button>
      <Button my={2} onPress={() => navigation.navigate('Location')}>
        Standort erfassen
      </Button>

      {userContext && userContext.BalconyImage && userContext.BalconyImage.uri !== '' && (
        <Image
          source={{ uri: userContext.BalconyImage.uri }}
          style={{ width: 200, height: 200 }}
          alt="Gewähltes Bild"
        />
      )}
      {userContext && userContext.UserLocation && (
        <Text>{JSON.stringify(userContext.UserLocation)}</Text>
      )}
    </Box>
  );
}
