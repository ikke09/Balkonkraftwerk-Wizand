import { Box, Button } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavigationStackScreenProps } from '../types/types';

export default function ChecklistScreen({ navigation }: NavigationStackScreenProps<'Checklist'>) {
  const userContext = useUserStateValue();
  return <Box alignItems="center">Checklist</Box>;
}
