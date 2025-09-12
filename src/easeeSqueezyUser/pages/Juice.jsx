import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";

const PRODUCTS = [
  {
    bg: "bg-rose-300",
    img: "/images/juices/juice1.webp",
    title: "Heart Helper",
    description: "Blood flow & vitality",
  },
  {
    bg: "bg-green-300",
    img: "/images/juices/juice5.webp",
    title: "Gentle Cleanser",
    description: "Blood flow & vitality",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juices/juice3.webp",
    title: "Skin Shield",
    description: "Skin & eye support",
  },
  {
    bg: "bg-green-300",
    img: "/images/juices/juice4.webp",
    title: "Minty Balance",
    description: "Refreshing & hormone-friendly",
  },
  {
    bg: "bg-yellow-300",
    img: "/images/juices/juice2.webp",
    title: "Amla Glow",
    description: "Strong immunity support",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juices/juice3.webp",
    title: "Ruby Mild",
    description: "Heart & joint nourishment",
  },
  {
    bg: "bg-amber-200",
    img: "/images/juices/juice6.webp",
    title: "Light Iron",
    description: "Iron support, safe balance",
  },

  {
    bg: "bg-green-100",
    img: "/images/juices/juice5.webp",
    title: " Sweet Lime Ease",
    description: "Digestion + immunity",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice4.webp",
    title: "Hydration Glow ",
    description: "Hydrating, cooling",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice3.webp",
    title: "Celery-Free Fresh ",
    description: "Blood pressure & detox, no celery needed",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice2.webp",
    title: "Eye Care",
    description: "Vitamin A & C for vision",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice1.webp",
    title: "Berry-Free Sprint",
    description: "Energy & lungs, no exotic fruits",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice4.webp",
    title: "Aloe Lite",
    description: "Gut soothing, hydration",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice2.webp",
    title: "Tulsi Fresh",
    description: "Lung support, safe for BP meds",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice1.webp",
    title: "Vision Care",
    description: "Carotenoid support for eyes & skin",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice5.webp",
    title: "Gentle Iron",
    description: "Iron support, kidney-safe portion",
  },
  {
    bg: "bg-green-200",
    img: "/images/juices/juice3.webp",
    title: "Liver Light",
    description: "Liver cleanse",
  },
  {
    bg: "bg-orange-200",
    img: "/images/juices/juice2.webp",
    title: "Carrot Glow",
    description: "Skin & immunity",
  },
  {
    bg: "bg-red-200",
    img: "/images/juices/juice1.webp",
    title: "Cool Circulation",
    description: "Heart & blood flow",
  },
  {
    bg: "bg-yellow-500",
    img: "/images/juices/juice6.webp",
    title: "Joint Soother",
    description: "Joint-friendly",
  },
  {
    bg: "bg-orange-500",
    img: "/images/juices/juice5.webp",
    title: "C-Boost",
    description: "Vitamin C powerhouse",
  },
  {
    bg: "bg-emerald-500",
    img: "/images/juices/juice3.webp",
    title: "Digestive Glow",
    description: "Gut-friendly, anti-acidity",
  },
  {
    bg: "bg-purple-500",
    img: "/images/juices/juice2.webp",
    title: "Polyphenol Punch",
    description: "Antioxidant-rich, heart safe",
  },
  {
    bg: "bg-purple-500",
    img: "/images/juices/juice3.webp",
    title: "Purple Care",
    description: "Antioxidants for joints & liver",
  },
  {
    bg: "bg-orange-500",
    img: "/images/juices/juice1.webp",
    title: "Collagen Helper",
    description: "Skin elasticity & repair",
  },
  {
    bg: "bg-emerald-700",
    img: "/images/juices/juice4.webp",
    title: "Bone Helper",
    description: "Bone & blood pressure support",
  },
  {
    bg: "bg-orange-400",
    img: "/images/juices/juice5.webp",
    title: "Vitality Lite",
    description: "Energy & heart health",
  },
  {
    bg: "bg-green-500",
    img: "/images/juices/juice2.webp",
    title: "Mint Fresh",
    description: "Hydration & lung support",
  },
  {
    bg: "bg-orange-600",
    img: "/images/juices/juice6.webp",
    title: "Sun Guard",
    description: "Protects skin & eyes",
  },
  {
    bg: "bg-yellow-600",
    img: "/images/juices/juice3.webp",
    title: "Immunity Glow",
    description: "Immunity powerhouse",
  },
];

const Juice = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const productsPerPage = 8;
  const totalPages = Math.ceil(PRODUCTS.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = PRODUCTS.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="w-full px-6 sm:px-12 container mx-auto py-6">
      <motion.h2
        className="my-10 text-center text-3xl font-bold text-[#003b19]"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        OUR JUICES
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
        ease="easeInOut"
        viewport={{ once: false }}
      >
        {currentProducts.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </motion.div>

      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white bg-[#0e4c45] rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-white bg-[#0e4c45] rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Juice;
