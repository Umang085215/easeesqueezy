import React from "react";

const DoorCard = ({ juice }) => {
  return (
    <div className="flex items-center">
      <img
        src={juice.img}
        alt="Experience"
        loading="lazy"
        className="w-\[65px\] h-[70px] -mt-4 -mb-4"
      />
      <span className="text-white text-2xl font-extrabold   ">
        {juice.text}
      </span>
    </div>
  );
};

export default DoorCard;
