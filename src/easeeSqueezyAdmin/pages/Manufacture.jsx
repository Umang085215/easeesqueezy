import React, { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  manufacture: yup.string().required("Manufacture is required"),
});

const Manufacture = () => {
  const [manufacture, setManufacture] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setManufacture(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ manufacture }, { abortEarly: false });
      setErrors({});
      setErrorMsg("");
      console.log("Manufacture added successfully:", manufacture);
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="bg-white shadow-lg rounded-lg px-8 py-12 w-full max-w-md border z-10">
        {errorMsg && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 border border-red-300 text-sm text-center">
            {errorMsg}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Manufacture
            </label>
            <select
              name="manufacture"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.manufacture ? "border-red-500" : "border-gray-300"
              }`}
              value={manufacture}
              onChange={handleChange}
            >
              <option value="">Select Manufacture</option>
              <option value="technology">Lemon juice</option>
              <option value="health">Mango juice</option>
              <option value="finance">Kiwi juice</option>
              <option value="education">Papaya juice</option>
            </select>

            {errors.manufacture && (
              <p className="text-red-500 text-sm">{errors.manufacture}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#003b19] text-white py-2 rounded-lg hover:bg-[#014d21] transition"
          >
            Add Manufacture
          </button>
        </form>
      </div>
    </div>
  );
};

export default Manufacture;
