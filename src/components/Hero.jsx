import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// git remote set-url origin git@github.com:Anuj2508/easeesqueezy.git

const Hero = () => {
  const slides = [
    {
      title: "Blueberry Watermelon",
      bottle: "/images/bottel1.png",
      bg: "bg-gradient-to-b from-green-300 to-green-500",
    },
    {
      title: "Vitality Boost Men’s ",
      bottle: "/images/bottel5.png",
      bg: "bg-gradient-to-b from-red-300 to-red-500",
    },
    {
      title: "Mango & Pineapple",
      bottle: "/images/bottel3.png",
      bg: "bg-gradient-to-b from-yellow-300 to-yellow-500",
    },
    {
      title: "Tomato-Lycopene Shield",
      bottle: "/images/bottel4.png",
      bg: "bg-gradient-to-b from-pink-300 to-pink-500",
    },
  ];
  const commonFlavors = [
    { name: "Grape Splash", color: "bg-purple-300", src: "/images/juice1.png" },
    { name: "Watermelon", color: "bg-red-300", src: "/images/juice3.png" },
    { name: "Pineapple", color: "bg-yellow-300", src: "/images/juice2.png" },
  ];
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Logo */}
      <header className="absolute top-6 left-6 z-30">
        <img src="/images/new_logo.png" alt="Easee Squeezy" className="w-36" />
      </header>

      {/* Floating icons  */}

      <img
        src="/images/f3.png"
        alt="Fruit 1"
        className="absolute top-[25%] left-[10%] w-20 z-20 icon-float1"
      />
      <img
        src="/images/f8.png"
        alt="Fruit 1"
        className="absolute top-[50%] left-[15%] w-20 z-20 icon-float2 "
      />
      <img
        src="/images/f4.png"
        alt="Fruit 1"
        className="absolute bottom-[15%] left-[10%] w-20 z-20 icon-float3 "
      />
      <img
        src="/images/f2.png"
        alt="Fruit 1"
        className="absolute top-[25%] right-[30%] w-24 z-20 icon-float4"
      />

      <img
        src="/images/f1.png"
        alt="Fruit 1"
        className="absolute top-[10%] right-[15%] w-36 z-20 icon-float1"
      />
      <img
        src="/images/f2.png"
        alt="Fruit 1"
        className="absolute bottom-[25%] left-[30%] w-24 z-20 icon-float2"
      />
      <img
        src="/images/f9.png"
        alt="Fruit 1"
        className="absolute bottom-[2%] right-[25%] w-36 z-20 rotate-[-45deg] icon-float4"
      />
      <img
        src="/images/f3.png"
        alt="Fruit 1"
        className="absolute bottom-[20%] right-[10%] w-36 z-20 icon-float3"
      />

      
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full relative z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-screen flex justify-center items-center overflow-hidden ${slide.bg}`}
            >
           
              <h1 className="absolute text-[14vw] sm:text-[10vw] font-extrabold uppercase text-white opacity-90 z-0 leading-none text-center">
                {slide.title}
              </h1>

             
              <img
                src={slide.bottle}
                alt="Juice Bottle"
                className="absolute w-[60%] h-[40%] sm:w-[35%] sm:h-[90%] z-20 drop-shadow-2xl animate-floatTilt"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <div
        className="absolute bottom-6 left-0 w-full flex flex-col gap-6 px-4 z-30
          items-center text-center 
          md:px-10 md:flex-row md:justify-between md:items-end md:text-left"
      >
       
        <div>
          <h3 className="text-white font-bold tracking-wide mb-3 md:mb-4">
            FLAVORS
          </h3>
          <div className="flex gap-4 md:gap-6">
            {commonFlavors.map((flavor, fIndex) => (
              <div key={fIndex} className="flex flex-col items-center">
                <img
                  src={flavor.src}
                  alt={flavor.name}
                  className={`w-12 h-12 md:w-20 md:h-20 rounded-full ${flavor.color}`}
                />
                <span className="text-white text-[10px] md:text-sm mt-2">
                  {flavor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      
        <div className="text-left md:text-right">
          <h2 className="font-semibold text-base md:text-xl text-white">
            Fresh, Healthy, and Natural Juices
          </h2>
          <h3 className="font-semibold text-base md:text-xl text-green-800">
            Delivered to Your doorstep daily.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
