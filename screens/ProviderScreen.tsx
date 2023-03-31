import { Box, Button } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavigationStackScreenProps } from '../types/types';

export default function ProviderScreen({ navigation }: NavigationStackScreenProps<'Provider'>) {
  const userContext = useUserStateValue();
  return <Box alignItems="center">Provider</Box>;
}
