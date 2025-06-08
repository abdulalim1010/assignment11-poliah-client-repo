import React from 'react';
import Hero from './Hero';
import Bonus from '../bonus/Bonus';

const Home = () => {
  return (
    <div>
      <div className=''>
        <Hero/>
      </div>
      <div>
        <Bonus/>
      </div>
      
    </div>
  );
};

export default Home;