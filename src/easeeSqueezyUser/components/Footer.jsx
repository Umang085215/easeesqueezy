import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, MailCheck, ChevronsRight } from "lucide-react";
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
    <footer className="bg-success text-white pt-12 pb-6 px-6 sm:px-12">
      <div className=" container-fluid mx-auto  flex flex-col md:flex-row gap-6">
        <div className="flex-[1.8]">
          <h3 className="font-bold text-2xl mb-2">Easeé Squéézy </h3>
          <span className="w-24 h-[2px] bg-orange-500 block mb-4"></span>

          <p className="mb-2">
            At Easee Squeezy, we believe juice should be more than a drink. It
            should be a daily ritual of health, vitality, and nature’s magic.
          </p>
          <p className="mt-5 mb-2">Fssai Registration ID: 20725038004016</p>
          <hr className="hrspacing" />
          <div className="social-media pt-3">
            <h3 className="font-bold text-2xl mb-2">Join Our Community</h3>
            <span className="w-24 h-[2px] bg-orange-500 block mb-4"></span>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/share/15wLPs1mcb/?mibextid=wwXIfr"
                target="blank"
                className="px-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/easee_squeezy"
                target="blank"
                className="px-2"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-2xl mb-2">Overview</h3>
          <span className="w-24 h-[2px] bg-orange-500 block mb-4"></span>
          <ul className="space-y-2">
            <li className="">
              <Link to="/" className="hover:text-[#f9aa01] flex">
                <ChevronsRight /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#f9aa01] flex">
                <ChevronsRight /> About Us
              </Link>
            </li>
            {/* <li>
              <Link to="/terms-service" className="hover:text-[#f9aa01] flex">
                <ChevronsRight /> Terms & Service
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#f9aa01] flex">
                <ChevronsRight /> Privacy Policy
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-2xl mb-2">Our Juices</h3>
          <span className="w-24 h-[2px] bg-orange-500 block mb-4"></span>
          <ul className="space-y-2">
            <li>
              <Link to="/juices" className="hover:text-[#f9aa01] flex">
                <ChevronsRight /> Juices & Fruit-Box
              </Link>
            </li>
            <li>
              <Link to="/juices" className="hover:text-[#f9aa01] flex">
                <ChevronsRight /> Blissful fruit box
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-[1.8]">
          <h3 className="font-bold text-2xl mb-2">Visit Our Office</h3>
          <span className="w-24 h-[2px] bg-orange-500 block mb-4"></span>
          <div className="d-flex pt-4">
            <div className="flex items-start gap-3">
              <MapPin />
              <p className="location text-dark">
                <span className="fw-bold">
                  601, Shivalik Satyamev, near Vakil Saheb Bridge
                </span>
                <br />
                South Bopal, Ambli, Ahmedabad, Gujarat - 380058
              </p>
            </div>
          </div>
          <hr className="hrspacing" />
          <div className="d-flex pt-4">
            <div className="flex items-start gap-3 mb-3">
              <Phone />
              <p className="location text-dark">
                <span className="fw-bold">+91 84900-91122</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <MailCheck />
              <p className="location text-dark">
                <span className="fw-bold">contact@easeesqueezy.com</span>
              </p>
            </div>
          </div>
          <hr className="hrspacing" />
          <div className="d-flex pt-4">
            <div className="font-2 float-left display-none display-none-md text-dark"></div>
            <a href="tel:918490091122">
              <p className="w-max flex gap-3 px-2 py-2 bg-orange-500 rounded-full text-white">
                <Phone /> Let's Connect - +91 84900-91122
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl border border-dashed rounded-lg sm:rounded-full mx-auto px-3 py-6 mt-5 sm:mt-10 text-center ">
        <h3 className="font-extrabold  text-4xl mb-5">
          Sign Up Now To Get Coupon For Purchase
        </h3>
        <p className="text-xl mb-5">
          Sign up and get coupon for purchase.Earn points & Redeem the rewards.
          It’s that easy.
        </p>
        <div className="bg-white flex flex-row   px-1 py-1 rounded-full overflow-hidden text-sm w-full max-w-xl mx-auto sm:gap-0 gap-2">
          <input
            type="email"
            name="newsEmail"
            value={newsEmail}
            onChange={(e) => setNewsEmail(e.target.value)}
            required
            placeholder="Enter your email..."
            className="flex-1 px-2 py-1 text-black outline-none rounded-full sm:rounded-l-full sm:rounded-r-none"
          />
          <button
            onClick={handleNewsLetter}
            className="w-max px-2 py-[0.5rem] sm:px-6 sm:py-[1rem] bg-orange-500 text-white flex items-center justify-center rounded-full  "
          >
            <strong className="hidden sm:block">Subscribe</strong>
            <IoMdArrowRoundForward size={16} />
          </button>
        </div>

        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
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
        Design and Develop by{" "}
        <a href="https://www.ecodedash.com/" target="_blank">
          Ecode Dash Pvt Ltd
        </a>
      </div>
    </footer>
  );
};

export default Footer;
