import React from "react";

const Features = ({ item }) => {
  return (
    <div>
      <img
        src={item.img}
        alt={item.title}
        className="w-20 sm:w-[3rem] mb-2 mx-auto md:mx-0"
      />
      <p className="text-lg sm:text-xl font-bold text-[#033f1d] mb-2">
        {item.title}
      </p>
      <p className="text-gray-700">{item.desc}</p>
    </div>
  );
};

export default Features;
