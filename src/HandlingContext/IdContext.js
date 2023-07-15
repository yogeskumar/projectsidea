import React, { createContext, useState } from 'react';

// Create the Global Data Context
export const GlobalIdContext = createContext();

// Create the Global Data Provider component
export const GlobalIdProvider = ({ children }) => {
  const [id, setId] = useState([]);

  return (
    <GlobalIdContext.Provider value={{ id, setId }}>
      {/* <GlobalIdContext.Provider value={{id, setId}}> */}
        {children}
        {/* </GlobalIdContext.Provider> */}
    </GlobalIdContext.Provider>
  );
};
