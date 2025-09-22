import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import * as Tabs from "@radix-ui/react-tabs";
import { Save, X, Loader } from "lucide-react";
const schema = yup.object().shape({
  category: yup.string().required("Category is required"),
});
const Categories = () => {
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCategory(e.target.value);
    setErrors({});
    setErrorMsg("");
    setSuccessMsg("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ category }, { abortEarly: false });
      setErrors({});
      setErrorMsg("");
      setSuccessMsg("");
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setErrorMsg("You must be logged in to add a category.");
        return;
      }
      setLoading(true);
      const payload = { name: category };
      const res = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/category",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (res.ok && data.status === "Category created successfully") {
        setSuccessMsg("Category added successfully!");
        setTimeout(() => {
          setSuccessMsg("");
        }, 5000);
        setCategory("");
      } else {
        setErrorMsg(
          data.message || "Failed to add category. Please try again."
        );
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        const validationErrors = {};
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else {
        setErrorMsg(err.message || "An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setCategory("");
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-white shadow rounded">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-0">
        <h1 className="text-2xl font-bold mb-1 sm:mb-4">Add Category</h1>
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
            form="categoryForm"
            className={`bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#003b19]"
            }`}
          >
            {loading ? <Loader size={16} /> : <Save size={16} />}
          </button>
          <button
            onClick={() => navigate("/admin/products")}
            className="bg-[#003b19] text-white py-1 px-2 rounded"
          >
            All Products
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg  w-full">
        <form id="categoryForm" onSubmit={handleSubmit} className="space-y-4">
          <Tabs.Root defaultValue="general">
            <Tabs.List className="flex border-b overflow-x-auto">
              <Tabs.Trigger
                value="general"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003b19] data-[state=active]:border-b-2 data-[state=active]:border-[#003b19] data-[state=active]:text-[#003b19] data-[state=active]:font-bold "
              >
                General
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="general" className="py-4">
              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 border border-red-300 text-sm text-center">
                  {errorMsg}
                </div>
              )}
              {successMsg && (
                <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 border border-green-300 text-sm text-center">
                  {successMsg}
                </div>
              )}

              <label className="block font-medium">
                Category Name <strong className="text-red-500">*</strong>
              </label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
                className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                  errors.category ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}
            </Tabs.Content>
          </Tabs.Root>
        </form>
      </div>
    </div>
  );
};

export default Categories;
