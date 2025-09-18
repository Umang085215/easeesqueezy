import React from "react";
import { motion } from "framer-motion";
import Features from "../components/Features";
import aboutIcons from "../data/products/aboutIcons";
import jm from "../../assets/whyeasee/jm.jpg";
import cp from "../../assets/whyeasee/cp.jpg";
import natureImg from "../../assets/about/natural.svg";
import aboutImg from "../../assets/about/c5.png";

const About = () => {
  return (
    <>
      <section className=" relative">
        <div className="relative container py-8 sm:py-16 px-6 sm:px-12 md:px-16 overflow-hidden mx-auto">
          <h2 className="text-center about-title text-4xl sm:text-5xl lg:text-6xl font-[700] text-gray-900 mb-8 leading-[1.2]">
            Meet the Faces Behind <br />
            <span className="text-[#003a19]">Easeé Squéézy</span>
          </h2>

          <motion.div
            className="max-w-5xl mx-auto my-10  shadow-lg rounded-lg "
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={jm}
                  alt="Placeholder image"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <p className="text-gray-600 mb-4">
                  At <b>Easee Squeezy</b>, our story begins with a personal
                  struggle, the search for real nutrition . Like many, we tried
                  countless juices that promised health but delivered mostly
                  sugar and little nourishment. Most commercial cold pressed
                  juices extract flavor but leave behind much of the nutrition,
                  giving you sweetness without true wellness. We knew there had
                  to be a better way.
                </p>
                <h3>Jyoti M</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto my-10  shadow-lg rounded-lg "
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <p className="text-gray-600 mb-4">
                  But we didn’t stop there. We reimagined juice beyond the
                  basics of orange, pineapple, or sweet lime. By blending unique
                  combinations of fruits, vegetables, and herbs, we’ve crafted
                  juices that don’t just taste refreshing, they target real
                  wellness needs: boosting immunity, balancing hormones, aiding
                  digestion, supporting skin health, and fueling your energy
                  naturally. At Easee Squeezy, we believe juice should be more
                  than a drink. It should be a daily ritual of health, vitality,
                  and nature’s magic.
                </p>
                <h3>Charlie P</h3>
              </div>

              <div className="md:w-1/2">
                <img
                  src={cp}
                  alt="Placeholder image"
                  className=" object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative container py-8 sm:py-16 px-6 sm:px-12 overflow-hidden mx-auto">
        <motion.img
          src={natureImg}
          alt="Fruit decoration"
          className=" absolute top-[0.5rem] right-40 w-16 sm:top-[2rem] sm:right-20 md:w-[8rem]"
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
              goodness, vitamins, minerals, antioxidants, and enzymes — exactly
              as nature intended.
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
