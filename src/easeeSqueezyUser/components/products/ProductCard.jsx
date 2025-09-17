const ProductCard = ({ product }) => {
  return (
    <div className="relative rounded-xl border shadow-md overflow-hidden bg-[#fdfdfd] flex flex-col items-center text-center">
      <div className="relative w-full flex justify-center px-6 py-3 group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: "url('/images/products/juicebg.png')" }}
        ></div>
        <img
          src={product.img}
          alt={product.title}
          className="relative z-10 mb-2 w-48 h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="w-full px-6 py-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};
export default ProductCard;

// <div className="relative rounded-xl border shadow-md px-6 py-3 flex flex-col items-center text-center overflow-hidden bg-[#fdfdfd] bg-blend-multiply">
//   <div
//     className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
//     style={{ backgroundImage: "url('/images/products/juicebg.png')" }}
//   ></div>
//   <div className="relative z-10 flex flex-col items-center text-center group">
//     <img
//       src={product.img}
//       alt={product.title}
//       className="mb-2 w-48 transition-transform duration-500 ease-in-out group-hover:scale-110"
//     />
//     <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
//     <p className="text-sm text-gray-700">{product.description}</p>
//   </div>
// </div>
