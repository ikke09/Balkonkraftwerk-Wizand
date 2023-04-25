import { HStack, Switch, Text } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';
import WizardContainer from '../../components/WizardContainer';

export default function PrivacyScreen({ navigation }: WizardStackScreenProps<'Privacy'>) {
  const userContext = useUserStateValue();
  return (
    <WizardContainer
      title="Datenspeicherung"
      continueTo="Location"
      continueCondition={userContext.DataProcessingAccepted}
      index={2}
      navigation={navigation}
    >
      <Text fontSize="xl">
        Die in dieser Applikation abgefragten Daten werden zur Berechnung einer persönlichen
        Auswertung erhoben. Alle Daten werden an einen eigenen Server gesendet. Es werden keinerlei
        Daten gespeichert und nur für die Berechnung genutzt. Im Anschluss werden die genutzten
        Daten wieder verworfen!
      </Text>
      <HStack space={2}>
        <Switch
          size="sm"
          colorScheme="green"
          isChecked={userContext.DataProcessingAccepted}
          accessibilityLabel="Datenverarbeitung zustimmen"
          defaultIsChecked={false}
          onToggle={(isChecked: boolean) => {
            userContext.setUserData({
              DataProcessingAccepted: isChecked,
            });
          }}
        />
        <Text color="secondary.400" fontSize="lg">
          Ich bin Einverstanden!
        </Text>
      </HStack>
    </WizardContainer>
  );
}
