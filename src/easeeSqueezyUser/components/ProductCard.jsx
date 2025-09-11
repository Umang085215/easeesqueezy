const ProductCard = ({ product }) => {
  return (
    <div className="relative rounded-xl border shadow-md p-6 flex flex-col items-center text-center overflow-hidden bg-yellow-100 bg-blend-multiply">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/images/products/juicebg.png')" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center group">
        <img
          src={product.img}
          alt={product.title}
          className="mb-2 w-48 transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};
export default ProductCard;
