import React from 'react';
import Hero from './Hero';

import BookCategories from '../BookCategories';
import h1image from '../../assets/Ah1nimation - 1749873917132.json';
import h2image from '../../assets/Ah2nimation - 1749873704295.json'
import h3image from '../../assets/Ah3nimation - 1749873576967.json'

import Lottie from 'lottie-react';
import StatsCard from '../StatsCard';
import LibraryCards from './LibraryCards';
import BlogsSection from './BlogsSection';

const Home = () => {
  return (
    <div>
      <div className=''>
        <Hero/>
      </div>
      <div className='lg:flex justify-center w-11/12 mx-auto items-center gap-4 mt-5 bg-pink-100 p-6'>
      <Lottie style={{width:'400px'}} animationData={h1image } loop={true}></Lottie>
      <Lottie style={{width:'400px'}} animationData={h2image } loop={true}></Lottie>
      <Lottie style={{width:'400px'}} animationData={h3image } loop={true}></Lottie>

      </div>
      <main>
        
      
        

        <BookCategories></BookCategories>
      </main>
      <div>
        <LibraryCards/>
      </div>
      <div>
        <BlogsSection/>
    </div>
      <div>
     <StatsCard></StatsCard>
      </div>
      
    </div>
  );
};

export default Home;