import React, { useRef, useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import axios from "axios";
import * as yup from "yup";
import juice1 from "../../assets/about/contact1.png";
import juice2 from "../../assets/sliderBottels/mango12.png";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const InquirySection = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setResponseMessage("");

    try {
      await schema.validate(formData, { abortEarly: false });
      const res = await axios.post(
        "https://easeesqueezy.com/easeesqueezy_backend/public/api/admin/contact",
        formData
      );
      if (res.status === 201) {
        setResponseMessage(res.data.message);
        setIsError(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      if (err.inner) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        setResponseMessage("Failed to submit inquiry. Please try again.");
        setIsError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquiry"
      ref={ref}
      className=" bg-[url('/images/contactbg.png')] bg-center bg-no-repeat bg-blend-multiply"
    >
      <div className="container mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-0 pb-16 sm:pt-[4rem] items-start">
        {/* LEFT SIDE FORM */}
        <motion.div
          className="mobileForm bg-white shadow-lg rounded-lg px-4 sm:px-8 py-8 order-2 lg:order-1"
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

          {/* --- FORM --- */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="md:col-span-2 flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md bg-gray-100 outline-none focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md bg-gray-100 outline-none focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => {
                  let digits = e.target.value.replace(/\D/g, "");
                  if (digits.length > 10) digits = digits.slice(0, 10);
                  setFormData({ ...formData, phone: digits });
                }}
                maxLength={10}
                className={`w-full p-2 border rounded-md bg-gray-100 outline-none focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="md:col-span-2 flex flex-col">
              <textarea
                name="message"
                placeholder="Write your message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md bg-gray-100 outline-none focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-[#e8c044] text-white font-bold py-3 rounded-md hover:bg-orange-600 transition"
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

        {/* RIGHT SIDE CONTENT */}
        <div className="relative order-1 lg:order-2">
          <div className=" relative z-30">
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
              <div className="w-max flex items-center gap-3 bg-[#E8C044] px-4 py-2 rounded-full text-white font-normal">
                <FaWhatsapp className="text-xl" />
                <span>+91 84900-91122</span>
              </div>
              <div className="w-max bg-[#E8C044] px-4 py-2 rounded-full text-white font-normal hover:opacity-90 transition">
                <a
                  href="mailto:contact@easeesqueezy.com"
                  className="flex items-center gap-3"
                >
                  <FaEnvelope className="text-xl" />
                  <span>contact@easeesqueezy.com</span>
                </a>
              </div>
            </motion.div>
            <p className="text-gray-700 mb-6 pb-5 max-w-md">
              🚚 Fresh juice, straight to your door — no hassle, just health!
            </p>
          </div>

          <motion.div
            className="absolute -bottom-[100px] right-[0px]  lg:right-[20px] flex items-end justify-end z-0"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img
              src={juice1}
              alt="Oranges"
              loading="lazy"
              className="w-60 md:w-48 lg:w-60 relative z-10 drop-shadow-2xl h-[250px] sm:h-[300px]"
            />
            <img
              src={juice2}
              alt="Juice Bottle"
              loading="lazy"
              className="w-[8rem] md:w-48 lg:w-50 -ml-[4rem] sm:-ml-[4rem] z-20 drop-shadow-2xl h-[200px] sm:h-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
