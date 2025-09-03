import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import * as Tabs from "@radix-ui/react-tabs";
import { Save, X } from "lucide-react";
const schema = yup.object().shape({
  manufacturer_id: yup.string().required("Manufacturer Id is required"),
});
const Manufacture = () => {
  const [manufacturer_id, setManufacturer_id] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setManufacturer_id(e.target.value);
    setErrors({});
    setErrorMsg("");
    setSuccessMsg("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ manufacturer_id }, { abortEarly: false });
      setErrors({});
      setErrorMsg("");
      setSuccessMsg("");
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setErrorMsg("You must be logged in to add a manufacturer_id.");
        return;
      }
      setLoading(true);
      const payload = { name: manufacturer_id };
      const res = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/manufacturer_id",
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
      if (res.ok && data.status === "Manufacturer Id created successfully") {
        setSuccessMsg("Manufacturer Id added successfully!");
        setManufacturer_id("");
      } else {
        setErrorMsg(
          data.message || "Failed to add manufacturer_id. Please try again."
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
      setManufacturer_id("");
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Add Manufacturer</h1>
        <div className="mt-6 flex  gap-2">
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
            form="manufacturer_idForm"
            className={`bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#003b19]"
            }`}
          >
            {loading ? "Saving .." : <Save size={16} />}
          </button>
          <button
            onClick={() => navigate("/admin/products")}
            className="bg-[#003b19] text-white py-1 px-2 rounded"
          >
            All Products
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 w-full">
        <form
          id="manufacturer_idForm"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Tabs.Root defaultValue="general">
            <Tabs.List className="flex border-b overflow-x-auto">
              <Tabs.Trigger
                value="general"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003b19] data-[state=active]:border-b-2 data-[state=active]:border-[#003b19] data-[state=active]:text-[#003b19] data-[state=active]:font-bold "
              >
                General
              </Tabs.Trigger>
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
                Manufacturer Id <strong className="text-red-500">*</strong>
              </label>
              <input
                type="text"
                name="manufacturer_id"
                value={manufacturer_id}
                onChange={handleChange}
                className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                  errors.manufacturer_id ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.manufacturer_id && (
                <p className="text-red-500 text-sm">{errors.manufacturer_id}</p>
              )}
            </Tabs.Content>
          </Tabs.Root>
        </form>
      </div>
    </div>
  );
};

export default Manufacture;
