import React from "raect";

const Features = () => {
  const features = [
    {
      icon: "/images/about/i1.png",
      text: "Nutrient-Rich & Antioxidant-Packed",
    },
    {
      icon: "/images/about/i2.png",
      text: "Pure & Preservative-Free",
    },
    {
      icon: "/images/about/i3.png",
      text: "Supports Digestion & Detox",
    },
    {
      icon: "/images/about/i4.png",
      text: "Instant Natural Energy",
    },
    {
      icon: "/images/about/i5.png",
      text: "Freshly Cold-Pressed Daily",
    },
    {
      icon: "/images/about/i6.png",
      text: "Sugar-Free",
    },
  ];

  return (
    <div className="container px-0 sm:px-12 relative lg:absolute -bottom-[60px] left-0 right-0  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center px-6 py-4 border-r border-white last:border-r-0 bg-[#FFD965]"
        >
          <img
            src={feature.icon}
            alt="feature icon"
            loading="lazy"
            className="w-10 h-10"
          />
          <p className="mt-3 text-sm font-medium">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
