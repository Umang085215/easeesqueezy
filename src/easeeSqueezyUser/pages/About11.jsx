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
