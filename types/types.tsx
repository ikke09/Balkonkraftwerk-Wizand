import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

export type UserData = {
  DataProcessingAccepted: boolean;
  BalconyImage: {
    id: string | null;
    base64: string;
    uri: string | null;
  };
  Balcony: {
    area: number;
    alignment: 'South' | 'North' | 'East' | 'West';
    shadowing: 'None' | 'Low' | 'Medium' | 'High';
    angle: '90' | '45' | '20' | '0';
  };
  UserLocation: {
    lat: number;
    lng: number;
    altitude?: number | null;
  };
  UserConsumption: {
    amount: number;
    price: number;
  };
  TimePeriod: number;
  setUserData: (data: Partial<UserData>) => void;
};

export type NavigationParamList = {
  Start: undefined;
  Information: undefined;
  Provider: undefined;
  AR: undefined;
  Checklist: undefined;
  Wizard: NavigatorScreenParams<WizardParamList>;
};

export type WizardParamList = {
  WizardStart: undefined;
  Privacy: undefined;
  Location: undefined;
  Module: undefined;
  Balcony: undefined;
  Usage: undefined;
  Result: undefined;
};

export type NavigationStackScreenProps<T extends keyof NavigationParamList> =
  NativeStackScreenProps<NavigationParamList, T>;

export type WizardStackScreenProps<T extends keyof WizardParamList> = CompositeScreenProps<
  NativeStackScreenProps<WizardParamList, T>,
  NavigationStackScreenProps<keyof NavigationParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParamList {}
  }
}
