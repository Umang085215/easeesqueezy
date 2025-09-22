import React, { useState } from "react";
import { Menu } from "lucide-react";
import { IoMdNotificationsOff } from "react-icons/io";
import { FcAdvertising } from "react-icons/fc";

const Navbar = ({ toggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="relative flex items-center justify-between p-3 bg-white shadow">
        <button onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">User </h1>
          <div onClick={() => setMenuOpen((prev) => !prev)}>
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-[#003b19] ml-3"
            />
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-full right-0 w-full md:w-[300px] bg-white text-[#003b19] shadow-md py-4 px-6  border border-gray-200 z-10">
            <ul className="flex flex-col gap-4 font-bold">
              <li className="hover:text-blue-600 cursor-pointer flex items-center gap-5">
                <IoMdNotificationsOff /> Notifications
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-center gap-5">
                <FcAdvertising /> Logout
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
