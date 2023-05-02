import { Box, Text, Checkbox, HStack, VStack, Spinner, IconButton } from 'native-base';
import React, { useEffect, useState } from 'react';
import { NavigationStackScreenProps } from '../types/types';
import config from '../lib/config';
import { Checklist } from '../types/checklist';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

export default function ChecklistScreen({ navigation }: NavigationStackScreenProps<'Checklist'>) {
  const [checklist, setChecklist] = useState<Checklist | null>(null);
  const [checked, setChecked] = useState(0);

  const openMoreInformation = async () => {
    await WebBrowser.openBrowserAsync(
      'https://www.verbraucherzentrale.nrw/wissen/energie/erneuerbare-energien/steckersolar-solarstrom-vom-balkon-direkt-in-die-steckdose-44715'
    );
  };

  useEffect(() => {
    (async () => {
      const url = `${config.ApiUrl}/api/checklist`;
      try {
        const res = await fetch(url);
        const data: Checklist = await res.json();
        setChecklist(data);
      } catch (error) {
        console.error(`Loading from ${url} failed`, error);
      }
    })();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={<Ionicons name="information-circle" size={24} color="white" />}
          onPress={() => openMoreInformation()}
        />
      ),
    });
  }, [navigation]);

  return (
    <Box alignItems="center" w="100%">
      {!checklist && <Spinner accessibilityLabel="Checkliste laden..." size="lg" />}
      {checklist && (
        <>
          <VStack my={4} space={4}>
            {checklist.map((item, index) => (
              <HStack
                key={index}
                w="90%"
                space={4}
                alignItems="center"
                borderRadius="sm"
                borderWidth={2}
                borderColor="warmGray.200"
                p={1}
              >
                <Text w="90%">{item.description}</Text>
                <Checkbox
                  w="10%"
                  value={`${index}`}
                  accessibilityLabel="Checkbox für ein Checklistenelement"
                  defaultIsChecked={false}
                  onChange={(isChecked) => {
                    setChecked((prev) => (isChecked ? prev + 1 : prev - 1));
                  }}
                />
              </HStack>
            ))}
          </VStack>
          <Text color="success.400">
            {(checked / (checklist.length || 1)) * 100}% der Checkliste erfüllt
          </Text>
        </>
      )}
    </Box>
  );
}
