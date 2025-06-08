import React from 'react';
import { Authcontext } from './Authcontext';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebase.init';

const AuthProveider = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    // Logic to create user
  }
  const sginInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

  }
  
  
  const authInfo = {
    loading,
    createUser,
    sginInUser
    
  }
  
  return (
    <Authcontext  value={authInfo }>
      {children}
   </Authcontext>
  );
};

export default AuthProveider;