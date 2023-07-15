import React, { createContext, useState } from 'react';

// Create the Global Data Context
export const GlobalDomainsContext = createContext();

// Create the Global Data Provider component
export const GlobalDomainsProvider = ({ children }) => {
  const [globalDomains, setGlobalDomains] = useState(["all"]);

  return (
    <GlobalDomainsContext.Provider value={{ globalDomains, setGlobalDomains }}>
      {/* <GlobalDomainsContext.Provider value={{id, setId}}> */}
        {children}
        {/* </GlobalDomainsContext.Provider> */}
    </GlobalDomainsContext.Provider>
  );
};
