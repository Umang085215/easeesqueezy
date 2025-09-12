import React from "react";

const JuiceCard = ({ img, title, des, bg }) => {
  return (
    <div
      className={`${bg} rounded-2xl p-6 flex flex-col items-center text-center w-64 shadow-md h-[330px]`}
    >
      <div className="relative  h-52 flex items-center justify-center">
        <div className="absolute w-40 h-40 bg-pink-100 rounded-full"></div>
        <img
          src={img}
          alt="Blueberry Juice"
          className="relative z-10 h-52 object-contain"
        />
      </div>
      <h3 className="mt-2 pb-2 text-lg font-bold text-green-900 leading-snug">
        {title}
      </h3>
      <p className="   font-bold  leading-snug">{des}</p>
    </div>
  );
};

export default JuiceCard;
