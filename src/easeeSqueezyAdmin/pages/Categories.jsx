import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import * as Tabs from "@radix-ui/react-tabs";

const schema = yup.object().shape({
  category: yup.string().required("Category is required"),
});

const Categories = () => {
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCategory(e.target.value);
    setErrors((prev) => ({ ...prev, category: "" }));
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

      const payload = { name: category };

      const response = await axios.post(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/category",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "Category created successfully") {
        setSuccessMsg("Category added successfully!");
        setCategory("");
      } else {
        setErrorMsg(
          response.data.message || "Failed to add category. Please try again."
        );
      }
    } catch (err) {
      if (err.inner) {
        const validationErrors = {};
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else if (err.response) {
        setErrorMsg(
          err.response.data.message || "Server error. Please try again."
        );
      } else {
        setErrorMsg(err.message || "An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Add Category</h1>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-[#003b19] text-white px-4 py-2 rounded"
        >
          All Products
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full ">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <input
              name="category"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
              value={category}
              onChange={handleChange}
            ></input>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div> */}

          <Tabs.Root defaultValue="general">
            <Tabs.List className="flex border-b overflow-x-auto">
              {["General"].map((tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003b19] data-[state=active]:border-b-2 data-[state=active]:border-[#003b19] data-[state=active]:text-[#003b19] data-[state=active]:font-bold "
                >
                  {tab}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value="general" className="p-4">
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
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}
            </Tabs.Content>
          </Tabs.Root>

          <div className="mt-6 flex justify-end gap-4">
            <button
              type="submit"
              className="bg-[#003b19] text-white px-6 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Categories;
