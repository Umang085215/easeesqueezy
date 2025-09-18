import React from "react";
import juice1 from "../../assets/juices/juice1.png";
import juice2 from "../../assets/juices/juice2.png";
import juice3 from "../../assets/juices/juice3.png";
import juice4 from "../../assets/juices/juice4.png";
import juice5 from "../../assets/juices/juice5.png";
import juice6 from "../../assets/juices/juice6.png";

const Doorstep = () => {
  return (
    <div className="doorstep z-30">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="marquee-tag">
              <ul className="flex gap-x-6 mb-sm [&_li_a:hover]:text-primary [&_li_a]:text-h1 [&_li_a]:font-bold animate-marquee whitespace-nowrap">
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice1}
                      alt="Experience"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold   ">
                      DELIVERED TO YOUR DOORSTEP DAILY
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice2}
                      alt="Outlets"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold  ">
                      FRESH FRUITS
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice3}
                      alt="Products"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold ">
                      RICH IN NUTRITION
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice4}
                      alt="Cities"
                      loading="lazy"
                      className="w-[65px] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold ">
                      NATURAL FLAVOR
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice5}
                      alt="Cities"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold">
                      THIRST SATISFIER
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice6}
                      alt="Products"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold ">
                      NATURAL
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice1}
                      alt="Products"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold ">
                      NATURE’s GOODNESS
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      src={juice2}
                      alt="Products"
                      loading="lazy"
                      className="w-\[65px\] h-[70px] -mt-4 -mb-4"
                    />
                    <span className="text-white text-2xl font-extrabold ">
                      REFRESHING
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doorstep;
