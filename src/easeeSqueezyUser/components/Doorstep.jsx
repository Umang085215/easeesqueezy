import React from "react";
import doorstepData from "../data/products/doorstep";
import DoorCard from "./doorsteps/DoorCard";

const Doorstep = () => {
  return (
    <div className="doorstep z-30">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="marquee-tag">
              <ul className="flex gap-x-6 mb-sm [&_li_a:hover]:text-primary [&_li_a]:text-h1 [&_li_a]:font-bold animate-marquee whitespace-nowrap">
                {doorstepData.map((item, index) => (
                  <li key={index}>
                    <DoorCard juice={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doorstep;
