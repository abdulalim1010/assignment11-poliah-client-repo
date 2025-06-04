import React from 'react';
import NavBar from './navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from './footer/Footer';

const RootLayOut = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet/>
</main>
      <footer>
        <Footer></Footer>
</footer>

    </div>
  );
};

export default RootLayOut;