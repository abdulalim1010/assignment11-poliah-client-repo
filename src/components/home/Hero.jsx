import React from 'react';
import hero1 from '../../assets/librray hero.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jfif';
import logoAnimation from '../../assets/Alogomation - 1749878657537.json';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 15, zIndex: 10 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 15, zIndex: 10 }}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="lg:flex w-11/12 mt-5 bg-white items-center justify-between p-6 mx-auto">
      {/* Text Section */}
      <div className="w-full lg:w-4/12">
        <Lottie
          style={{ width: "300px", height: "300px" }}
          animationData={logoAnimation}
          loop={true}
        />
        <motion.h1
          animate={{ rotate: [0, 5, -5, 0], color: ["#f00", "#0f0", "#00f", "#f00"] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ fontSize: "4.5rem", fontWeight: "bold" }}
          className="text-7xl font-bold"
        >
          Hello, the Book
        </motion.h1>
        <p className="mt-2 text-3xl text-gray-600">Welcome to your library!</p>
      </div>

      {/* Slider Section */}
      <div className="w-full lg:w-8/12 ml-auto">
        <Slider {...sliderSettings}>
          {[hero1, hero2, hero3].map((img, index) => (
            <div key={index}>
              <img
                className="rounded-t-[40px] rounded-br-4xl border-s-12 border-b-12 border-blue-500 shadow-2xl w-full h-[450px] object-cover"
                src={img}
                alt={`Library Banner ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
