import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, CircleUserRound, Menu, X } from "lucide-react";
import StickyHeader from "../components/StickyHeader";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-[#003c17] shadow-md fixed top-0 left-0 w-full z-50">
      <StickyHeader />
      <div className="container m-auto py-2 px-6 sm:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          className="headerLogo cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/new_logo.png"
            alt="Easee Squeezy"
            loading="lazy"
            className="w-24 max-w-full h-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
          <Link
            to="/"
            className="transition delay-150 duration-300 ease-in-out hover:text-[#fd9b03] "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition delay-150 duration-300 ease-in-out hover:text-[#fd9b03]"
          >
            About-Us
          </Link>
          <Link
            to="/juices"
            className="transition delay-150 duration-300 ease-in-out hover:text-[#fd9b03]"
          >
            Juices & Fruit-Box
          </Link>
          <Link
            to="/"
            className="transition delay-150 duration-300 ease-in-out hover:text-[#fd9b03]"
            onClick={(e) => {
              e.preventDefault();
              navigate("/", { replace: false });
              setTimeout(() => {
                const el = document.getElementById("inquiry");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Right Content */}
        <div className="flex items-center gap-5">
          <button
            className="md:hidden "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-6 space-y-4 text-md font-[500]">
          <button
            className="self-end"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
          <Link
            to="/"
            onClick={closeMenu}
            className="border-b-[1px] border-b-gray-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="border-b-[1px] border-b-gray-500"
          >
            About-Us
          </Link>
          <Link
            to="/juices"
            onClick={closeMenu}
            className="border-b-[1px] border-b-gray-500"
          >
            Juices & Fruit-Box
          </Link>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/", { replace: false });
              setTimeout(() => {
                const el = document.getElementById("inquiry");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
              setIsOpen(false);
            }}
            className="border-b-[1px] border-b-gray-500"
          >
            Contact
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
