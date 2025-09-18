import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutIcons from "../data/products/aboutIcons";
import natureImg from "../../assets/about/natural.svg";
import aboutImg from "../../assets/about/c5.png";
import Features from "./Features";

const AboutContent = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative container py-8 sm:py-16 px-6 sm:px-12 overflow-hidden mx-auto"
    >
      <motion.img
        src={natureImg}
        alt="Fruit decoration"
        className=" absolute top-[0.5rem] right-40 w-16 sm:top-[2rem] sm:right-20 md:w-[8rem]"
        style={{ y }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <motion.div
          className="relative flex justify-center order-1 md:order-2 md:col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img src={aboutImg} alt="About Easee Squeezy" />
        </motion.div>
        <motion.div
          className="order-2 md:order-1 md:col-span-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="about-title text-4xl sm:text-5xl lg:text-6xl font-[700] text-gray-900 mb-8 leading-[1] sm:leading-[1.5]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Refresh Naturally with <br />
            <span className="text-[#003a19]">Easee Squeezy</span>
          </motion.h2>
          <motion.h4
            className="text-lg sm:text-xl leading-loose font-semibold"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            We knew there had to be a better way.
          </motion.h4>
          <motion.p
            className="text-base leading-loose mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            Every sip from Easee Squeezy carries the full spectrum of nature’s
            goodness, vitamins, minerals, antioxidants, and enzymes — exactly as
            nature intended.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.3 }}
          >
            {aboutIcons.map((item, i) => (
              <motion.div
                key={i}
                className="p-4"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Features item={item} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <button
              className="hover:bg-yellow-400 bg-[#033f1d] text-white transition hover:text-black px-6 py-3 rounded-full font-semibold"
              onClick={() => navigate("/about")}
            >
              Know More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
