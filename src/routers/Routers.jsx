import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../easeeSqueezyUser/pages/Home";
import AddProduct from "../easeeSqueezyAdmin/pages/AddProduct";
import Dashboard from "../easeeSqueezyAdmin/pages/Dashboard";
import Products from "../easeeSqueezyAdmin/pages/Products";
import Filters from "../easeeSqueezyAdmin/pages/Filters";
import AdminLogin from "../easeeSqueezyAdmin/pages/AdminLogin";
import Categories from "../easeeSqueezyAdmin/pages/Categories";
import Manufacture from "../easeeSqueezyAdmin/pages/Manufacture";
import EditProduct from "../easeeSqueezyAdmin/pages/EditProduct";
import AdminLayout from "../easeeSqueezyAdmin/layouts/AdminLayout";
import AdminPrivateRoute from "../easeeSqueezyAdmin/context/AdminPrivateRoute";
import AdminPublicRoute from "../easeeSqueezyAdmin/context/AdminPublicRoute";

const Routers = () => {
  return (
    <>
      <Router>
        {/* User Routing */}
        <Routes>
          <Route path="/home" element={<Home />} />
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
