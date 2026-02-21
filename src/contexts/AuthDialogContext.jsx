import React, { createContext, useContext, useState } from 'react';

const AuthDialogContext = createContext();

export const useAuthDialog = () => {
    return useContext(AuthDialogContext);
};

export const AuthDialogProvider = ({ children }) => {
    // dialogType can be 'login', 'signup', 'forgotPassword', or null (closed)
    const [dialogType, setDialogType] = useState(null);

    const openDialog = (type = 'login') => setIsOpen(type);
    const setIsOpen = (type) => setDialogType(type);
    const closeDialog = () => setDialogType(null);

    return (
        <AuthDialogContext.Provider value={{ dialogType, openDialog, closeDialog }}>
            {children}
        </AuthDialogContext.Provider>
    );
};
