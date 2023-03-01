import { Box, Button, Text } from 'native-base';
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
      <Button onPress={() => navigation.navigate('Privacy')}>Datenverarbeitung</Button>
    </Box>
  );
}
