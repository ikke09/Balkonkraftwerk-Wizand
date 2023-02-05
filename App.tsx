import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg="teal.50" rounded="xl" height="100%" width="100%" safeArea>
        <Box>Hello world</Box>
      </Box>
    </NativeBaseProvider>
  );
}
