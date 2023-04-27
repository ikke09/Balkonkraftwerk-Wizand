import { VStack, Button, Text, Heading } from 'native-base';
import React from 'react';
import { NavigationStackScreenProps } from '../types/types';
import * as WebBrowser from 'expo-web-browser';
import config from '../lib/config';

export default function ARScreen({ navigation }: NavigationStackScreenProps<'AR'>) {
  const url = config.ARModelUrl;

  const openPlugXR = async () => {
    await WebBrowser.openBrowserAsync(url);
  };
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
      <Heading color="secondary.400">AR-Erlebnis</Heading>
      <VStack alignItems="center" w="80%" space={4} flex={1}>
        <Text>
          AR (Augmented Reality) erweitert deine Welt, indem sie digitale Informationen in die reale
          Welt projiziert - für ein noch faszinierenderes und einfacheres Leben!
        </Text>
        <Text>
          Ein Klick auf "Start" zeigt ein 3D-Modell eines Solarmoduls an, jedoch kann das Laden je
          nach Internetverbindung und Geräteleistung etwas Zeit in Anspruch nehmen.
        </Text>
      </VStack>
      <Button mb={4} size="lg" w="60%" onPress={openPlugXR}>
        Loslegen 🚀
      </Button>
    </VStack>
  );
}
