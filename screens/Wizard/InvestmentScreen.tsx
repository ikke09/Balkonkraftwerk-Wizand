import { Text, FormControl, InputGroup, Input, InputRightAddon } from 'native-base';
import React from 'react';
import { WizardStackScreenProps } from '../../types/types';
import { useUserStateValue } from '../../components/UserContext';
import WizardContainer from '../../components/WizardContainer';
import { Platform } from 'react-native';

export default function InvestmentScreen({ navigation }: WizardStackScreenProps<'Investment'>) {
  const userContext = useUserStateValue();
  return (
    <WizardContainer
      title="Preis"
      continueTo="Result"
      continueCondition={!!userContext.TimePeriod && !!userContext.PV.investment}
      index={7}
      navigation={navigation}
    >
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Mit welchem Preis rechnen Sie für das Balkonkraftwerk?</Text>
        </FormControl.Label>
        <InputGroup>
          <Input
            w="80%"
            size="lg"
            color="secondary.400"
            placeholder="1000"
            value={`${userContext.PV.investment || 0}`}
            onChangeText={(text) => {
              userContext.setUserData({
                PV: {
                  ...userContext.PV,
                  investment: parseInt(text),
                },
              });
            }}
            keyboardType="number-pad"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          />
          <InputRightAddon w="20%" children={'€'} />
        </InputGroup>
      </FormControl>
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Mit welchen Nutzungszeitraum rechnen Sie?</Text>
        </FormControl.Label>
        <InputGroup>
          <Input
            w="80%"
            size="lg"
            color="secondary.400"
            placeholder="15"
            value={`${userContext.TimePeriod || 0}`}
            onChangeText={(text) => {
              userContext.setUserData({
                TimePeriod: parseInt(text),
              });
            }}
            keyboardType="number-pad"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          />
          <InputRightAddon w="20%" children={'Jahre'} />
        </InputGroup>
      </FormControl>
    </WizardContainer>
  );
}
