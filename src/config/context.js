import { createContext, useContext } from 'react';

export const AirlineContext = createContext();
export const AirlineProvider = AirlineContext.Provider;
export const AirlineConsumer = () => useContext(AirlineContext);