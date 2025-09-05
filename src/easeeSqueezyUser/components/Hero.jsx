import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "./Navbar";

const Hero = () => {
  const slides = [
    {
      title: "Orange",
      bottle: "/images/bottel2.png",
      bg: "bg-gradient-to-b   from-[#f2826c] to-[#b42f1a]",
    },
    {
      title: "Mango & Pineapple",
      bottle: "/images/bottel3.png",
      bg: "bg-gradient-to-b from-[#f7be59] to-[#b35901]",
    },
    {
      title: "Kiwi",
      bottle: "/images/bottel1.png",
      bg: "bg-gradient-to-b from-[#dcf570] to-[#505f18]",
    },
    {
      title: "Dragon Fruit",
      bottle: "/images/bottel5.png",
      bg: "bg-gradient-to-b from-[#dc5f45] to-[#570505]",
    },
    {
      title: "Spearmint",
      bottle: "/images/bottel1.png",
      bg: "bg-gradient-to-b from-[#dcf570] to-[#505f18]",
    },
    {
      title: "Blueberry Watermelon",
      bottle: "/images/bottel6.png",
      bg: "bg-gradient-to-b  from-[#fa86fa] to-[#4e0449]",
    },
  ];
  // const slides = [
  //   {
  //     title: "Blueberry Watermelon",
  //     bottle: "/images/bottel6.png",
  //     bg: "bg-gradient-to-b  from-[#fa86fa] to-[#4e0449]",
  //   },
  //   {
  //     title: "Vitality Boost Men’s ",
  //     bottle: "/images/bottel5.png",
  //     bg: "bg-gradient-to-b from-[#e27a65] to-[#6b0908]",
  //   },
  //   {
  //     title: "Mango & Pineapple",
  //     bottle: "/images/bottel3.png",
  //     bg: "bg-gradient-to-b from-[#fcb339] to-[#b35901]",
  //   },
  //   {
  //     title: "Tomato-Lycopene Shield",
  //     bottle: "/images/bottel4.png",
  //     bg: "bg-gradient-to-b from-[#b0516f] to-[#480522]",
  //   },
  // ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* <Navbar /> */}
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
        // autoplay={{ delay: 3000 }}
        // loop
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
        className="absolute bottom-6 right-0 w-full flex flex-col gap-6 px-4 z-30
          items-center text-center 
          md:px-10 md:justify-between md:items-end md:text-left"
      >
        <div className="text-left">
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
