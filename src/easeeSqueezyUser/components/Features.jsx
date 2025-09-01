import { FaBottleWater } from "react-icons/fa6";
import { LuDroplet } from "react-icons/lu";
import { GiStomach } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { LuGlassWater } from "react-icons/lu";
import { PiCubeTransparentBold } from "react-icons/pi";

const Features = () => {
  const features = [
    {
      icon: "/images/i1.png",
      text: "Nutrient-Rich & Antioxidant-Packed",
    },
    {
      icon: "/images/i2.png",
      text: "Pure & Preservative-Free",
    },
    {
      icon: "/images/i3.png",
      text: "Supports Digestion & Detox",
    },
    {
      icon: "/images/i4.png",
      text: "Instant Natural Energy",
    },
    {
      icon: "/images/i5.png",
      text: "Freshly Cold-Pressed Daily",
    },
    {
      icon: "/images/i6.png",
      text: "Sugar-Free",
    },
  ];

  return (
    <div className="relative lg:absolute -bottom-[60px] left-0 right-0 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center px-6 py-4 border-r border-white last:border-r-0 bg-[#FFD965]"
        >
          <img src={feature.icon} alt="feature icon" className="w-10 h-10" />
          <p className="mt-3 text-sm font-medium">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
