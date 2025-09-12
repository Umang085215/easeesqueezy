import React, { useState, useEffect } from "react";

const fruits = [
  "/images/fruitIcons/o1.webp",
  "/images/fruitIcons/o2.webp",
  "/images/fruitIcons/m4.webp",
];

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
      className="flex flex-col justify-center items-center h-screen w-screen"
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
