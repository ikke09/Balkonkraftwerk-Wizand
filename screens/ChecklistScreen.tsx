import { Box, Text, Checkbox, HStack, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { NavigationStackScreenProps } from '../types/types';
import { API_BASE_URL } from '@env';

export default function ChecklistScreen({ navigation }: NavigationStackScreenProps<'Checklist'>) {
  const [checklist, setChecklist] = useState([]);
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_BASE_URL}/api/checklist`);
      const data = await res.json();
      setChecklist(data);
    })();
  }, []);

  return (
    <Box alignItems="center" w="100%">
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
            <Text w="90%">{item}</Text>
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
      {checklist.length === 0 && <Text>Checkliste konnte nicht geladen werden</Text>}
      {checklist.length > 0 && (
        <Text color="success.400">
          {(checked / (checklist.length || 1)) * 100}% der Checkliste erfüllt
        </Text>
      )}
    </Box>
  );
}
