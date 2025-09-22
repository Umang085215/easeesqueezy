import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, LogOut, UserRound } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        console.warn("No token found, user already logged out.");
        return;
      }
      const response = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      } else {
        console.error("Logout failed:", await response.json());
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

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
          <div className="absolute top-full right-0 w-full rounded-md md:w-[300px] bg-white text-[#003b19] shadow-md py-4 px-6  border border-gray-200 z-10">
            <ul className="flex flex-col gap-3 font-bold">
              <li>
                <div
                  className=" cursor-pointer flex items-center gap-5"
                  onClick={() => {
                    navigate("/admin/profile");
                    setMenuOpen(false);
                  }}
                >
                  <UserRound size={20} />
                  My Profile
                </div>
              </li>
              <li>
                <div
                  className="text-red-500 hover:text-red-600 cursor-pointer flex items-center gap-5"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  <LogOut size={20} /> Logout
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
