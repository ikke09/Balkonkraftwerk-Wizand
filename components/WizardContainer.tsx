import { VStack, Heading, Button, Text, HStack, Divider } from 'native-base';
import React from 'react';
import { WizardParamList, WizardStackScreenProps } from '../types/types';

type WizardContainerProps = {
  title: string;
  continueTo: keyof WizardParamList;
  continueCondition: boolean;
  navigation: WizardStackScreenProps<keyof WizardParamList>['navigation'];
  children: React.ReactNode;
  index: number;
  showContinue?: boolean;
};

export default function WizardContainer({
  title,
  showContinue,
  continueTo,
  continueCondition,
  navigation,
  children,
  index,
}: WizardContainerProps) {
  showContinue = showContinue ?? true;
  return (
    <VStack
      alignItems="center"
      justifyContent="space-around"
      h="100%"
      w="100%"
      space={4}
      pt={4}
      pb={8}
    >
      <Heading color="secondary.400">{title}</Heading>
      <VStack alignItems="center" w="80%" space={4} flex={1}>
        {children}
      </VStack>
      {showContinue && (
        <Button
          w="40%"
          size="lg"
          isDisabled={!continueCondition}
          onPress={() => navigation.navigate(continueTo)}
        >
          Weiter
        </Button>
      )}
      <Divider w="60%" color="secondary.400"></Divider>
      <Text>{index}/8</Text>
    </VStack>
  );
}
