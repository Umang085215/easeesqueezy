const FruitBoxCard = ({ product }) => {
  return (
    <div className="relative rounded-xl border shadow-md overflow-hidden bg-white flex flex-col  w-full h-90">
      <div className="relative w-full group">
        <img
          src={product.img}
          alt={product.title}
          className="w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="h-1/3 flex-1 p-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>
    </div>
  );
};

export default FruitBoxCard;
