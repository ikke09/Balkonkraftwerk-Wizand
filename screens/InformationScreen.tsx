import { Box, Divider, FlatList, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { NavigationStackScreenProps } from '../types/types';
import config from '../lib/config';
import { QAList } from '../types/qalist';
import QAItemComponent from '../components/QAItemComponent';

export default function InformationScreen({
  navigation,
}: NavigationStackScreenProps<'Information'>) {
  const [qalist, setQAList] = useState<QAList | null>(null);

  useEffect(() => {
    (async () => {
      const url = `${config.ApiUrl}/api/info`;
      try {
        const res = await fetch(url);
        const data: QAList = await res.json();
        setQAList(data);
      } catch (error) {
        console.error(`Loading from ${url} failed`, error);
      }
    })();
  }, []);
  return (
    <Box alignItems="center" w="100%">
      {!qalist && <Spinner accessibilityLabel="QA laden..." size="lg" />}
      {qalist && (
        <FlatList
          w="100%"
          h="90%"
          px={2}
          data={qalist}
          renderItem={({ item }) => <QAItemComponent item={item} />}
          ItemSeparatorComponent={() => <Divider />}
        ></FlatList>
      )}
    </Box>
  );
}
