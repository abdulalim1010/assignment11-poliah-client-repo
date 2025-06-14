import React, { use } from 'react';
import { Authcontext } from '../components/navbar/authcontext/Authcontext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouts = ({ children }) => {
  const { user } = use(Authcontext)
  const location = useLocation();
  console.log(location.pathname)



  if (!user) {
    return <Navigate to='/login'></Navigate>
  } 
  return children
   
  ;
};

export default PrivateRouts;