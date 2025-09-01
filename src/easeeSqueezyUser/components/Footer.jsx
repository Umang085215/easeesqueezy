import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const [newsEmail, setNewsEmail] = useState("");
  const [newsLetterMsg, setNewsLetterMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleNewsLetter = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsEmail.trim()) {
      setError(" Email is required");
      return;
    }
    if (!emailRegex.test(newsEmail)) {
      setError(" Please enter a valid email address");
      return;
    }
    setError("");

    try {
      const response = await fetch(
        "https://easeesqueezy.com/easeesqueezy_backend/public/api/admin/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsEmail }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setNewsLetterMsg(
          "🎉 Thank you for subscribing! You’ll start receiving updates soon 🤗"
        );
        setShowPopup(true);
        setNewsEmail("");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <footer className="bg-[#0E4C45] text-white pt-24 pb-6">
      <div className="max-w-7xl container mx-auto px-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <span className="w-12 h-[2px] bg-orange-500 block mb-4"></span>
          <p className="text-sm mb-3">
            Shivalik Satyamev, 601, T Junction, near Vakil Saheb Bridge, South
            Bopal, Ambli, Ahmedabad, Gujarat - 380058
          </p>
          <div className="flex items-center gap-2 mb-2">
            <FaPaperPlane className="text-2xl bg-white p-1 text-black rounded-full" />
            <span className="text-sm">easeesqueezy@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-2xl bg-white p-1 text-black rounded-full" />
            <span className="text-sm">+91 84900-91122</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Useful Links</h3>
          <span className="w-12 h-[2px] bg-orange-500 block mb-4"></span>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Blogs</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Drink Special</h3>
          <span className="w-12 h-[2px] bg-orange-500 block mb-4"></span>
          <ul className="space-y-2 text-sm">
            <li>Juices</li>
            <li>Smoothies</li>
            <li>Shots</li>
            <li>Soft Drinks</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Follow Us Now</h3>
          <span className="w-12 h-[2px] bg-orange-500 block mb-4"></span>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.facebook.com/share/15wLPs1mcb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaFacebookF /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/easee_squeezy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-[1.5]">
          <h3 className="font-semibold text-lg mb-2">NEWSLETTER</h3>
          <span className="w-12 h-[2px] bg-orange-500 block mb-4"></span>
          <p className="text-sm mb-4">
            Sign up and get coupon for purchase.
            <br />
            Earn points & Redeem the rewards. It’s that easy.
          </p>
          <div className="flex flex-col sm:flex-row  overflow-hidden text-sm w-full max-w-md mx-auto sm:gap-0 gap-2">
            <input
              type="email"
              name="newsEmail"
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              required
              placeholder="Enter your email..."
              className="flex-1 px-3 py-2 text-black outline-none rounded-full sm:rounded-l-full sm:rounded-r-none"
            />
            <button
              onClick={handleNewsLetter}
              className="flex-1 py-2 bg-orange-500 text-white flex items-center justify-center rounded-full sm:rounded-r-full sm:rounded-l-none"
            >
              <IoMdArrowRoundForward className="mr-1" />
              <strong>Subscribe</strong>
            </button>
          </div>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-green-100 text-black p-12 rounded-lg shadow-lg text-center max-w-md w-full">
            <h2 className="text-2xl font-extrabold mb-2">
              ✅ Subscription Successful
            </h2>
            <p className="text-lg ">{newsLetterMsg}</p>
          </div>
        </div>
      )}

      <div className="text-center text-sm text-gray-200 mt-10 border-t border-gray-600 pt-4">
        © 2025 Easse Squeezy All Rights Reserved. <br />
        Design and Develop by Ecode Dash
      </div>
    </footer>
  );
};

export default Footer;
