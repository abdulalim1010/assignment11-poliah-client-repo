import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayOut from '../components/RootLayOut';
import Home from '../components/home/Home';
import Login from '../components/login/Login';

import AllBooks from '../components/AllBooks';
import CategoryBooks from '../components/CategoryBooks';

import MyBooks from '../components/MyBooks';

import AddBooks from '../components/AddBooks';
import BorrowedBooks from '../components/BorrowedBooks';
import PrivateRouts from '../routs/PrivateRouts';
import AddBook from '../components/AddBooks';
import Register from '../components/login/Register';
import BookDetails from '../components/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/signIn',
        Component:Register,
      },
      {
        path: '/all-books',
        Component: AllBooks,
      },
      
      {
        path: '/my-books',
        Component: MyBooks,
      },
      {
        path: '/borrowed-books',
        Component: () => (
          <PrivateRouts>
            <BorrowedBooks />
          </PrivateRouts>
        ),
      },
      {

        path: '/add-books',

        Component: () => (
          
          <PrivateRouts>
            <AddBooks/>

       </PrivateRouts>
  

)
      },

      {
        path: '/category/:category',
        Component: CategoryBooks,
      },
      {
        path: '/books/:id',
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
