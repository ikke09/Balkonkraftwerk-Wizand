import { Text, IconButton, Spinner, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { WizardStackScreenProps } from '../../types/types';
import { useUserStateValue } from '../../components/UserContext';
import { Result } from '../../types/result';
import WizardContainer from '../../components/WizardContainer';
import config from '../../lib/config';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ResultScreen({ navigation }: WizardStackScreenProps<'Result'>) {
  const userdata = useUserStateValue();

  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<String | null>(null);
  useEffect(() => {
    (async () => {
      const url = `${config.ApiUrl}/api/pvgis/`;
      try {
        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(userdata),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Request failed', { cause: res });
        }
        const data: Result = await res.json();
        setResult(data);
      } catch (e: any) {
        setError('Ergebnisse konnten nicht geladen werden');
      }
    })();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={<MaterialCommunityIcons name="restart" size={24} color="white" />}
          onPress={() => navigation.navigate('WizardStart')}
        />
      ),
    });
  }, [navigation]);

  const numberFormat = Intl.NumberFormat('de', { maximumFractionDigits: 2 });

  return (
    <WizardContainer
      title="Ergebnis"
      continueTo="WizardStart"
      continueCondition={true}
      index={8}
      navigation={navigation}
      showContinue={false}
    >
      {!result && <Spinner accessibilityLabel="Ergebnisse laden..." size="lg" />}
      {result && (
        <>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Stromerzeugung pro Jahr</Text>
            <Text>{numberFormat.format(result.energy_output_per_year)} kWh</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Angenommener Nutzungsgrad</Text>
            <Text>{numberFormat.format(result.self_consumption * 100)} %</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Vorraussichtlich nutzbare Energie pro Jahr</Text>
            <Text>{numberFormat.format(result.usable_energy_per_year)} kWh</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Mögliche jährliche Ersparniss</Text>
            <Text>{numberFormat.format(result.savings)} €</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Vorraussichtliche jährliche Ersparniss</Text>
            <Text>{numberFormat.format(result.realistic_savings)} €</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Ersparniss nach {userdata.TimePeriod} Jahren</Text>
            <Text>{numberFormat.format(result.savings_over_period)} €</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Kosten pro kWh</Text>
            <Text>{numberFormat.format(result.price_per_kwh)} €</Text>
          </VStack>
          <VStack space={0.5} alignItems="center">
            <Text fontWeight="bold">Amortisationszeit</Text>
            <Text>
              {Intl.NumberFormat('de', { maximumFractionDigits: 2 }).format(result.amortization)}{' '}
              Jahre
            </Text>
          </VStack>
        </>
      )}
    </WizardContainer>
  );
}
