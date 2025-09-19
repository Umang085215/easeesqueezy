import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleMap from "../components/map/GoogleMap";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[76px] sm:pt-[116px]">
        <Outlet />
      </main>
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default Layout;
