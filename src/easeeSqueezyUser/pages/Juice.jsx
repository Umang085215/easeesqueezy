import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";
import products from "../data/products/productsData";
import fruitBox from "../data/products/fruitbox";
import FruitBoxCard from "../components/products/FruitBoxCard";

const Juice = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
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
        viewport={{ once: true }}
      >
        OUR FRUIT BOX
      </motion.h2>

      <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {fruitBox.map((p, index) => (
          <FruitBoxCard key={index} product={p} />
        ))}
      </div>

      <motion.h2
        className="my-10 text-center text-3xl font-bold text-[#003b19]"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        OUR JUICES
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {currentProducts.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white bg-success rounded disabled:opacity-50"
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
          className="px-4 py-2 text-white bg-success rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Juice;
