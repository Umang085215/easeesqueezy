import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Aakash P",
    feedback:
      "I absolutely love Easee Squeezy juices! The flavors are always fresh, and I can tell they use real fruits without any added preservatives. It’s become my daily energy booster.",
    image: "/images/user.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Sanket K",

    feedback:
      "Ordering from Easee Squeezy has been such a pleasant experience. The delivery is quick, the bottles are neatly packed, and the mango juice tastes exactly like biting into a fresh mango.",
    image: "/images/user.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: "Swati P",

    feedback:
      "As someone who avoids sugary drinks, I’m so glad I found this service. Their cold-pressed juices taste natural and keep me refreshed after a workout. Highly recommend!  ",
    image: "/images/user.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Yash K",
    feedback:
      "Easee Squeezy makes healthy living simple. The kiwi blend is my favorite—it’s tangy, refreshing, and feels like a treat without the guilt.",
    image: "/images/user.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Rutvika U",

    feedback:
      "I ordered a variety pack to try different flavors, and every single one was delicious. My kids also loved the orange juice—finally, a healthy option they genuinely enjoy.",
    image: "/images/user.jpg",
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <section className=" py-12">
      <div className="relative container w-full px-6 sm:px-12 mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0E4C45] px-3 mb-10">
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
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
          // slidesPerView="auto"
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="w-[250px]">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
