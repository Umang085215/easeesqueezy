import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
const StickyHeader = () => {
  return (
    <section className="bg-yellow-400 text-white overflow-hidden">
      <div className="container m-auto py-2 pr-6 sm:pr-12 flex items-center justify-between">
        <div className="relative w-[50%] sm:w-[80%] overflow-hidden">
          <div className="flex whitespace-nowrap   animate-marquee ">
            <p className=" text-base leading-[1.5] font-bold font-[Manrope,sans-serif]">
              Welcome to Easee Squeezy – Where Freshness Meets Flavor! Discover
              our range of freshly squeezed, nutrient-packed juices, made with
              love and the finest natural ingredients. Sip your way to better
              health!
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="rightContent flex items-center gap-5 px-3 py-1 cursor-pointer rounded-full bg-orange-500 text-white">
          <Link to="/contact" className="flex items-center gap-1">
            <Phone size={14} />
            +91 84900-91122
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StickyHeader;
