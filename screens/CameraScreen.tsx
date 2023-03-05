import { Box, Text, Button } from 'native-base';
import React from 'react';
import { NavProps } from '../types/types';

export default function CameraScreen({ navigation }: NavProps) {
  return (
    <Box>
      <Text>Camera</Text>
      <Button my={2} onPress={() => navigation.navigate('BalconyPreview')}>
        Preview
      </Button>
    </Box>
  );
}
