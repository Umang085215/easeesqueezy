// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Features from "../components/Features";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <section className=" relative">
//         <div className="relative container py-8 sm:py-16 px-6 sm:px-12 md:px-16 overflow-hidden mx-auto">
//           <img
//             src="/images/natural.svg"
//             alt="Fruit decoration"
//             className="absolute top-[0.5rem] right-40 w-16 sm:top-[2rem] sm:right-20  md:w-[8rem] natural-ingredients"
//           />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mx-auto">
//             {/* Right side image comes first on mobile */}
//             <div className="relative flex justify-center order-1 md:order-2 md:col-span-1">
//               <img src="/images/c5.png" alt="About Easee Squeezy" />
//             </div>

//             {/* Left side text spans 2 cols on desktop */}
//             <div className="order-2 md:order-1 md:col-span-2">
//               <h2 className="about-title text-4xl sm:text-5xl lg:text-6xl font-[500] text-gray-900 mb-8 leading-[1.2]">
//                 Refresh Naturally with <br />
//                 <span className="text-red-600">Easee Squeezy</span>
//               </h2>
//               <h4 className="text-lg sm:text-xl leading-loose font-semibold">
//                 We knew there had to be a better way.
//               </h4>
//               <p className="text-base leading-loose mb-10">
//                 Every sip from Easee Squeezy carries the full spectrum of
//                 nature’s goodness, vitamins, minerals, antioxidants, and enzymes
//                 — exactly as nature intended.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left mb-10">
//                 <div>
//                   <img
//                     src="/images/about/i1.png"
//                     alt="Completely Healthy"
//                     className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0 filter brightness-0"
//                   />
//                   <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
//                     Nutrient-Rich
//                   </p>
//                   <p className="text-gray-700">
//                     Packed with vital nutrients to fuel your everyday health.
//                   </p>
//                 </div>

//                 <div>
//                   <img
//                     src="/images/about/i2.png"
//                     alt="Fresh Organic Fruits"
//                     className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
//                   />
//                   <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
//                     Pure & Preservative-Free
//                   </p>
//                   <p className="text-gray-700">
//                     Nothing artificial—just clean, natural, and honest
//                     ingredients.
//                   </p>
//                 </div>

//                 <div>
//                   <img
//                     src="/images/about/i3.png"
//                     alt="Serving Hygenic"
//                     className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
//                   />
//                   <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
//                     Supports Digestion & Detox
//                   </p>
//                   <p className="text-gray-700">
//                     Cleanses your system and aids healthy digestion naturally.
//                   </p>
//                 </div>

//                 <div>
//                   <img
//                     src="/images/about/i4.png"
//                     alt="Serving Hygenic"
//                     className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0 filter brightness-0"
//                   />
//                   <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
//                     Instant Natural Energy
//                   </p>
//                   <p className="text-gray-700">
//                     Feel refreshed and energized with every nutritious sip.
//                   </p>
//                 </div>

//                 <div>
//                   <img
//                     src="/images/about/i5.png"
//                     alt="Serving Hygenic"
//                     className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
//                   />
//                   <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
//                     Freshly Cold-Pressed Daily
//                   </p>
//                   <p className="text-gray-700">
//                     Pressed fresh each day to lock in nutrients.
//                   </p>
//                 </div>
//                 <div>
//                   <img
//                     src="/images/about/i6.png"
//                     alt="Serving Hygenic"
//                     className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0 filter brightness-0"
//                   />
//                   <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
//                     Sugar-Free
//                   </p>
//                   <p className="text-gray-700">
//                     Naturally sweet, with zero added sugars or guilt.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-center md:justify-start">
//                 <button
//                   className="hover:bg-yellow-400 bg-[#033f1d] text-white transition hover:text-black px-6 py-3 rounded-full font-semibold"
//                   onClick={() => navigate("/about")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <Features /> */}
//       </section>
//     </>
//   );
// };

// export default About;
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  // Parallax for the fruit decoration
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative">
      {/* Floating fruit with parallax */}
      {/* <motion.img
        src="/images/natural.svg"
        alt="Fruit decoration"
        className="absolute top-[0.5rem] right-40 w-16 sm:top-[2rem] sm:right-20 md:w-[8rem]"
        style={{ y }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      /> */}

      <img
        src="/images/natural.svg"
        alt="Fruit decoration"
        className="absolute top-[0.5rem] right-40 w-16 sm:top-[2rem] sm:right-20  md:w-[8rem] natural-ingredients"
      />

      <div className="relative container py-8 sm:py-16 px-6 sm:px-12 md:px-16 overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Right side image zoom-in */}
        <motion.div
          className="relative flex justify-center order-1 md:order-2 md:col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img src="/images/c5.png" alt="About Easee Squeezy" />
        </motion.div>

        {/* Left side text slides in from left */}
        <motion.div
          className="order-2 md:order-1 md:col-span-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Heading fade down */}
          <motion.h2
            className="about-title text-4xl sm:text-5xl lg:text-6xl font-[500] text-gray-900 mb-8 leading-[1.2]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Refresh Naturally with <br />
            <span className="text-red-600">Easee Squeezy</span>
          </motion.h2>

          {/* Subheading slide in from right */}
          <motion.h4
            className="text-lg sm:text-xl leading-loose font-semibold"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            We knew there had to be a better way.
          </motion.h4>

          {/* Paragraph fade-in */}
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

          {/* Features grid with staggered animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.3 }}
          >
            {[
              {
                img: "/images/about/i1.png",
                title: "Nutrient-Rich",
                desc: "Packed with vital nutrients to fuel your everyday health.",
              },
              {
                img: "/images/about/i2.png",
                title: "Pure & Preservative-Free",
                desc: "Nothing artificial—just clean, natural, and honest ingredients.",
              },
              {
                img: "/images/about/i3.png",
                title: "Supports Digestion & Detox",
                desc: "Cleanses your system and aids healthy digestion naturally.",
              },
              {
                img: "/images/about/i4.png",
                title: "Instant Natural Energy",
                desc: "Feel refreshed and energized with every nutritious sip.",
              },
              {
                img: "/images/about/i5.png",
                title: "Freshly Cold-Pressed Daily",
                desc: "Pressed fresh each day to lock in nutrients.",
              },
              {
                img: "/images/about/i6.png",
                title: "Sugar-Free",
                desc: "Naturally sweet, with zero added sugars or guilt.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-4"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
                />
                <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
                  {item.title}
                </p>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Button bounce in */}
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

export default About;
