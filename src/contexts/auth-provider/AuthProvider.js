import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/Firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null);

    const createUserWithEmailPass=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserInfo=(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photoUrl});
    }

    const emailPassLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=>unSubscribe();
    },[])

    const authInfo={createUserWithEmailPass,updateUserInfo,emailPassLogin,user,logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;