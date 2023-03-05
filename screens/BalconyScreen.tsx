import { Alert, Box, Button, CloseIcon, HStack, IconButton, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavProps } from '../types/types';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

export default function BalconyScreen({ navigation }: NavProps) {
  const userContext = useUserStateValue();
  const [type, setType] = useState(CameraType.back);
  const [error, setError] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResponse = await ImagePicker.getMediaLibraryPermissionsAsync(false);
    console.log(permissionResponse);

    if (!permissionResponse.granted) {
      setError('Keine Erlaubnis zum Zugriff auf die Fotobibliothek erhalten');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (result.canceled) {
      setError('Auswahl abgebrochen');
      return;
    }

    const img = result.assets[0];
    userContext.setUserData({
      BalconyImage: { id: img.assetId, data: img.base64, uri: img.uri },
    });
  };

  const takePhoto = async () => {
    let cameraPermission = await Camera.getCameraPermissionsAsync();
    if (!cameraPermission.granted) {
      await Camera.requestCameraPermissionsAsync();
      await takePhoto();
      return;
    }
  };

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  return (
    <Box alignItems="center">
      <Button onPress={pickImage}>Bild auswählen</Button>
      <Button onPress={takePhoto}>Foto machen</Button>

      <Camera type={type}>
        <Box>
          <Button opacity={0.5} onPress={toggleCameraType}>
            Flip Camera
          </Button>
        </Box>
      </Camera>
      <Button onPress={() => navigation.navigate('BalconyPreview')}>Weiter</Button>

      {error && (
        <Alert w="100%" status="error">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {error}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                onPress={() => setError(null)}
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: 'coolGray.600',
                }}
              />
            </HStack>
          </VStack>
        </Alert>
      )}
    </Box>
  );
}
