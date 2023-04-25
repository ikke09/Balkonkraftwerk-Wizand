import { Text, Select, CheckIcon, FormControl } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../../components/UserContext';
import { WizardStackScreenProps } from '../../types/types';
import WizardContainer from '../../components/WizardContainer';

export default function ModuleScreen({ navigation }: WizardStackScreenProps<'Module'>) {
  const userContext = useUserStateValue();
  return (
    <WizardContainer
      title="Module"
      continueTo="Balcony"
      continueCondition={
        !!userContext.PV.module_count && !!userContext.PV.angle && !!userContext.PV.module_power
      }
      index={4}
      navigation={navigation}
    >
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Wie viele Solarmodule sollen installiert werden?</Text>
        </FormControl.Label>
        <Select
          size="lg"
          color="secondary.400"
          selectedValue={`${userContext.PV.module_count}`}
          accessibilityLabel="Wie viele Solarmodule sollen installiert werden?"
          placeholder="Wählen Sie die Anzahl der Solarmodule"
          _selectedItem={{
            bg: 'gray.200',
            endIcon: <CheckIcon size="6" />,
          }}
          onValueChange={(itemValue) =>
            userContext.setUserData({
              PV: {
                ...userContext.PV,
                module_count: Number(itemValue),
              },
            })
          }
        >
          <Select.Item label="1 Modul" value="1" />
          <Select.Item label="2 Module" value="2" />
          <Select.Item label="3 Module" value="3" />
          <Select.Item label="4 Module" value="4" />
        </Select>
      </FormControl>
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Leistung pro Modul</Text>
        </FormControl.Label>
        <Select
          size="lg"
          color="secondary.400"
          selectedValue={`${userContext.PV.module_power}`}
          accessibilityLabel="Wie viel Leistung hat jedes Modul?"
          placeholder="Wählen Sie Leistung eines Solarmodules"
          _selectedItem={{
            bg: 'gray.200',
            endIcon: <CheckIcon size="6" />,
          }}
          onValueChange={(itemValue) =>
            userContext.setUserData({
              PV: {
                ...userContext.PV,
                module_power: parseInt(itemValue),
              },
            })
          }
        >
          <Select.Item label="200W" value="200" />
          <Select.Item label="300W" value="300" />
          <Select.Item label="400W" value="400" />
        </Select>
      </FormControl>
      <FormControl minWidth="80%">
        <FormControl.Label>
          <Text>Anstellwinkel der Module</Text>
        </FormControl.Label>
        <Select
          size="lg"
          color="secondary.400"
          selectedValue={`${userContext.PV.angle}`}
          accessibilityLabel="In welchem Winkel werden die Module montiert?"
          placeholder="Wählen Sie den Montagewinkel der Module"
          _selectedItem={{
            bg: 'gray.200',
            endIcon: <CheckIcon size="6" />,
          }}
          onValueChange={(itemValue) =>
            userContext.setUserData({
              PV: {
                ...userContext.PV,
                angle: parseInt(itemValue),
              },
            })
          }
        >
          <Select.Item label="15 Grad" value="15" />
          <Select.Item label="30 Grad" value="30" />
          <Select.Item label="45 Grad" value="45" />
          <Select.Item label="90 Grad" value="90" />
        </Select>
      </FormControl>
    </WizardContainer>
  );
}
