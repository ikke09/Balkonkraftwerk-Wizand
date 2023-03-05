import { Box, Button } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavProps } from '../types/types';

export default function StartScreen({ navigation }: NavProps) {
  const userContext = useUserStateValue();
  return (
    <Box alignItems="center">
      <Button my={2} onPress={() => navigation.navigate('Privacy')}>
        Datenverarbeitung
      </Button>
      <Button
        my={2}
        onPress={() => navigation.navigate('Balcony')}
        isDisabled={!userContext.DataProcessingAccepted}
      >
        Start Wizard
      </Button>
    </Box>
  );
}
