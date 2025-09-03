import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="absolute top-6 left-6 z-30 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/images/new_logo.png"
          alt="Easee Squeezy"
          className="w-36 max-w-full h-auto"
        />
      </div>
    </>
  );
};

export default Navbar;
