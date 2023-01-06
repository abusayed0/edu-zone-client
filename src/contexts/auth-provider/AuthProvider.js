import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
import app from '../../firebase/Firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const createUserWithEmailPass=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserInfo=(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photoUrl})
    }

    const authInfo={createUserWithEmailPass,updateUserInfo};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;