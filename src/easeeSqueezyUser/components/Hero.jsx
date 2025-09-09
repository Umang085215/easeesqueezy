import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "C-Rich-Orange",
    bottle: "/images/sliderBottels/orange.png",
    bg: "bg-[radial-gradient(circle_at_center,_#f5b066,_#ef7c00)]",
    fruitIcons: [
      {
        src: "/images/fruitIcons/o1.png",
        className: "absolute top-[10%] left-[20%] w-20 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/o5.png",
        className: "absolute top-[40%] left-[10%] w-20 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className: "absolute bottom-[15%] left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute top-[15%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/o4.png",
        className: "absolute top-[50%] right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/o2.png",
        className: "absolute bottom-[10%] right-[20%] w-24 z-20 icon-float4",
      },
    ],
  },
  {
    title: "Mango & Pineapple",
    bottle: "/images/sliderBottels/mango.png",
    bg: "bg-[radial-gradient(circle_at_center,_#fdd566,_#fbb900)]",
    fruitIcons: [
      {
        src: "/images/fruitIcons/m8.png",
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/p1.png",
        className: "absolute top-[40%] left-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute bottom-[15%] left-[20%] w-24 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className: "absolute top-[15%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/m4.png",
        className: "absolute top-[50%] right-[10%] w-20 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/p5.png",
        className: "absolute bottom-[10%] right-[20%] w-24 z-20 icon-float2",
      },
    ],
  },
  {
    title: "Kiwi Collagen Helper",
    bottle: "/images/sliderBottels/kiwi.png",
    bg: "bg-[radial-gradient(circle_at_center,_#e1f58c,_#758e18)]",
    fruitIcons: [
      {
        src: "/images/fruitIcons/k1.png",
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/k3.png",
        className: "absolute top-[40%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute bottom-[15%] left-[20%] w-24 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className: "absolute top-[15%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/k10.png",
        className: "absolute top-[50%] right-[10%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/k9.png",
        className: "absolute bottom-[10%] right-[20%] w-24 z-20 icon-float2",
      },
    ],
  },
  {
    title: "Tomato Lycopene Shield",
    bottle: "/images/sliderBottels/tomato.png",
    bg: "bg-[radial-gradient(circle_at_center,_#ed9b8d,_#e2615b)]",
    fruitIcons: [
      {
        src: "/images/fruitIcons/tomato1.png",
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/tomato2.png",
        className: "absolute top-[40%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute bottom-[15%] left-[20%] w-24 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className: "absolute top-[15%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/tomato3.png",
        className: "absolute top-[50%] right-[10%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/tomato1.png",
        className: "absolute bottom-[10%] right-[20%] w-24 z-20 icon-float2",
      },
    ],
  },
  {
    title: "Spearmint Cooling Juice",
    bottle: "/images/sliderBottels/kiwi.png",
    bg: "bg-[radial-gradient(circle_at_center,_#e1f58c,_#758e18)]",
    fruitIcons: [
      {
        src: "/images/fruitIcons/s1.png",
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/s2.png",
        className: "absolute top-[40%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute bottom-[15%] left-[20%] w-24 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className: "absolute top-[15%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/s3.png",
        className: "absolute top-[50%] right-[10%] w-24 z-20 icon-float1",
      },
      {
        src: "/images/fruitIcons/s1.png",
        className: "absolute bottom-[10%] right-[20%] w-24 z-20 icon-float2",
      },
    ],
  },
  // {
  //   title: "Blueberry-Watermelon ",
  //   bottle: "/images/sliderBottels/blueberry.png",
  //   bg: "bg-[radial-gradient(circle_at_center,_#a7c8e0,_#6da4cb)]",
  //   fruitIcons: [
  //     {
  //       src: "/images/fruitIcons/b4.png",
  //       className: "absolute top-[5%] left-[10%] w-36 z-20 icon-float1",
  //     },
  //     {
  //       src: "/images/fruitIcons/b5.png",
  //       className: "absolute top-[45%] left-[8%] w-24 z-20 icon-float2",
  //     },
  //     {
  //       src: "/images/fruitIcons/leaf2.png",
  //       className: "absolute bottom-[10%] left-[15%] w-24 z-20 icon-float3",
  //     },
  //     {
  //       src: "/images/fruitIcons/leaf1.png",
  //       className: "absolute top-[10%] right-[15%] w-24 z-20 icon-float4",
  //     },
  //     {
  //       src: "/images/fruitIcons/b6.png",
  //       className: "absolute top-[50%] right-[8%] w-36 z-20 icon-float1",
  //     },
  //     {
  //       src: "/images/fruitIcons/b4.png",
  //       className: "absolute bottom-[10%] right-[15%] w-24 z-20 icon-float2",
  //     },
  //   ],
  // },
];

const Hero = () => {
  const [animateIndex, setAnimateIndex] = useState(null);

  useEffect(() => {
    if (animateIndex !== null) {
      const timer = setTimeout(() => {
        setAnimateIndex(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [animateIndex]);

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        onSlideChange={(swiper) => setAnimateIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.fruitIcons.map((fruit, i) => (
              <img
                key={i}
                src={fruit.src}
                alt="fruiticons"
                loading="lazy"
                className={fruit.className}
              />
            ))}
            <div
              className={`relative w-full h-screen min-h-100vh flex justify-center items-center overflow-hidden ${slide.bg}`}
            >
              <h1 className="absolute text-[14vw] sm:text-[10vw] font-extrabold uppercase text-white opacity-90 z-0 leading-none text-center">
                {slide.title}
              </h1>
              <img
                src={slide.bottle}
                alt="Juice Bottle"
                loading="lazy"
                className="absolute  w-[100%] h-[70%] sm:w-[35%] sm:h-[100%]  z-20 drop-shadow-2xl animate-floatTilt  "
              />
            </div>

            {/* Bottom Right Info */}
            <div className="absolute  bottom-4 sm:bottom-6 right-0 sm:right-6  w-full  px-4 md:px-10 items-center sm:items-end justify-center sm:justify-between z-30">
              <div className="text-center sm:text-right">
                <h2 className="font-semibold text-sm sm:text-base md:text-xl text-white">
                  Fresh, Healthy, and Natural Juices
                </h2>
                <h3 className="font-semibold text-sm sm:text-base md:text-xl text-green-800">
                  Delivered to your doorstep daily.
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
