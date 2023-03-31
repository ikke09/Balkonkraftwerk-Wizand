import { useNavigation } from '@react-navigation/native';
import React from 'react';
import HeaderBackButton from '@react-navigation/elements/src/Header/HeaderBackButton';
import { NavigationParamList } from '../../types/types';

type CustomBackButtonProps = { label: string; navigateTo: keyof NavigationParamList };

const CustomBackButton = ({ label, navigateTo }: CustomBackButtonProps) => {
  const navigation = useNavigation();
  return (
    <HeaderBackButton
      label={label}
      labelVisible={true}
      onPress={() => navigation.navigate<typeof navigateTo>(navigateTo as any)}
    />
  );
};
export default CustomBackButton;
