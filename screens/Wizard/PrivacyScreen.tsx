import { Box, Checkbox, Button, Text } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';

export default function PrivacyScreen({ navigation }: WizardStackScreenProps<'Privacy'>) {
  const userContext = useUserStateValue();
  return (
    <Box alignItems="center">
      <Text>
        Die in dieser Applikation abgefragten Daten werden zur Berechnung einer persönlichen
        Auswertung erhoben. Alle Daten werden an einen eigenen Server gesendet. Es werden keinerlei
        Daten gespeichert und nur für die Berechnung genutzt. Im Anschluss werden die genutzten
        Daten wieder gelöscht!
      </Text>
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
      <Button onPress={() => {}} isDisabled={!userContext.DataProcessingAccepted}>
        Start
      </Button>
    </Box>
  );
}
