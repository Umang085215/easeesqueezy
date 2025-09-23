import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ChevronDown,
  ChevronRight,
  X,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import logo from "../../assets/adminImages/logo/new_logo.png";

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [catalogOpen, setCatalogOpen] = useState(true);

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
    <aside
      className={`fixed top-0 left-0 h-full z-40 bg-white text-black
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-20"}
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-2 border-b border-gray-500 min-h-[64px]">
        {isOpen ? (
          <span className="w-full flex items-center justify-center ">
            <img src={logo} alt="sidebar logo" className="w-36 h-12 m-0" />
          </span>
        ) : (
          <div className="w-24">
            <img src={logo} alt="sidebar logo" className="w-full m-0" />
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-1 hover:bg-gray-700 rounded"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className=" flex flex-col">
        <Link
          to="/admin/dashboard"
          className={`flex items-center  px-3 py-3  hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200 border-b border-gray-300
            ${
              ["/admin/dashboard", "/admin"].includes(location.pathname)
                ? "bg-blue-100 text-[#3f55f5]"
                : ""
            }
          `}
        >
          <span className="flex items-center text-md font-medium">
            <LayoutDashboard size={20} />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </span>
        </Link>
        {/* Catalog Menu */}
        <div>
          <button
            onClick={() => setCatalogOpen(!catalogOpen)}
            className="flex items-center justify-between w-full px-3 py-3 hover:bg-gray-100 hover:text-gray-500  transition-colors duration-200 border-b border-gray-300"
          >
            <span className="flex items-center text-md font-medium">
              <Package size={20} />
              {isOpen && <span className="ml-3">Catalog</span>}
            </span>
            {isOpen && (
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  catalogOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {catalogOpen && isOpen && (
            <div className="flex flex-col">
              <Link
                to="/admin/products"
                className={`px-2 py-3 text-sm hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200 border-b border-gray-200
                  ${
                    location.pathname === "/admin/products"
                      ? "bg-blue-100 text-[#6777ef]"
                      : ""
                  }
                `}
              >
                <span className="flex items-center pl-5">
                  <ChevronRight size={20} />
                  <span className="ml-2">Products</span>
                </span>
              </Link>
              <Link
                to="/admin/categories"
                className={`px-2 py-3 text-sm hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200 border-b border-gray-200
                  ${
                    location.pathname === "/admin/categories"
                      ? "bg-blue-100 text-[#6777ef]"
                      : ""
                  }
                `}
              >
                <span className="flex items-center pl-5">
                  <ChevronRight size={20} />
                  <span className="ml-2">Category</span>
                </span>
              </Link>
              <Link
                to="/admin/manufacture"
                className={`px-2 py-3 text-sm hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200 border-b border-gray-200
                  ${
                    location.pathname === "/admin/manufacture"
                      ? "bg-blue-100 text-[#6777ef]"
                      : ""
                  }
                `}
              >
                <span className="flex items-center pl-5">
                  <ChevronRight size={20} />
                  <span className="ml-2">Manufacture</span>
                </span>
              </Link>
            </div>
          )}
        </div>
        <div
          className="flex items-center  px-3 py-3  hover:bg-red-200 cursor-pointer  transition-colors duration-200 border-b border-gray-300 text-danger font-bold"
          onClick={handleLogout}
        >
          <span className="flex items-center text-md font-extrabold">
            <LogOut size={20} />
            {isOpen && <span className="ml-3">Logout</span>}
          </span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
