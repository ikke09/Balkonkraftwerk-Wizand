import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type UserData = {
  DataProcessingAccepted: boolean;
  BalconyImage: {
    id?: string;
    data?: string;
    uri: string;
  };
  Balcony: {
    area: number;
    alignment: 'South' | 'North' | 'East' | 'West';
  };
  UserLocation: {
    lat: number;
    long: number;
    altitude?: number;
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
};

export type NavProps = NativeStackScreenProps<NavigationParamList>;
