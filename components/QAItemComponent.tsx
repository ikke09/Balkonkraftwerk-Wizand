import React, { useState } from 'react';
import { QAItem } from '../types/qalist';
import { VStack, IconButton, HStack, Text, ChevronDownIcon, ChevronUpIcon } from 'native-base';

function QAItemComponent({ item }: { item: QAItem }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <VStack space={0} w="100%" mb={2}>
      <HStack justifyContent="space-around" alignItems="center" w="100%">
        <Text fontWeight="bold" fontSize="xl" flex={1}>
          {item.question}
        </Text>
        <IconButton
          size={24}
          icon={isCollapsed ? <ChevronDownIcon color="white" /> : <ChevronUpIcon color="white" />}
          onPress={() => setIsCollapsed(!isCollapsed)}
        />
      </HStack>
      {!isCollapsed && <Text>{item.answer}</Text>}
    </VStack>
  );
}

export default QAItemComponent;
