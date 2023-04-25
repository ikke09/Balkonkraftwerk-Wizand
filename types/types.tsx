import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

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
  Investment: undefined;
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
