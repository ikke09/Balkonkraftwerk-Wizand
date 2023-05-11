import { CheckIcon, FormControl, Select, Text } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';
import { Shadowing, Alignment } from '../../types/user-data';
import WizardContainer from '../../components/WizardContainer';

export default function BalconyScreen({ navigation }: WizardStackScreenProps<'Balcony'>) {
  const userContext = useUserStateValue();
  return (
    <WizardContainer
      title="Balkonausrichtung"
      continueTo="Usage"
      continueCondition={!!userContext.Balcony.alignment && !!userContext.Balcony.shadowing}
      index={5}
      navigation={navigation}
    >
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Wie ist Ihr Balkon ausgerichtet?</Text>
        </FormControl.Label>
        <Select
          size="lg"
          color="secondary.400"
          selectedValue={userContext.Balcony.alignment}
          accessibilityLabel="In welcher Richtung ist Ihr Balkon ausgerichtet?"
          placeholder="Wählen Sie die Ausrichtung Ihres Balkons"
          _selectedItem={{
            bg: 'gray.200',
            endIcon: <CheckIcon size="6" />,
          }}
          onValueChange={(itemValue) =>
            userContext.setUserData({
              Balcony: {
                ...userContext.Balcony,
                alignment: itemValue as Alignment,
              },
            })
          }
        >
          <Select.Item label="Norden" value="N" />
          <Select.Item label="Nordost" value="NO" />
          <Select.Item label="Osten" value="O" />
          <Select.Item label="Südost" value="SO" />
          <Select.Item label="Süden" value="S" />
          <Select.Item label="Südwest" value="SW" />
          <Select.Item label="Westen" value="W" />
          <Select.Item label="Nordwest" value="NW" />
        </Select>
      </FormControl>
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Verschattung</Text>
        </FormControl.Label>
        <Select
          size="lg"
          color="secondary.400"
          selectedValue={userContext.Balcony.shadowing}
          accessibilityLabel="Wie ist Ihr Balkon verschattet?"
          placeholder="Wählen Sie die Verschattung Ihres Balkons"
          _selectedItem={{
            bg: 'gray.200',
            endIcon: <CheckIcon size="6" />,
          }}
          onValueChange={(itemValue) =>
            userContext.setUserData({
              Balcony: {
                ...userContext.Balcony,
                shadowing: itemValue as Shadowing,
              },
            })
          }
        >
          <Select.Item label="unter 20%" value="None" />
          <Select.Item label="20% - 60%" value="Low" />
          <Select.Item label="60% - 80%" value="Medium" />
          <Select.Item label="über 80%" value="High" />
        </Select>
      </FormControl>
    </WizardContainer>
  );
}
