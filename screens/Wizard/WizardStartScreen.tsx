import { Text } from 'native-base';
import React from 'react';
import { WizardStackScreenProps } from '../../types/types';
import WizardContainer from '../../components/WizardContainer';

export default function WizardStartScreen({ navigation }: WizardStackScreenProps<'WizardStart'>) {
  return (
    <WizardContainer
      title="Wizard"
      continueTo="Privacy"
      continueCondition={true}
      index={1}
      navigation={navigation}
    >
      <Text fontSize="xl">
        Im nachfolgendn beantworten Sie einige Fragen zu Ihren persönlichen Gegebenheiten und
        erhalten am Ende ein berechnetes Ergebnis über die vorraussichtliche Leistung eines
        Balkonkraftwerkes bei Ihnen Zuhause.
      </Text>
    </WizardContainer>
  );
}
