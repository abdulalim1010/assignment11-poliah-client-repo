import React from 'react';
import Hero from './Hero';
import Bonus from '../bonus/Bonus';
import BookCategories from '../BookCategories';

const Home = () => {
  return (
    <div>
      <div className=''>
        <Hero/>
      </div>
      <main>
        <BookCategories></BookCategories>
      </main>
      <div>
        <Bonus/>
      </div>
      
    </div>
  );
};

export default Home;