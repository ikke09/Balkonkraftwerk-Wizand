import React, { createContext, useContext, useState } from 'react';
import { UserData } from '../types/types';

const initialUserContext: UserData = {
  DataProcessingAccepted: false,
  BalconyImage: {
    id: undefined,
    data: undefined,
    uri: '',
  },
  Balcony: {
    area: 0,
    alignment: 'South',
  },
  UserLocation: {
    lat: 0,
    long: 0,
    altitude: undefined,
  },
  UserConsumption: {
    amount: 0,
    price: 0,
  },
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
