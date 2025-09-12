import React from "react";
import { motion } from "framer-motion";

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
                  src="/images/whyeasee/jm.webp"
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
                  src="/images/whyeasee/cp.webp"
                  alt="Placeholder image"
                  className=" object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className=" relative">
        <div className="relative container py-8 sm:py-16 px-6 sm:px-12 md:px-16 overflow-hidden mx-auto">
          <img
            src="/images/about/natural.svg"
            alt="Fruit decoration"
            className="absolute top-[0.5rem] right-40 w-24 sm:top-[2rem] sm:right-20  md:w-[8rem] "
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mx-auto">
            <div className="relative flex justify-center order-1 md:order-2 md:col-span-1">
              <img src="/images/about/c5.webp" alt="About Easee Squeezy" />
            </div>

            <div className="order-2 md:order-1 md:col-span-2">
              <h2 className="about-title text-4xl sm:text-5xl lg:text-6xl font-[700] text-gray-900 mb-8 leading-[1.2]">
                Refresh Naturally with <br />
                <span className="text-[#003a19]">Easee Squeezy</span>
              </h2>
              <h4 className="text-lg sm:text-xl leading-loose font-semibold">
                We knew there had to be a better way.
              </h4>
              <p className="text-base leading-loose mb-10">
                Every sip from Easee Squeezy carries the full spectrum of
                nature’s goodness, vitamins, minerals, antioxidants, and enzymes
                — exactly as nature intended.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left mb-10">
                <div>
                  <img
                    src="/images/about/i1.webp"
                    alt="Completely Healthy"
                    className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                  />
                  <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                    Nutrient-Rich
                  </p>
                  <p className="text-gray-700">
                    Packed with vital nutrients to fuel your everyday health.
                  </p>
                </div>

                <div>
                  <img
                    src="/images/about/i2.webp"
                    alt="Fresh Organic Fruits"
                    className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                  />
                  <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                    Pure & Preservative-Free
                  </p>
                  <p className="text-gray-700">
                    Nothing artificial—just clean, natural, and honest
                    ingredients.
                  </p>
                </div>

                <div>
                  <img
                    src="/images/about/i3.webp"
                    alt="Serving Hygenic"
                    className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                  />
                  <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                    Supports Digestion & Detox
                  </p>
                  <p className="text-gray-700">
                    Cleanses your system and aids healthy digestion naturally.
                  </p>
                </div>

                <div>
                  <img
                    src="/images/about/i4.webp"
                    alt="Serving Hygenic"
                    className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                  />
                  <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                    Instant Natural Energy
                  </p>
                  <p className="text-gray-700">
                    Feel refreshed and energized with every nutritious sip.
                  </p>
                </div>

                <div>
                  <img
                    src="/images/about/i5.webp"
                    alt="Serving Hygenic"
                    className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                  />
                  <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                    Freshly Cold-Pressed Daily
                  </p>
                  <p className="text-gray-700">
                    Pressed fresh each day to lock in nutrients.
                  </p>
                </div>
                <div>
                  <img
                    src="/images/about/i6.webp"
                    alt="Serving Hygenic"
                    className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                  />
                  <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                    Sugar-Free
                  </p>
                  <p className="text-gray-700">
                    Naturally sweet, with zero added sugars or guilt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
