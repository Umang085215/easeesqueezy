import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const PRODUCTS = [
  {
    bg: "bg-rose-300",
    img: "/images/juice5.png",
    title: "Heart Helper",
    description: "Blood flow & vitality",
  },
  {
    bg: "bg-green-300",
    img: "/images/juice5.png",
    title: "Gentle Cleanser",
    description: "Blood flow & vitality",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juice1.png",
    title: "Skin Shield",
    description: "Skin & eye support",
  },
  {
    bg: "bg-green-300",
    img: "/images/juice1.png",
    title: "Minty Balance",
    description: "Refreshing & hormone-friendly",
  },
  {
    bg: "bg-yellow-300",
    img: "/images/juice2.png",
    title: "Amla Glow",
    description: "Strong immunity support",
  },
  {
    bg: "bg-pink-300",
    img: "/images/juice3.png",
    title: "Ruby Mild",
    description: "Heart & joint nourishment",
  },
  {
    bg: "bg-amber-200",
    img: "/images/juice4.png",
    title: "Light Iron",
    description: "Iron support, safe balance",
  },

  {
    bg: "bg-green-100",
    img: "/images/juice6.png",
    title: " Sweet Lime Ease",
    description: "Digestion + immunity",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Hydration Glow ",
    description: "Hydrating, cooling",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Celery-Free Fresh ",
    description: "Blood pressure & detox, no celery needed",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Eye Care",
    description: "Vitamin A & C for vision",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Berry-Free Sprint",
    description: "Energy & lungs, no exotic fruits",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Aloe Lite",
    description: "Gut soothing, hydration",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Tulsi Fresh",
    description: "Lung support, safe for BP meds",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Vision Care",
    description: "Carotenoid support for eyes & skin",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Gentle Iron",
    description: "Iron support, kidney-safe portion",
  },
  {
    bg: "bg-green-200",
    img: "/images/juice4.png",
    title: "Liver Light",
    description: "Liver cleanse",
  },
  {
    bg: "bg-orange-200",
    img: "/images/juice4.png",
    title: "Carrot Glow",
    description: "Skin & immunity",
  },
  {
    bg: "bg-red-200",
    img: "/images/juice4.png",
    title: "Cool Circulation",
    description: "Heart & blood flow",
  },
  {
    bg: "bg-yellow-500",
    img: "/images/juice4.png",
    title: "Joint Soother",
    description: "Joint-friendly",
  },
  {
    bg: "bg-orange-500",
    img: "/images/juice5.png",
    title: "C-Boost",
    description: "Vitamin C powerhouse",
  },
  {
    bg: "bg-emerald-500",
    img: "/images/juice6.png",
    title: "Digestive Glow",
    description: "Gut-friendly, anti-acidity",
  },
  {
    bg: "bg-purple-500",
    img: "/images/juice2.png",
    title: "Polyphenol Punch",
    description: "Antioxidant-rich, heart safe",
  },
  {
    bg: "bg-purple-500",
    img: "/images/juice3.png",
    title: "Purple Care",
    description: "Antioxidants for joints & liver",
  },
  {
    bg: "bg-orange-500",
    img: "/images/juice6.png",
    title: "Collagen Helper",
    description: "Skin elasticity & repair",
  },
  {
    bg: "bg-emerald-700",
    img: "/images/juice5.png",
    title: "Bone Helper",
    description: "Bone & blood pressure support",
  },
  {
    bg: "bg-orange-400",
    img: "/images/juice4.png",
    title: "Vitality Lite",
    description: "Energy & heart health",
  },
  {
    bg: "bg-green-500",
    img: "/images/juice2.png",
    title: "Mint Fresh",
    description: "Hydration & lung support",
  },
  {
    bg: "bg-orange-600",
    img: "/images/juice6.png",
    title: "Sun Guard",
    description: "Protects skin & eyes",
  },
  {
    bg: "bg-yellow-600",
    img: "/images/juice4.png",
    title: "Immunity Glow",
    description: "Immunity powerhouse",
  },
];

const Juice = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
      <h2 className="my-10 text-center text-3xl font-bold text-[#003b19]">
        OUR JUICES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {currentProducts.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-orange-300 rounded disabled:opacity-50"
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
          className="px-4 py-2 bg-orange-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Juice;
