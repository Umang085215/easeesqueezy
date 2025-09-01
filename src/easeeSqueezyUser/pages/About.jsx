import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Features from "../components/Features";

const About = () => {
  return (
    <>
      <section className="bg-[#FDF4B5] pb-20  relative">
        <div className="relative max-w-7xl  py-16 px-6 md:px-16 overflow-hidden mx-auto">
          <img
            src="/images/f5.png"
            alt="Fruit decoration"
            className="absolute top-6 left-6 w-16 md:w-20 transform rotate-[150deg]"
          />

          <img
            src="/images/f5.png"
            alt="Fruit decoration"
            className="absolute top-6 right-20 w-16 md:w-20"
          />
          <img
            src="/images/f5.png"
            alt="Fruit decoration"
            className="absolute bottom-2 right-10 w-16 md:w-20 transform rotate-[45deg]"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className=" relative flex justify-center">
              <img src="/images/c3.png" alt="About Easee Squeezy" />
              <img
                src="/images/c4.png"
                alt="About Easee Squeezy"
                className="absolute left-0 -bottom-5 sm:-bottom-10 w-36 sm:w-48"
              />
            </div>
            <div className="relative text-[#134B34]">
              <span className="absolute left-[10%] bg-[#C0E474] text-white text-sm px-3 py-1 rounded-md font-bold inline-block transform rotate-[20deg]">
                STORY
              </span>
              <div className="flex  items-center ">
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-red-600">
                  ABOUT
                </h2>
                <img
                  src="/images/about_es.png"
                  alt="easeesqueezy"
                  width="230px"
                  className="pl-2"
                />
              </div>

              <p className="mt-2 text-base leading-relaxed font-semibold">
                At Easee Squeezy, our story begins with a personal struggle, the
                search for real nutrition .
              </p>

              <p className="mt-4 text-base leading-relaxed">
                Like many, we tried countless juices that promised health but
                delivered mostly sugar and little nourishment. Most commercial
                cold pressed juices extract flavor but leave behind much of the
                nutrition, giving you sweetness without true wellness.
              </p>

              <h4 className="mt-2 text-base leading-relaxed font-semibold">
                We knew there had to be a better way.
              </h4>

              <p className="mt-2 text-base leading-relaxed">
                That’s why we set out on a mission to reinvent juice. Through
                careful research, innovative techniques, and a deep respect for
                nature, we discovered a way to extract juice without stripping
                away its vital nutrients. Every sip from Easee Squeezy carries
                the full spectrum of nature’s goodness, vitamins, minerals,
                antioxidants, and enzymes — exactly as nature intended.
              </p>
              <p className="mt-2 text-base leading-relaxed">
                But we didn’t stop there. We reimagined juice beyond the basics
                of orange, pineapple, or sweet lime. By blending unique
                combinations of fruits, vegetables, and herbs, we’ve crafted
                juices that don’t just taste refreshing, they target real
                wellness needs: boosting immunity, balancing hormones, aiding
                digestion, supporting skin health, and fueling your energy
                naturally.
              </p>

              <h4 className="mt-2 text-base leading-relaxed font-semibold">
                At Easee Squeezy, we believe juice should be more than a drink.
                It should be a daily ritual of health, vitality, and nature’s
                magic.
              </h4>
              <button
                onClick={() => {
                  const inquiry = document.getElementById("inquiry");
                  if (inquiry) {
                    inquiry.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-6 flex items-center gap-2 bg-[#134B34] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#0f3827] transition"
              >
                Share Your Thoughts <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <Features />
      </section>
    </>
  );
};

export default About;
