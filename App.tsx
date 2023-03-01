import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Navigation from './components/nav/Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
      <StatusBar />
    </NativeBaseProvider>
  );
}
