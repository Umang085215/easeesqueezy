import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import JuiceCard from "./JuiceCard";
import products from "../../data/products/productsData";

const ProductShowcase = () => {
  return (
    <section className="relative container px-6 sm:px-12 mx-auto mt-0 pb-10 pt-10 text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: "url('/images/products/productBg1.jpg')" }}
      ></div>
      <div className="relative z-10">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-success px-3"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          JUICE PARADISE
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-2 mb-8 px-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Enjoy our take on the classic flavors you know and love.
        </motion.p>

        <div className="relative mb-10 mt-10 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".product-next-btn",
              prevEl: ".product-prev-btn",
            }}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            centeredSlides={false}
            preloadImages={false}
            lazy={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              440: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
          >
            {products.map((product, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <div className="w-[260px]">
                  {" "}
                  <JuiceCard
                    img={product.img}
                    title={product.title}
                    des={product.description}
                    bg={product.bg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 flex gap-4 w-full justify-center">
            <button className="product-prev-btn w-10 h-10 flex items-center justify-center border border-success rounded-full hover:bg-success_hover hover:text-white transition">
              <ArrowLeft />
            </button>
            <button className="product-next-btn w-10 h-10 flex items-center justify-center border border-success rounded-full hover:bg-success_hover hover:text-white transition">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
