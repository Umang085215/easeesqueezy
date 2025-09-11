import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
        className: "absolute top-[45%] left-[10%] w-20 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/o4.png",
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/o2.png",
        className:
          " absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
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
        className: "absolute top-[45%] left-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/m4.png",
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-20 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/p5.png",
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
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
        className: "absolute top-[45%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/k10.png",
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/k9.png",
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
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
        className: "absolute top-[45%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/tomato3.png",
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/tomato1.png",
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
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
        className: "absolute top-[45%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/leaf2.png",
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: "/images/fruitIcons/leaf1.png",
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: "/images/fruitIcons/s3.png",
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: "/images/fruitIcons/s1.png",
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
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
  const ref = useRef(null);
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
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
              ref={ref}
              className={`relative w-full h-[80vh] min-h-[50vh] sm:h-[90vh] flex justify-center items-center overflow-hidden ${slide.bg}`}
            >
              <motion.h1
                className=" hidden sm:block absolute text-[14vw] sm:text-[10vw] font-extrabold uppercase text-[#ffffffb5] z-0 leading-none text-center "
                initial={{ opacity: 0, y: -200, scale: 0.4 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 200, scale: 0.4 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute w-[100%]  sm:w-[35%]  z-20 drop-shadow-2xl"
              >
                <img
                  src={slide.bottle}
                  alt="Juice Bottle"
                  loading="lazy"
                  className="w-full h-full animate-floatTilt"
                />
              </motion.div>

              <motion.h1
                className="block sm:hidden absolute bottom-20 text-[10vw] font-extrabold uppercase text-[#ffffffb5] z-30 leading-none text-center"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                {slide.title}
              </motion.h1>
            </div>
            <div className="absolute  bottom-4 sm:bottom-6 right-0 sm:right-6  w-full  px-4 md:px-10 items-center sm:items-end justify-center sm:justify-between z-30">
              <div className="text-center sm:text-right">
                <motion.h2
                  className="font-semibold text-sm sm:text-base md:text-xl text-white"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: false }}
                >
                  Fresh, Healthy, and Natural Juices
                </motion.h2>
                <motion.h3
                  className="font-semibold text-sm sm:text-base md:text-xl text-green-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                >
                  Delivered to your doorstep daily !!
                </motion.h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
