import React, { createContext, useState } from 'react';

export const AppStateContext = createContext();

const AppProvider = ({ children }) => {

    const value = useState({});

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppProvider;