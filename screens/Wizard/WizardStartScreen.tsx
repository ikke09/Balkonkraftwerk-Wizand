import { Box, Button } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';

export default function WizardStartScreen({ navigation }: WizardStackScreenProps<'WizardStart'>) {
  const userContext = useUserStateValue();
  return (
    <Box alignItems="center">
      <Button my={2} onPress={() => navigation.navigate('Privacy')}>
        Datenverarbeitung
      </Button>
      <Button
        my={2}
        onPress={() => navigation.navigate('Privacy')}
        isDisabled={!userContext.DataProcessingAccepted}
      >
        Start Wizard
      </Button>
    </Box>
  );
}
