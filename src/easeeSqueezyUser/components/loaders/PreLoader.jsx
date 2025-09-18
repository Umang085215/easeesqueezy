import React, { useState, useEffect } from "react";
import i1 from "../../../assets/fruitIcons/o1.png";
import i2 from "../../../assets/fruitIcons/o2.png";
import i3 from "../../../assets/fruitIcons/m4.png";

const fruits = [i1, i2, i3];

const PreLoader = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fruits.length);
    }, 700);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at center, #e1f58c, #758e18)",
      }}
    >
      <img
        key={index}
        src={fruits[index]}
        alt="Fruit Loader"
        className="w-24 h-24 animate-bounce transition-opacity duration-500"
      />
    </div>
  );
};

export default PreLoader;
