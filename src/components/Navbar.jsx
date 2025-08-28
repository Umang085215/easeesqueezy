import React from "react";

const Navbar = () => {
  return (
    <>
      <section>
        {/* Logo & Navbar */}
        <header className="absolute top-6 left-6 flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Easee Squeezy"
            className="h-10 md:h-14"
          />
        </header>

        <button className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-md">
          <span className="block w-6 h-0.5 bg-purple-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-purple-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-purple-600"></span>
        </button>
      </section>
    </>
  );
};

export default Navbar;
