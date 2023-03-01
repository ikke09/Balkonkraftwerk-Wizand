import { Box, Button, Image } from 'native-base';
import React from 'react';
import { useUserStateValue } from '../components/UserContext';
import { NavProps } from '../types/types';
import * as ImagePicker from 'expo-image-picker';

export default function BalconyImageScreen({ navigation }: NavProps) {
  const userContext = useUserStateValue();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const img = result.assets[0];
      userContext.setUserData({
        BalconyImage: { id: img.assetId, data: img.base64, uri: img.uri },
      });
    }
  };

  return (
    <Box alignItems="center">
      <Button onPress={pickImage}>Pick an image from camera roll</Button>
    </Box>
  );
}
