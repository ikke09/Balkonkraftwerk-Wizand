import React, { createContext, useContext, useEffect, useReducer } from 'react';
import type { UserData } from '../types/user-data';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'Balkonkraftwerk-Wizard-UserContext';

const initialUserContext: UserData = {
  DataProcessingAccepted: false,
  Balcony: {
    alignment: 'S',
    shadowing: 'None',
  },
  PV: {
    angle: 90,
    investment: 1000,
    module_count: 2,
    module_power: 300,
  },
  Location: {
    latitude: 0,
    longitude: 0,
    altitude: undefined,
  },
  Consumption: {
    amount: 2500,
    price: 40,
  },
  TimePeriod: 15,
  setUserData: () => {},
};

const reducer = (data: UserData, newData: Partial<UserData>) => {
  if (newData === null) {
    AsyncStorage.removeItem(storageKey);
    return initialUserContext;
  }
  return { ...data, ...newData };
};

const getStoredUserContext = async () => {
  const jsonValue = await AsyncStorage.getItem(storageKey);
  return jsonValue != null ? (JSON.parse(jsonValue) as UserData) : null;
};

let localState: UserData | null = null;
getStoredUserContext().then((value) => {
  localState = value;
});

export const UserContext = createContext<UserData>(initialUserContext);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userContext, setUserContext] = useReducer(reducer, localState || initialUserContext);

  useEffect(() => {
    AsyncStorage.setItem(storageKey, JSON.stringify(userContext));
  }, [userContext]);

  return (
    <UserContext.Provider value={{ ...userContext, setUserData: setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserStateValue = () => useContext(UserContext);
