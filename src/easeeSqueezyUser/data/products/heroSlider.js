import orangebottel from "../../../assets/sliderBottels/orange.png";
import mangobottel from "../../../assets/sliderBottels/mango.png";
import kiwibottel from "../../../assets/sliderBottels/kiwi.png";
import tomatobottel from "../../../assets/sliderBottels/tomato.png";

// Icons
import leaf1 from "../../../assets/fruitIcons/leaf1.png";
import leaf2 from "../../../assets/fruitIcons/leaf2.png";

import orange1 from "../../../assets/fruitIcons/o1.png";
import orange2 from "../../../assets/fruitIcons/o2.png";
import orange3 from "../../../assets/fruitIcons/o5.png";
import orange4 from "../../../assets/fruitIcons/o4.png";

import mango1 from "../../../assets/fruitIcons/m8.png";
import mango2 from "../../../assets/fruitIcons/p1.png";
import mango3 from "../../../assets/fruitIcons/m4.png";
import mango4 from "../../../assets/fruitIcons/p5.png";

import kiwi1 from "../../../assets/fruitIcons/k1.png";
import kiwi2 from "../../../assets/fruitIcons/k3.png";
import kiwi3 from "../../../assets/fruitIcons/k10.png";
import kiwi4 from "../../../assets/fruitIcons/k9.png";

import tomato1 from "../../../assets/fruitIcons/tomato1.png";
import tomato2 from "../../../assets/fruitIcons/tomato2.png";
import tomato3 from "../../../assets/fruitIcons/tomato3.png";

import spearmint1 from "../../../assets/fruitIcons/s1.png";
import spearmint2 from "../../../assets/fruitIcons/s2.png";
import spearmint3 from "../../../assets/fruitIcons/s3.png";

const heroSlider = [
  {
    title: "C-Rich-Orange",
    bottle: orangebottel,
    bg: "bg-[radial-gradient(circle_at_center,_#f5b066,_#ef7c00)]",
    fruitIcons: [
      {
        src: orange1,
        className: "absolute top-[10%] left-[20%] w-20 z-20 icon-float1",
      },
      {
        src: orange2,
        className: "absolute top-[45%] left-[10%] w-20 z-20 icon-float2",
      },
      {
        src: leaf1,
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: leaf2,
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: orange3,
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: orange4,
        className:
          " absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
      },
    ],
  },
  {
    title: "Mango & Pineapple",
    bottle: mangobottel,
    bg: "bg-[radial-gradient(circle_at_center,_#fdd566,_#fbb900)]",
    fruitIcons: [
      {
        src: mango1,
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: mango2,
        className: "absolute top-[45%] left-[10%] w-24 z-20 icon-float2",
      },
      {
        src: leaf1,
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: leaf2,
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: mango3,
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-20 z-20 icon-float2",
      },
      {
        src: mango4,
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
      },
    ],
  },
  {
    title: "Kiwi Collagen Helper",
    bottle: kiwibottel,
    bg: "bg-[radial-gradient(circle_at_center,_#e1f58c,_#758e18)]",
    fruitIcons: [
      {
        src: kiwi1,
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: kiwi2,
        className: "absolute top-[45%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: leaf2,
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: leaf1,
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: kiwi3,
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: kiwi4,
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
      },
    ],
  },
  {
    title: "Tomato Lycopene Shield",
    bottle: tomatobottel,
    bg: "bg-[radial-gradient(circle_at_center,_#ed9b8d,_#e2615b)]",
    fruitIcons: [
      {
        src: tomato1,
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: tomato2,
        className: "absolute top-[45%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: leaf2,
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: leaf1,
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: tomato3,
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: tomato1,
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
      },
    ],
  },
  {
    title: "Spearmint Cooling Juice",
    bottle: kiwibottel,
    bg: "bg-[radial-gradient(circle_at_center,_#e1f58c,_#758e18)]",
    fruitIcons: [
      {
        src: spearmint1,
        className: "absolute top-[10%] left-[20%] w-24 z-20 icon-float1",
      },
      {
        src: spearmint2,
        className: "absolute top-[45%] left-[10%] w-36 z-20 icon-float2",
      },
      {
        src: leaf2,
        className: "absolute top-[10%] right-[20%] w-24 z-20 icon-float4",
      },
      {
        src: leaf1,
        className:
          "absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[20%] w-20 z-20 icon-float3",
      },
      {
        src: spearmint3,
        className:
          "absolute top-[40%] right-[5%] sm:top-[50%] sm:right-[10%] w-24 z-20 icon-float2",
      },
      {
        src: spearmint1,
        className:
          "absolute bottom-[20%] sm:bottom-[15%] right-[15%] w-24 z-20 icon-float4",
      },
    ],
  },
  // {
  //   title: "Blueberry-Watermelon ",
  //   bottle: "/images/sliderBottels/blueberry.png",
  //   bg: "bg-[radial-gradient(circle_at_center,_#a7c8e0,_#6da4cb)]",
  //   fruitIcons: [
  //     {
  //       src: "/images/fruitIcons/b4.png",
  //       className: "absolute top-[5%] left-[10%] w-36 z-20 icon-float1",
  //     },
  //     {
  //       src: "/images/fruitIcons/b5.png",
  //       className: "absolute top-[45%] left-[8%] w-24 z-20 icon-float2",
  //     },
  //     {
  //       src: "/images/fruitIcons/leaf2.png",
  //       className: "absolute bottom-[10%] left-[15%] w-24 z-20 icon-float3",
  //     },
  //     {
  //       src: "/images/fruitIcons/leaf1.png",
  //       className: "absolute top-[10%] right-[15%] w-24 z-20 icon-float4",
  //     },
  //     {
  //       src: "/images/fruitIcons/b6.png",
  //       className: "absolute top-[50%] right-[8%] w-36 z-20 icon-float1",
  //     },
  //     {
  //       src: "/images/fruitIcons/b4.png",
  //       className: "absolute bottom-[10%] right-[15%] w-24 z-20 icon-float2",
  //     },
  //   ],
  // },
];

export default heroSlider;
