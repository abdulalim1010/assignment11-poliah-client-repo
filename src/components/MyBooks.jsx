import React, { useEffect, useState } from 'react';
import MYBookCard from './MYBookCard';
import { div } from 'framer-motion/client';
import StatsCard from './StatsCard';
import imageone from '../assets/1nimation - 1749895367533.json'
import image2 from '../assets/2nimation - 1749895320042.json'
import imagelogo from '../assets/logo.jpg'
import Lottie from 'lottie-react';
 // Assuming you have a JSON file with book data

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Replace with actual fetch if needed
    fetch('/mysection.json') // or directly import the JSON
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);
  return (
    <div>
       <div>
        <h1 className='text-5xl  text-center font-bold my-6'>Online Public Access Library</h1>
       


        <div className='lg:flex lg:justify-center lg:items-center'>
          <Lottie style={{ width: '200px', height: '200px' }} animationData={imageone} loop={true} autoplay={true}>
           
          </Lottie>
          <img className='w-3xl h-60 className=" rounded-t-[40px] rounded-br-4xl border-s-12 border-b-12 border-blue-500 shadow-2xl"' src={imagelogo} alt="" />
          <Lottie style={{width:'200px',height:'200px'}}animationData={image2} loop={true} auatoplay={true}></Lottie>

        </div>
        <StatsCard></StatsCard>
          </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto gap-6 p-6">
      {
        books.map(book => <MYBookCard book={book} key={book.id}></MYBookCard>)
      }
      </div>
      
    </div>
  );
};

export default MyBooks;