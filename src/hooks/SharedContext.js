import React, { createContext, useState } from 'react';

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
    const [genre, setGenre] = useState('All');

    return (
        <SharedContext.Provider value={{ genre, setGenre }}>
            {children}
        </SharedContext.Provider>
    );
};
