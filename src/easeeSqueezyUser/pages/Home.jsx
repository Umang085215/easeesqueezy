import React from "react";
import Hero from "../components/Hero";
import InquirySection from "../components/InquirySection";
import Doorstep from "../components/doorsteps/Doorstep";
import AboutContent from "../components/AboutContent";
import ProductShowcase from "../components/products/ProductShowCase";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Doorstep />
      <AboutContent />
      <ProductShowcase />
      <Testimonial />
      <InquirySection />
    </>
  );
};

export default Home;
