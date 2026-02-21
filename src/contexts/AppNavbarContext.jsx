import React, { createContext, useContext, useState } from 'react';

const AppNavbarContext = createContext();

export const useAppNavbar = () => {
    return useContext(AppNavbarContext);
};

export const AppNavbarProvider = ({ children }) => {
    // Simulated auth state
    const [user, setUser] = useState(null);

    const login = () => {
        // Mock user data
        setUser({
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://ui-avatars.com/api/?name=Jane+Doe&background=137fec&color=fff',
        });
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <AppNavbarContext.Provider value={value}>
            {children}
        </AppNavbarContext.Provider>
    );
};
