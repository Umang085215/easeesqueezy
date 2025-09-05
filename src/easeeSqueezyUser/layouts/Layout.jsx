import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

const Layout = () => {
  return (
    <div>
      <StickyHeader />
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
