// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6  gap-4 sm:gap-10">
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img
//           src="../../src/assets/whyeasee/404.png"
//           alt="404 Illustration"
//           className="max-w-xs sm:max-w-md md:max-w-lg w-full h-[350px] sm:h-auto"
//         />
//       </div>
//       <div className="relative z-10 text-center md:text-left md:w-1/2 space-y-2 sm:space-y-4 text-danger">
//         <h1 className="text-[50px] sm:text-[100px] md:text-[140px] font-extrabold  drop-shadow-lg ">
//           404
//         </h1>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold ">
//           Oops! Page Not Found
//         </h2>
//         <p className=" max-w-md mx-auto md:mx-0">
//           Looks like you drank too much juice 🍹 and ended up on the wrong page.
//           Don’t worry, let’s get you back on track.
//         </p>

//         <Link
//           to="/"
//           className="inline-block mt-2 sm:mt-6 px-8 py-3  bg-danger text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           Go Back Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

import { Link } from "react-router-dom";
import bg404 from "../../assets/whyeasee/bg404.png";
import robot404 from "../../assets/whyeasee/robot404.png";

const NotFound = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-6 sm:gap-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg404})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Side - Robot Image */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <img
          src={robot404}
          alt="404 Robot Illustration"
          className="  w-full sm:w-[80%] h-auto sm:h-[90%] animate-bounce-slow"
        />
      </div>

      {/* Right Side - Text */}
      <div className="relative z-10 text-center md:text-left md:w-1/2 space-y-3 sm:space-y-5 text-white">
        <h1 className="text-[60px] sm:text-[100px] md:text-[140px] font-extrabold drop-shadow-xl">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-200 max-w-md mx-auto md:mx-0">
          Looks like you drank too much juice 🍹 and ended up on the wrong page.
          Don’t worry, let’s get you back on track.
        </p>

        <Link
          to="/"
          className="inline-block mt-4 sm:mt-6 px-8 py-3 bg-saffron text-white  font-semibold text-lg rounded-full shadow-lg hover:bg-light_saffron transition-transform duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
