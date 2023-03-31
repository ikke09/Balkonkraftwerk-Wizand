import React, { createContext, useContext, useState } from 'react';
import { UserData } from '../types/types';

const initialUserContext: UserData = {
  DataProcessingAccepted: false,
  BalconyImage: {
    id: null,
    base64: '',
    uri: null,
  },
  Balcony: {
    area: 0,
    alignment: 'South',
    shadowing: 'None',
    angle: '90',
  },
  UserLocation: {
    lat: 0,
    lng: 0,
    altitude: undefined,
  },
  UserConsumption: {
    amount: 0,
    price: 0,
  },
  TimePeriod: 1,
  setUserData: () => {},
};

export const UserContext = createContext<UserData>(initialUserContext);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const setUserData = (data: Partial<UserData>) => {
    setUserContext({ ...userContext, ...data });
  };
  const initialState = { ...initialUserContext, setUserData };
  const [userContext, setUserContext] = useState(initialState);

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export const useUserStateValue = () => useContext(UserContext);
