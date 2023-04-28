import React from 'react';
import { MastrItem } from '../types/mastr';
import { VStack, HStack, Text, Heading, Button } from 'native-base';
import * as WebBrowser from 'expo-web-browser';

const MastrItemComponent = ({ item }: { item: MastrItem }) => {
  const openDetails = async (link: string) => {
    await WebBrowser.openBrowserAsync(link);
  };

  return (
    <HStack
      w="100%"
      justifyContent="space-around"
      alignItems="center"
      borderRadius={8}
      borderWidth={2}
      borderColor="secondary.400"
      p={4}
      mb={2}
    >
      <VStack space={0.5} flex={1}>
        <Heading>{item.name}</Heading>

        <Text>{item.street}</Text>
        <HStack space={1} alignItems="center">
          <Text>{item.zip}</Text>
          <Text>{item.city}</Text>
        </HStack>
        <Text>{item.state}</Text>
      </VStack>
      <Button h="50%" onPress={() => openDetails(item.link)} borderRadius={8}>
        Details
      </Button>
    </HStack>
  );
};

export default MastrItemComponent;
