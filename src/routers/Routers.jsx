import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../utility/ScrollToTop";
import PreLoader from "../easeeSqueezyUser/components/loaders/PreLoader";
import NotFound from "../easeeSqueezyUser/pages/NotFound";
const Layout = lazy(() => import("../easeeSqueezyUser/layouts/Layout"));
const Home = lazy(() => import("../easeeSqueezyUser/pages/Home"));
const About = lazy(() => import("../easeeSqueezyUser/pages/About"));
const Juice = lazy(() => import("../easeeSqueezyUser/pages/Juice"));
const AdminLayout = lazy(() =>
  import("../easeeSqueezyAdmin/layouts/AdminLayout")
);
const AdminLogin = lazy(() => import("../easeeSqueezyAdmin/pages/AdminLogin"));
const Dashboard = lazy(() => import("../easeeSqueezyAdmin/pages/Dashboard"));
const Products = lazy(() => import("../easeeSqueezyAdmin/pages/Products"));
const Manufacture = lazy(() =>
  import("../easeeSqueezyAdmin/pages/Manufacture")
);
const Categories = lazy(() => import("../easeeSqueezyAdmin/pages/Categories"));
const AddProduct = lazy(() => import("../easeeSqueezyAdmin/pages/AddProduct"));
const EditProduct = lazy(() =>
  import("../easeeSqueezyAdmin/pages/EditProduct")
);

const AdminPrivateRoute = lazy(() =>
  import("../easeeSqueezyAdmin/context/AdminPrivateRoute")
);
const AdminPublicRoute = lazy(() =>
  import("../easeeSqueezyAdmin/context/AdminPublicRoute")
);

const Routers = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <Suspense fallback={<PreLoader />}> */}
      <Routes>
        {/* User Router */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="juices" element={<Juice />} />
        </Route>
        {/* Admin router */}
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
};

export default Routers;
