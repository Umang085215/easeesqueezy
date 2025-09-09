import React from "react";
import Hero from "../components/Hero";
import InquirySection from "../components/InquirySection";
import ProductShowcase from "../components/ProductShowCase";
import About from "./About";
import Doorstep from "../components/Doorstep";
import Testimonial from "../components/Testimonial";
import AboutContent from "../components/AboutContent";

const Home = () => {
  return (
    <>
      <Hero />
      <Doorstep />
      <AboutContent />
      {/* <About /> */}
      <ProductShowcase />
      <Testimonial />
      <InquirySection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
