import React from "react";
import hero1 from "../../assets/librray hero.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jfif";
import logoAnimation from "../../assets/Alogomation - 1749878657537.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
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
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="lg:flex w-11/12 mt-8 items-center justify-between mx-auto gap-10">
      {/* Left Section (Text + Lottie) */}
      <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* 🔹 Rounded Lottie */}
        <div className="p-3 bg-base-100 rounded-full shadow-xl border-4 border-primary/50 overflow-hidden mb-4">
          <Lottie
            animationData={logoAnimation}
            loop={true}
            style={{ width: "250px", height: "250px", borderRadius: "50%" }}
          />
        </div>

        {/* 🔹 Animated Heading */}
        <motion.h1
          animate={{
            rotate: [0, 3, -3, 0],
            color: ["#facc15", "#f97316", "#0ea5e9", "#facc15"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-5xl md:text-6xl font-bold text-base-content"
        >
          Hello, the Book
        </motion.h1>

        <p className="mt-3 text-xl text-base-content/70">
          Welcome to your personal digital library!
        </p>
      </div>

      {/* Right Section (Image Slider) */}
      <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
        <Slider {...sliderSettings}>
          {[hero1, hero2, hero3].map((img, index) => (
            <div key={index} className="px-2">
              <img
                className="rounded-[35px] border-[6px] border-primary/70 shadow-2xl w-full h-[400px] object-cover"
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
