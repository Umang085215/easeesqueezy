import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import TestomonialCard from "./TestomonialCard";

const testimonials = [
  {
    id: 1,
    name: "Shubham P",
    feedback:
      "Vestibulum faucibus imperdiet consectetur. Nulla facilisi. Praesent viverra nulla eu eros tincidunt, vel sagittis odio laoreet. Curabitur lacinia.",
    image: "/images/user.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Umang K",

    feedback:
      "Nascetur ridiculus mus. Phasellus viverra euismod nisl quis consectetur. Pellentesque porta, orci a consecteturscelerisque, augue orci pulvinar.",
    image: "/images/user.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: "Jatin P",

    feedback:
      "Augue diam ac velit. Suspendisse turpis magna, condimentum non tincidunt vitae, finibus in justo. Mauris suscipit nunc sit amet aliquam efficitur.",
    image: "/images/user.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Vineet K",

    feedback:
      "Augue diam ac velit. Suspendisse turpis magna, condimentum non tincidunt vitae, finibus in justo. Mauris suscipit nunc sit amet aliquam efficitur.",
    image: "/images/user.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Jigar U",

    feedback:
      "Augue diam ac velit. Suspendisse turpis magna, condimentum non tincidunt vitae, finibus in justo. Mauris suscipit nunc sit amet aliquam efficitur.",
    image: "/images/user.jpg",
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-yellow-50 py-12 ">
      <div className="container px-6 sm:px-12 mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0E4C45] px-3 mb-10">
          What Our Happy Customers Are Saying
        </h1>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testomonial) => (
            <SwiperSlide key={testomonial.id}>
              <TestomonialCard testomonial={testomonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
