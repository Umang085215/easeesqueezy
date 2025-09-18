import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/products/Testimonials.json";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    setTestimonialData(testimonials);
  }, []);
  console.log(testimonialData);
  return (
    <section className=" py-12">
      <div className="relative container w-full px-6 sm:px-12 mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-success px-3 mb-10">
          What Our Happy Customers Are Saying
        </h1>

        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          navigation={{
            nextEl: ".testimonial-next-btn",
            prevEl: ".testimonial-prev-btn",
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          loop
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          centeredSlides
          slidesPerView="auto"
          spaceBetween={0}
          preloadImages={false}
          lazy={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
