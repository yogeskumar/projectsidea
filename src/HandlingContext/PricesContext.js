import React, { createContext, useState } from 'react';

// Create the Global Data Context
export const GlobalPricesContext = createContext();

// Create the Global Data Provider component
export const GlobalPricesProvider = ({ children }) => {
  const [globalPrices, setGlobalPrices] = useState(["all"]);

  return (
    <GlobalPricesContext.Provider value={{ globalPrices, setGlobalPrices }}>
      {/* <GlobalPricesContext.Provider value={{id, setId}}> */}
        {children}
        {/* </GlobalPricesContext.Provider> */}
    </GlobalPricesContext.Provider>
  );
};
