import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import axios from "axios";

const InquirySection = () => {
  const ref = useRef(null);
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

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
      ref={ref}
      className="  bg-[url('/images/contactbg.webp')] bg-center bg-no-repeat bg-blend-multiply"
    >
      <div className="container mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10  pt-0 pb-16 sm:pt-[4rem] items-center">
        <motion.div
          className="mobileForm bg-white  shadow-lg rounded-lg px-4 sm:px-8 py-8 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false }}
        >
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

            <motion.button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-[#FF9300] text-white font-bold py-3 rounded-md hover:bg-orange-600 transition"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </motion.button>
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
        </motion.div>

        <div className="relative pt-0 pb-12 sm:pt-[3rem] flex flex-col justify-between h-full order-1 lg:order-2">
          <div className="z-30">
            <motion.h3
              className="order_title text-4xl font-extrabold text-[#CA9D15] mb-3"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false }}
            >
              Want Juice ? We Got You !
            </motion.h3>
            <motion.p
              className="text-gray-700 mb-6 max-w-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: false }}
            >
              Slide into our WhatsApp or drop us an email to place your order.
              It’s that simple.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 mb-5"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false }}
            >
              <div className="w-max flex items-center gap-3 bg-[#E8C044] px-4 py-2 rounded-full text-white font-bold shadow">
                <FaWhatsapp className="text-xl text-green-700" />
                <span>+91 84900-91122</span>
              </div>
              <div className="w-max flex items-center gap-3 bg-[#E8C044] px-4 py-2 rounded-full text-white font-bold shadow">
                <FaEnvelope className="text-xl" />
                <span>easeesqueezy@gmail.com</span>
              </div>
            </motion.div>
            <p className="text-gray-700 mb-6 max-w-md ">
              🚚 Fresh juice, straight to your door — no hassle, just health!
            </p>
          </div>

          <motion.div
            className="absolute -bottom-[140px] right-[0px] lg:bottom-[0px] lg:right-[20px] flex items-center justify-center lg:justify-start z-0"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img
              src="/images/contact1.webp"
              alt="Oranges"
              loading="lazy"
              className="w-80 md:w-48 lg:w-60 relative z-10 drop-shadow-2xl h-[250px] sm:h-[300px]"
            />
            <img
              src="/images/sliderBottels/mango.webp"
              alt="Juice Bottle"
              loading="lazy"
              className="w-full -ml-[6rem] sm:-ml-[8rem] z-20 drop-shadow-2xl h-[300px] sm:h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
