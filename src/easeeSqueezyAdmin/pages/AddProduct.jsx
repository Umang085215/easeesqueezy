import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Save, X, Loader } from "lucide-react";

const productSchema = yup.object().shape({
  product_name: yup.string().required("Product Name is required"),
  product_description: yup.string().required("Description is required"),
  meta_title: yup.string().required("Meta Tag Title is required"),
  meta_description: yup.string().required("Meta Tag Description is required"),
  meta_keyword: yup.string().required("Meta Tag Keywords are required"),
  category_id: yup.string().required("Select category"),
  manufacturer_id: yup.string().required("Select manufacturer"),
  price: yup
    .number()
    .typeError("Price must be a  number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  special_price: yup
    .number()
    .typeError("Special Price must be a  number")
    .positive("Special Price must be greater than 0"),
  quantity: yup.number().required("Quantity is required").min(1),
  status: yup.string().required("Status is required"),
  model: yup.string().required("Model is required"),
  sku: yup.string().required("Stock keeping unit  is required"),
  image: yup.mixed().required("Image is required"),
});

const AddProduct = () => {
  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
    model: "",
    sku: "",
    category_id: "",
    manufacturer_id: "",
    price: "",
    special_price: "",
    quantity: "",
    status: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleResetForm = () => {
    setFormData({
      product_name: "",
      product_description: "",
      meta_title: "",
      meta_description: "",
      meta_keyword: "",
      model: "",
      sku: "",
      category_id: "",
      manufacturer_id: "",
      price: "",
      special_price: "",
      quantity: "",
      status: "",
      image: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productSchema.validate(formData, { abortEarly: false });
      setErrors({});
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("You must be logged in to add a product.");
        return;
      }
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value || "");
      });
      const response = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/products",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("API Response:", result);
        handleResetForm();
        setLoading(true);
        navigate("/admin/products");
      } else {
        alert(result.message || "Failed to add product.");
      }
    } catch (validationErrors) {
      const newErrors = {};
      if (validationErrors.inner) {
        validationErrors.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
      }
      setErrors(newErrors);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleResetForm();
    setErrors({});
  };

  const getCategories = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/category",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-white shadow rounded">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-0 ">
        <h1 className="text-2xl font-bold mb-1 sm:mb-4">Add Product</h1>
        <div className="mt-2 sm:mt-6 flex  gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-400 text-white px-2 py-1 rounded"
          >
            <X size={16} />
          </button>
          <button
            type="submit"
            disabled={loading}
            form="addProductForm"
            className={`bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#003b19]"
            }`}
          >
            {loading ? <Loader size={16} /> : <Save size={16} />}
          </button>
          <button
            onClick={() => navigate("/admin/products")}
            className="bg-[#003b19] text-white px-2 py-1 rounded"
          >
            All Products
          </button>
        </div>
      </div>

      <form id="addProductForm" onSubmit={handleSubmit}>
        <Tabs.Root defaultValue="general">
          <Tabs.List className="flex border-b overflow-x-auto">
            {["General", "Data", "Image"].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab.toLowerCase()}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003b19] data-[state=active]:border-b-2 data-[state=active]:border-[#003b19] data-[state=active]:text-[#003b19] data-[state=active]:font-bold"
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* General Tab */}
          <Tabs.Content value="general" className="py-4">
            <label className="block font-medium">
              Product Name <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.product_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.product_name && (
              <p className="text-red-500 text-sm">{errors.product_name}</p>
            )}

            <div>
              <label className="block font-medium">
                Description <span className="text-red-500">*</span>
              </label>
              <div
                className={`rounded border ${
                  errors.product_description
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="text"
                  name="product_description"
                  value={formData.product_description}
                  onChange={handleChange}
                />
              </div>
              {errors.product_description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.product_description}
                </p>
              )}
            </div>

            <label className="block font-medium mt-3">
              Meta Tag Title <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="meta_title"
              value={formData.meta_title}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.meta_title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.meta_title && (
              <p className="text-red-500 text-sm">{errors.meta_title}</p>
            )}

            <label className="block font-medium mt-3">
              Meta Tag Description <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="meta_description"
              value={formData.meta_description}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.meta_description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.meta_description && (
              <p className="text-red-500 text-sm">{errors.meta_description}</p>
            )}

            <label className="block font-medium mt-3">
              Meta Tag Keywords <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="meta_keyword"
              value={formData.meta_keyword}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.meta_keyword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.meta_keyword && (
              <p className="text-red-500 text-sm">{errors.meta_keyword}</p>
            )}
          </Tabs.Content>

          <Tabs.Content value="data" className="py-4">
            <label className="block font-medium mt-3">
              Model<strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.model ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.model && (
              <p className="text-red-500 text-sm">{errors.model}</p>
            )}
            <label className="block font-medium mt-3">
              Sku<strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.sku ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.sku && <p className="text-red-500 text-sm">{errors.sku}</p>}

            <label className="block font-medium mt-3">
              Category Name <strong className="text-red-500">*</strong>
            </label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.category_id ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value=""> --Select Category--</option>
              {categories.length > 0 &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors.category_id && (
              <p className="text-red-500 text-sm">{errors.category_id}</p>
            )}
            <label className="block font-medium mt-3">
              Manufacturer Id <strong className="text-red-500">*</strong>
            </label>
            <select
              name="manufacturer_id"
              value={formData.manufacturer_id}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.manufacturer_id ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">--Select manufacturer_id--</option>
              <option value="1">1</option>
            </select>
            {errors.manufacturer_id && (
              <p className="text-red-500 text-sm">{errors.manufacturer_id}</p>
            )}
            <label className="block font-medium mt-3">
              Price <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}

            <label className="block font-medium mt-3">Special Price </label>
            <input
              type="text"
              name="special_price"
              value={formData.special_price}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.special_price ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.special_price && (
              <p className="text-red-500 text-sm">{errors.special_price}</p>
            )}

            <label className="block font-medium mt-3">
              Quantity <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity}</p>
            )}

            <label className="block font-medium mt-3">
              Status <strong className="text-red-500">*</strong>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.status ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value=""> --Select Status--</option>
              <option value="0">Active</option>
              <option value="1">Inactive</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status}</p>
            )}
          </Tabs.Content>
          <Tabs.Content value="image" className="py-4">
            <label className="block font-medium">
              Image <strong className="text-red-500">*</strong>
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.image ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </Tabs.Content>
        </Tabs.Root>
      </form>
    </div>
  );
};

export default AddProduct;
