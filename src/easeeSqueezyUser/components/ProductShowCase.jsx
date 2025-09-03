import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import JuiceCard from "./JuiceCard";

const products = [
  {
    bg: "bg-green-300",
    img: "/images/juice1.png",
    title: "Spearmint Cooling Juice",
  },
  {
    bg: "bg-yellow-300",
    img: "/images/juice2.png",
    title: "C-Rich Orange & Kiwi Collagen Helper",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juice3.png",
    title: "Blueberry-Watermelon Antioxidant",
  },
  {
    bg: "bg-amber-200",
    img: "/images/juice4.png",
    title: "Spinach-Kale Iron & Biotin Booster",
  },
  {
    bg: "bg-rose-300",
    img: "/images/juice5.png",
    title: "Tomato-Lycopene Shield",
  },
  {
    bg: "bg-orange-100",
    img: "/images/juice6.png",
    title: "Omega-3 Radiance Smoothie",
  },
  {
    bg: "bg-purple-200",
    img: "/images/juice4.png",
    title: "Vitality Boost Memory Juice",
  },
];

const ProductShowcase = () => {
  return (
    <section className="container mx-auto mt-0 pb-10 pt-10 sm:mt-[4rem] text-center ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0E4C45] px-3">
        JUICE PARADISE
      </h1>
      <p className="text-gray-600 mt-2 mb-8 px-3">
        Enjoy our take on the classic flavors you know and love.
      </p>

      <div className="relative mb-10 mt-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
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
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
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
                  bg={product.bg}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex gap-4 w-full justify-center">
          <button className="prev-btn w-10 h-10 flex items-center justify-center border border-[#0E4C45] rounded-full hover:bg-[#0E4C45] hover:text-white transition">
            <ArrowLeft />
          </button>
          <button className="next-btn w-10 h-10 flex items-center justify-center border border-[#0E4C45] rounded-full hover:bg-[#0E4C45] hover:text-white transition">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
