export type Alignment = 'S' | 'SW' | 'W' | 'NW' | 'N' | 'NO' | 'O' | 'SO';
export type Shadowing = 'None' | 'Low' | 'Medium' | 'High';
export type UserData = {
  DataProcessingAccepted: boolean;
  Location: {
    latitude: number;
    longitude: number;
    altitude?: number | null;
  };
  PV: {
    module_count: number;
    module_power: number;
    angle: number;
    investment: number;
  };
  Balcony: {
    alignment: Alignment;
    shadowing: Shadowing;
  };
  Consumption: {
    amount: number;
    price: number;
  };
  TimePeriod: number;
  setUserData: (data: Partial<UserData>) => void;
};
