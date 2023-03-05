import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type UserData = {
  DataProcessingAccepted: boolean;
  BalconyImage: {
    id?: string | null;
    data?: string | null;
    uri: string;
  };
  Balcony: {
    area: number;
    alignment: 'South' | 'North' | 'East' | 'West';
  };
  UserLocation: {
    lat: number;
    long: number;
    altitude?: number | null;
  };
  UserConsumption: {
    amount: number;
    price: number;
  };
  setUserData: (data: Partial<UserData>) => void;
};

export type NavigationParamList = {
  Start: undefined;
  Privacy: undefined;
  Usage: undefined;
  Result: undefined;
  Camera: undefined;
  Balcony: undefined;
  BalconyPreview: undefined;
  BalconyOutline: undefined;
  Location: undefined;
};

export type NavProps = NativeStackScreenProps<NavigationParamList>;
