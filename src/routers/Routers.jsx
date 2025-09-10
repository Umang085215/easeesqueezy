import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../utility/ScrollToTop";
import Home from "../easeeSqueezyUser/pages/Home";
import AddProduct from "../easeeSqueezyAdmin/pages/AddProduct";
import Dashboard from "../easeeSqueezyAdmin/pages/Dashboard";
import Products from "../easeeSqueezyAdmin/pages/Products";
import AdminLogin from "../easeeSqueezyAdmin/pages/AdminLogin";
import Categories from "../easeeSqueezyAdmin/pages/Categories";
import Manufacture from "../easeeSqueezyAdmin/pages/Manufacture";
import EditProduct from "../easeeSqueezyAdmin/pages/EditProduct";
import AdminLayout from "../easeeSqueezyAdmin/layouts/AdminLayout";
import AdminPrivateRoute from "../easeeSqueezyAdmin/context/AdminPrivateRoute";
import AdminPublicRoute from "../easeeSqueezyAdmin/context/AdminPublicRoute";
import About from "../easeeSqueezyUser/pages/About";
import TermsService from "../easeeSqueezyUser/pages/TermsService";
import PrivacyPolicy from "../easeeSqueezyUser/pages/PrivacyPolicy";
import Layout from "../easeeSqueezyUser/layouts/Layout";
import Juice from "../easeeSqueezyUser/pages/Juice";

const Routers = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        {/* User Routing */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/juices" element={<Juice />} />
            <Route path="/terms-service" element={<TermsService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>

        {/* Admin Routing */}

        <Routes>
          <Route
            path="/admin/login"
            element={
              <AdminPublicRoute>
                <AdminLogin />
              </AdminPublicRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminPrivateRoute>
                <AdminLayout />
              </AdminPrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="manufacture" element={<Manufacture />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products/add-product" element={<AddProduct />} />
            <Route path="products/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
