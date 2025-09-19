/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DEFAULT: "#0E4C45",
        success: "#0E4C45",
        success_hover: "#067c39",
        danger: "#f3534d",
        saffron: "#ff6f05",
        light_saffron: "#f7842f",
        light_red: "#f3534d",
        light_orange: "#eb713e",
        light_brown: "#e7a956",
        light_green: "#cee662",
        light_pink: "#f268a5",
        light_yellow: "#f8de62",
      },
      keyframes: {
        bounceSmooth: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        bounceSmooth: "bounceSmooth 1.5s infinite ease-in-out",
      },
    },
    plugins: [],
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
};
