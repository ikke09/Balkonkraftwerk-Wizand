import { Box, Checkbox } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavProps } from '../types/types';

export default function PrivacyScreen({ navigation }: NavProps) {
  const userContext = useUserStateValue();
  return (
    <Box alignItems="center">
      <Checkbox
        value="DataProcessingAccepted"
        accessibilityLabel="Datenverarbeitung zustimmen"
        defaultIsChecked={userContext.DataProcessingAccepted}
        onChange={() =>
          userContext.setUserData({ DataProcessingAccepted: !userContext.DataProcessingAccepted })
        }
      >
        Datenverarbeitung Akzeptieren!
      </Checkbox>
    </Box>
  );
}
