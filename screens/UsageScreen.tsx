import { Box, Text, Button } from 'native-base';
import React from 'react';
import { NavProps } from '../types/types';

export default function UsageScreen({ navigation }: NavProps) {
  return (
    <Box>
      <Text>BalconyOutline</Text>
      <Button my={2} onPress={() => navigation.navigate('Result')}>
        Ergebnis
      </Button>
    </Box>
  );
}
