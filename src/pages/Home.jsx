import React from "react";
import Hero from "../components/Hero";
import InquirySection from "../components/InquirySection";
import Footer from "../components/Footer";
import ProductShowcase from "../components/ProductShowCase";
import About from "./About";
import Doorstep from "../components/Doorstep";

const Home = () => {
  return (
    <>
      <Hero />
      <Doorstep />
      <About />
      <ProductShowcase />
      <InquirySection />
      <Footer />
    </>
  );
};

export default Home;
