import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/Firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    const createUserWithEmailPass=(email,password)=>{
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserInfo=(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photoUrl});
    }

    const emailPassLogin = (email,password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setIsLoading(true);
        return signOut(auth);
    }
    
    const googleSignIn=provider=>{
        setIsLoading(true);
        return signInWithPopup(auth,provider)
    }

    const gihubSignIn=provider=>{
        setIsLoading(true);
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setIsLoading(false);
        })
        return ()=>unSubscribe();
    },[])

    const authInfo={createUserWithEmailPass,updateUserInfo,emailPassLogin,user,logOut,googleSignIn,gihubSignIn,isLoading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;