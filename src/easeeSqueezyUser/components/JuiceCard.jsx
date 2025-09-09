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

//  <div
//       className={`card relative rounded-xl p-6 flex flex-col items-center justify-center text-white ${bg}`}
//     >
//       <img
//         src={img}
//         alt={title}
//         loading="lazy"
//         className="object-contain mb-0"
//       />
//       <h2 className="text-xl font-bold text-[#0e4c45]">{title}</h2>
//       <p className="text-sm mt-1 text-center text-[#0e4c45]">
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//       </p>
//     </div>
