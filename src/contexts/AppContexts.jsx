// MyContext.js
import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const BOT_ENDPOINT = import.meta.env.VITE_BOT_ON_RENDER
export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    async function signup(email, password, username) {

        try {
            let somethingHappen
            return { success: true, user: 'user '};
        } catch (error) {
            return error;
        }
    }

    async function login(email, password) {
        try {

            let somethingHappen
            return { success: true, message: "Login Successful" };
        } catch (error) {
            return error
        }
    }

    const logout = () => {
        window.location.href = '/';
    }

    const contextValue = {

        login,
        signup,
        logout,

    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
