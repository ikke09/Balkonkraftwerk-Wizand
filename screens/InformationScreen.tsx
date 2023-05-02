import { Box, Divider, FlatList, IconButton, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { NavigationStackScreenProps } from '../types/types';
import config from '../lib/config';
import { QAList } from '../types/qalist';
import QAItemComponent from '../components/QAItemComponent';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

export default function InformationScreen({
  navigation,
}: NavigationStackScreenProps<'Information'>) {
  const [qalist, setQAList] = useState<QAList | null>(null);

  const openMoreInformation = async () => {
    await WebBrowser.openBrowserAsync(
      'https://www.verbraucherzentrale.nrw/wissen/energie/erneuerbare-energien/steckersolar-solarstrom-vom-balkon-direkt-in-die-steckdose-44715'
    );
  };

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
