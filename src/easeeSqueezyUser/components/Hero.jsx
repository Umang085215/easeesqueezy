import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroSlider from "../data/products/heroSlider";

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
        preloadImages={false}
        lazy={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setAnimateIndex(swiper.activeIndex)}
      >
        {heroSlider.map((slide, index) => (
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
              className={`relative w-full  min-h-[80vh] sm:h-[90vh] flex justify-center items-center overflow-hidden ${slide.bg}`}
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
