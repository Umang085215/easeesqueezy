import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("");
        setIsError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setIsError(false);

    // --- Email validation ---
    if (!formData.email.trim()) {
      setResponseMessage("Email is required!");
      setIsError(true);
      setLoading(false);
      return;
    }

    // --- Phone validation ---
    if (!formData.phone.trim()) {
      setResponseMessage("Phone number is required!");
      setIsError(true);
      setLoading(false);
      return;
    }

    if (formData.phone.length !== 10) {
      setResponseMessage("Phone number must be exactly 10 digits!");
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://easeesqueezy.com/easeesqueezy_backend/public/api/admin/contact",
        formData
      );

      if (res.status === 201) {
        setResponseMessage(res.data.message);
        setIsError(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Failed to submit inquiry. Please try again.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="w-full pb-20 pt-10 bg-[#FFD965] bg-[url('/images/contactbg.png')] bg-center bg-no-repeat bg-blend-multiply"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-3 md:px-6 lg:px-8 pt-0 pb-16 sm:pt-[4rem] items-center">
        <div className="mobileForm bg-white mb-[-200px] shadow-lg rounded-lg px-8 pt-10 pb-20 order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#134B34] mb-2">
            We Value Your Feedback
          </h2>
          <p className="text-gray-600 mb-6">
            Your feedback helps us improve. <br /> Share your thoughts and we’ll
            respond promptly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="md:col-span-2 w-full p-3 border rounded-md bg-gray-100 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md bg-gray-100 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => {
                const onlyDigits = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, phone: onlyDigits });
              }}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength={10}
              required
              className="w-full p-3 border rounded-md bg-gray-100 outline-none"
            />

            <textarea
              name="message"
              placeholder="Write your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="md:col-span-2 w-full p-3 border rounded-md bg-gray-100 outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-[#FF9300] text-white font-bold py-3 rounded-md hover:bg-orange-600 transition"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>

          {responseMessage && (
            <p
              className={`mt-4 text-center font-semibold ${
                isError ? "text-red-600" : "text-green-700"
              }`}
            >
              {responseMessage} !☺️☺️
            </p>
          )}
        </div>

        <div className="relative pt-0 pb-12 sm:pt-[3rem] flex flex-col justify-between h-full order-1 lg:order-2">
          <div>
            <h3 className="order_title text-4xl font-extrabold text-[#CA9D15] mb-3">
              <i>FOR ORDER</i>
            </h3>
            <p className="text-gray-700 mb-6 max-w-md">
              Feel free to reach us on our WhatsApp and email address for order.
              <br /> Receive your order at your doorstep.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <div className="w-max flex items-center gap-3 bg-[#E8C044] px-4 py-2 rounded-full text-white font-bold shadow">
                <FaWhatsapp className="text-xl" />
                <span>+91 84900-91122</span>
              </div>
              <div className="w-max flex items-center gap-3 bg-[#E8C044] px-4 py-2 rounded-full text-white font-bold shadow">
                <FaEnvelope className="text-xl" />
                <span>easeesqueezy@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-[140px] right-[30px] lg:-bottom-[80px] lg:-right-[50px] flex items-end justify-center lg:justify-start">
            <img
              src="/images/contact1.png"
              alt="Oranges"
              className="w-40 md:w-48 lg:w-60 relative z-10 drop-shadow-2xl h-[230px] sm:h-[300px]"
            />
            <img
              src="/images/bottel3.png"
              alt="Juice Bottle"
              className="w-64 sm:w-32 md:w-44 lg:w-56 -ml-[6rem] z-20 drop-shadow-2xl h-[220px] sm:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
