import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import RootLayOut from '../components/RootLayOut';
import Home from '../components/home/Home';



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

      }
      , {
        
      }
 ]
  },
]);

export default router;