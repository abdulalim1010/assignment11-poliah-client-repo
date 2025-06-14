import React from 'react';
import heroImage from '../../assets/librray hero.jpg';
import logoimaghe from '../../assets/Alogomation - 1749878657537.json'
import { motion } from "framer-motion";
import Lottie from 'lottie-react';


const Hero = () => {
  return (
    <div className="lg:flex w-11/12 mt-5 bg-green-100 items-center justify-between p-6 mx-auto">
      {/* Text Section */}
      <div className="w-4/12">
        <Lottie style={{ width: "300px", height: "300px" }} animationData={logoimaghe}> loop={true}

        </Lottie>
        <motion.h1  animate={{ rotate: [0, 5, -5, 0], color: ["#f00", "#0f0", "#00f", "#f00"] }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{ fontSize: "4.5rem", fontWeight: "bold" }} className="text-7xl font-bold">Hello, the Book</motion.h1>
        <p className="mt-2 text-3xl text-gray-600">Welcome to your library!</p>
      </div>

      {/* Image Section */}
      <div className="w-8/12 ml-auto">
        <img className=" rounded-t-[40px] rounded-br-4xl border-s-12 border-b-12 border-blue-500 shadow-2xl"
          src={heroImage}
          alt="Library Hero"
          
        />
      </div>
     
    </div>
  );
};

export default Hero;

