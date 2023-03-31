import { Box, Text, Button } from 'native-base';
import React from 'react';
import { WizardStackScreenProps } from '../../types/types';

export default function ResultScreen({ navigation }: WizardStackScreenProps<'Result'>) {
  return (
    <Box>
      <Text>Result</Text>
      <Button my={2} onPress={() => navigation.navigate('Start')}>
        Neustart
      </Button>
    </Box>
  );
}
