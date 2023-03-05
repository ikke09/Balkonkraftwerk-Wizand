import { Box, Text, Button } from 'native-base';
import React from 'react';
import { NavProps } from '../types/types';

export default function BalconyPreviewScreen({ navigation }: NavProps) {
  return (
    <Box>
      <Text>Balcony Preview</Text>
      <Button my={2} onPress={() => navigation.navigate('Location')}>
        Weiter
      </Button>
    </Box>
  );
}
