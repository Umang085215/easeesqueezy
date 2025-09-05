import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, CircleUserRound } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white text-[#003c17]">
      <div className="container  m-auto py-2 px-6 sm:px-12  flex items-center justify-between">
        <div
          className="headerLogo cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/new_logo.png"
            alt="Easee Squeezy"
            className="w-24 max-w-full h-auto"
          />
        </div>
        <div className="flex items-center gap-6 font-bold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/juice">Juices</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="rightContent flex items-center gap-5 cursor-pointer">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
          <CircleUserRound />
        </div>
      </div>
    </section>
  );
};

export default Header;
