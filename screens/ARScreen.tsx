import { Box, Button } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavigationStackScreenProps } from '../types/types';

export default function ARScreen({ navigation }: NavigationStackScreenProps<'AR'>) {
  const userContext = useUserStateValue();
  return <Box alignItems="center">AR</Box>;
}
