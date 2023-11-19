import React, { createContext, useEffect, useState,  } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import app from "../../../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

//create user
const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

//login user
const signIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

//observe state
useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, currentUser=>{

        setUser(currentUser)
    },
   
)
//stop observing
return ()=>{
    return unsubscribe()
}
},[])
const logOut=()=>{
    return signOut(auth)
}

const authInfo={
    user,
    createUser,
    signIn,
    logOut
}
  return (
    <AuthContext.Provider value={authInfo}>
        
        {children}
        
        </AuthContext.Provider>
  );
};

export default AuthProvider;
