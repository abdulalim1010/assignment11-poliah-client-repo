import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import RootLayOut from '../components/RootLayOut';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import SignIn from '../components/login/SignIn';
import CategoryBooks from '../components/CategoryBooks';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path: '/login',
        Component:Login

      }
      , {
        path: '/signIn',
        Component:SignIn
        
      },
      {
        path: "/category/:name",
        element:<CategoryBooks></CategoryBooks>

      }

 ]
  },
]);

export default router;