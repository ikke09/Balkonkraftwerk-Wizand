import { Spinner } from 'native-base';
import React from 'react';
import { NavigationStackScreenProps } from '../types/types';
import { WebView } from 'react-native-webview';

export default function ARScreen({ navigation }: NavigationStackScreenProps<'AR'>) {
  return (
    <WebView
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      containerStyle={{ backgroundColor: '#EEE' }}
      originWhitelist={['*']}
      source={{
        html: '<iframe src="https://app.vectary.com/p/3uWkVTpRQbJ7DvhSJoKsKn" frameborder="0" width="100%" height="98%"></iframe>',
      }}
      startInLoadingState={true}
      renderLoading={() => <Spinner />}
      scalesPageToFit={true}
      scrollEnabled={false}
    />
  );
}
