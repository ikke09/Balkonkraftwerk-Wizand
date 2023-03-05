import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';

import Theme from './Theme';
import Navigation from './components/nav/Navigation';
import { UserContextProvider } from './components/UserContext';

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
      <StatusBar />
    </NativeBaseProvider>
  );
}
