import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import JuiceCard from "./JuiceCard";

const products = [
  {
    bg: "bg-rose-300",
    img: "/images/juices/juice5.webp",
    title: "Heart Helper",
    description: "Blood flow & vitality",
  },
  {
    bg: "bg-green-300",
    img: "/images/juices/juice3.webp",
    title: "Gentle Cleanser",
    description: "Blood flow & vitality",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juices/juice1.webp",
    title: "Skin Shield",
    description: "Skin & eye support",
  },
  {
    bg: "bg-green-300",
    img: "/images/juices/juice2.webp",
    title: "Minty Balance",
    description: "Refreshing & hormone-friendly",
  },
  {
    bg: "bg-yellow-300",
    img: "/images/juices/juice4.webp",
    title: "Amla Glow",
    description: "Strong immunity support",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juices/juice3.webp",
    title: "Ruby Mild",
    description: "Heart & joint nourishment",
  },
  {
    bg: "bg-amber-200",
    img: "/images/juices/juice5.webp",
    title: "Light Iron",
    description: "Iron support, safe balance",
  },

  {
    bg: "bg-green-100",
    img: "/images/juices/juice6.webp",
    title: " Sweet Lime Ease",
    description: "Digestion + immunity",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice2.webp",
    title: "Hydration Glow ",
    description: "Hydrating, cooling",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice1.webp",
    title: "Celery-Free Fresh ",
    description: "Blood pressure & detox, no celery needed",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice4.webp",
    title: "Eye Care",
    description: "Vitamin A & C for vision",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice3.webp",
    title: "Berry-Free Sprint",
    description: "Energy & lungs, no exotic fruits",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice5.webp",
    title: "Aloe Lite",
    description: "Gut soothing, hydration",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice6.webp",
    title: "Tulsi Fresh",
    description: "Lung support, safe for BP meds",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice4.webp",
    title: "Vision Care",
    description: "Carotenoid support for eyes & skin",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice5.webp",
    title: "Gentle Iron",
    description: "Iron support, kidney-safe portion",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice6.webp",
    title: "Liver Light",
    description: "Liver cleanse",
  },
  {
    bg: "bg-orange-200",
    img: "/images/juices/juice1.webp",
    title: "Carrot Glow",
    description: "Skin & immunity",
  },
  {
    bg: "bg-red-200",
    img: "/images/juices/juice2.webp",
    title: "Cool Circulation",
    description: "Heart & blood flow",
  },
  {
    bg: "bg-yellow-500",
    img: "/images/juices/juice4.webp",
    title: "Joint Soother",
    description: "Joint-friendly",
  },
  {
    bg: "bg-orange-500",
    img: "/images/juices/juice5.webp",
    title: "C-Boost",
    description: "Vitamin C powerhouse",
  },
  {
    bg: "bg-emerald-500",
    img: "/images/juices/juice6.webp",
    title: "Digestive Glow",
    description: "Gut-friendly, anti-acidity",
  },
  {
    bg: "bg-purple-500",
    img: "/images/juices/juice2.webp",
    title: "Polyphenol Punch",
    description: "Antioxidant-rich, heart safe",
  },
  {
    bg: "bg-purple-500",
    img: "/images/juices/juice3.webp",
    title: "Purple Care",
    description: "Antioxidants for joints & liver",
  },
  {
    bg: "bg-orange-500",
    img: "/images/juices/juice6.webp",
    title: "Collagen Helper",
    description: "Skin elasticity & repair",
  },
  {
    bg: "bg-emerald-700",
    img: "/images/juices/juice5.webp",
    title: "Bone Helper",
    description: "Bone & blood pressure support",
  },
  {
    bg: "bg-orange-400",
    img: "/images/juices/juice4.webp",
    title: "Vitality Lite",
    description: "Energy & heart health",
  },
  {
    bg: "bg-green-500",
    img: "/images/juices/juice2.webp",
    title: "Mint Fresh",
    description: "Hydration & lung support",
  },
  {
    bg: "bg-orange-600",
    img: "/images/juices/juice6.webp",
    title: "Sun Guard",
    description: "Protects skin & eyes",
  },
  {
    bg: "bg-yellow-600",
    img: "/images/juices/juice4.webp",
    title: "Immunity Glow",
    description: "Immunity powerhouse",
  },
];

const ProductShowcase = () => {
  const ref = useRef(null);

  const slideLeft = () => {
    return {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.4,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <section
      ref={ref}
      className="relative container px-6 sm:px-12 mx-auto mt-0 pb-10 pt-10 text-center overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: "url('/images/products/productBg1.webp')" }}
      ></div>
      <div className="relative z-10">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-[#0E4C45] px-3"
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
            <button className="product-prev-btn w-10 h-10 flex items-center justify-center border border-[#0E4C45] rounded-full hover:bg-[#0E4C45] hover:text-white transition">
              <ArrowLeft />
            </button>
            <button className="product-next-btn w-10 h-10 flex items-center justify-center border border-[#0E4C45] rounded-full hover:bg-[#0E4C45] hover:text-white transition">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
