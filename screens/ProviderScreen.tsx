import { Text, FormControl, Input, Spinner, VStack, FlatList, Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import { NavigationStackScreenProps } from '../types/types';
import { MastrList } from '../types/mastr';
import config from '../lib/config';
import { Platform } from 'react-native';
import MastrItemComponent from '../components/MastrItemComponent';

export default function ProviderScreen({ navigation }: NavigationStackScreenProps<'Provider'>) {
  const [mastr, setMastr] = useState<MastrList | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let url = `${config.ApiUrl}/api/mastr`;
      if (query) url += `?city=${query}`;
      try {
        const res = await fetch(url);
        const data: MastrList = await res.json();
        setMastr(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Loading from ${url} failed`, error);
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <VStack w="100%" h="100%" p={4} space={8} justifyContent="space-around" alignItems="center">
      <FormControl>
        <FormControl.Label>
          <Text>Stadt</Text>
        </FormControl.Label>
        <Input
          size="lg"
          color="secondary.400"
          placeholder="Nach einer Stadt suchen..."
          value={query || ''}
          onChangeText={(text: string) => {
            setQuery(text);
          }}
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        />
      </FormControl>
      <Box flex={1}>
        {isLoading && <Spinner size="lg" color="white" />}
        {!isLoading && mastr && (
          <FlatList
            data={mastr}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MastrItemComponent item={item} />}
            ListEmptyComponent={() => (
              <Text fontSize="2xl">Ihre Suche hat leider kein Ergebniss geliefert...</Text>
            )}
          ></FlatList>
        )}
      </Box>
    </VStack>
  );
}
