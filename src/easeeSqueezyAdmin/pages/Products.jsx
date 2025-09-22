import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Logs } from "lucide-react";
import DataTable from "react-data-table-component";
import PageHeader from "../components/PageHeader";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setProducts(data.data || []);
      setFilteredProducts(data.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const result = products.filter((item) =>
      item.product_name?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  }, [search, products]);

  const customStyles = {
    rows: {
      style: {
        paddingTop: "12px",
        paddingBottom: "12px",
      },
    },
  };

  const columns = [
    {
      name: <span className=" text-[0.9rem] font-bold ">Image</span>,
      selector: (row) =>
        row.image ? (
          <div className="w-16 h-16 flex items-center justify-center rounded  border p-1">
            <img
              src={`https://devshub.easeesqueezy.com/easeesqueezy_backend/public/uploads/product/${row.image}`}
              alt={row.product_name}
              className="w-full h-full object-contain  "
            />
          </div>
        ) : (
          <span className="text-gray-400">No image</span>
        ),
      sortable: false,
    },
    {
      name: <span className=" text-[0.9rem] font-bold ">Product Name</span>,
      selector: (row) => (
        <div>
          <span>{row.product_name}</span>
          <div
            className={`text-sm ${
              row.status == "1" ? "text-green-600" : "text-red-500"
            }`}
          >
            {row.status == "1" ? "Active" : "Inactive"}
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: <span className=" text-[0.9rem] font-bold ">Model</span>,
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: <span className=" text-[0.9rem] font-bold ">Price</span>,
      selector: (row) =>
        row.special_price ? (
          <div>
            <div className="text-red-500 line-through">
              {Number(row.price).toFixed(2)}
            </div>
            <div className="text-green-600">
              {Number(row.special_price).toFixed(2)}
            </div>
          </div>
        ) : (
          <div className="text-green-600">{Number(row.price).toFixed(2)}</div>
        ),
      sortable: true,
    },
    {
      name: <span className=" text-[0.9rem] font-bold ">Quantity</span>,
      selector: (row) => (
        <div
          className={`px-1 py-0 rounded text-sm text-white  ${
            Number(row.quantity) >= 50
              ? "bg-green-500 "
              : Number(row.quantity) > 20
              ? "bg-orange-400"
              : "bg-red-500"
          }`}
        >
          {row.quantity}
        </div>
      ),
      sortable: true,
    },
    {
      name: <span className=" text-[0.9rem] font-bold ">Action</span>,
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/admin/products/${row.id}`)}
            className="bg-[#003b19] p-2 rounded text-white"
          >
            <Pencil size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="Products"
        breadcrumb={[
          { label: "Home", link: "/admin/dashboard" },
          { label: "Products" },
        ]}
      />

      <div className="flex gap-4 flex-col lg:flex-row border">
        <div className="flex-1 w-full bg-white p-4 sm:p-8 shadow rounded">
          <div className="flex items-center gap-1 text-lg font-semibold border-b pb-2 mb-4 text-[#003b19]">
            <Logs size={18} />
            <h2>Product List</h2>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/3 p-2 border rounded mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <DataTable
            columns={columns}
            data={filteredProducts}
            progressPending={loading}
            pagination
            highlightOnHover
            responsive
            persistTableHead
            defaultSortFieldId={2}
            customStyles={customStyles}
            noDataComponent={
              <h1 className="text-center py-6 text-red-500 text-2xl font-bold">
                No Product Found
              </h1>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Products;
