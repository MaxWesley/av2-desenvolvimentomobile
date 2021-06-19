import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const Context = createContext({});

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const listenAuth = (userState) => {
        setUser(userState)
    }

    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(resp => console.warn(resp))
            .catch(err => console.warn(err))
    }

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(resp => console.warn(resp))
            .catch(err => console.warn(err))
    }

    const signOut = () => {
        firebase.auth().signOut()
            .then(resp => console.warn('Usuário deslogado com sucesso!'))
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(listenAuth);
        return listener;
    }, []);

    return (
        <Context.Provider
            value={{
                user,
                signUp,
                signIn,
                signOut
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider }