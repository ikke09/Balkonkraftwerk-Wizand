import { Box, Button } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';

export default function ModuleScreen({ navigation }: WizardStackScreenProps<'Module'>) {
  const userContext = useUserStateValue();
  return <Box alignItems="center">Module</Box>;
}
