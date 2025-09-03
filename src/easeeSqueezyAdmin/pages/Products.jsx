// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Pencil, Trash2, Check } from "lucide-react";
// import PageHeader from "../components/PageHeader";

// const Products = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const token = localStorage.getItem("adminToken");
//     try {
//       const res = await fetch(
//         "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/products",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await res.json();
//       setProducts(data.data || []);
//       console.log(data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <PageHeader
//         title="Products"
//         breadcrumb={[{ label: "Home", link: "#" }, { label: "Products" }]}
//       />

//       <div className="flex gap-4 flex-col lg:flex-row">
//         <div className="flex-1 w-full bg-white p-4 shadow rounded">
//           <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#003b19]">
//             Product List
//           </h2>

//           {loading ? (
//             <p className="text-center text-gray-500 py-6">Loading...</p>
//           ) : (
//             <>
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-100 text-left">
//                     <th className="p-2">
//                       <input type="checkbox" />
//                     </th>
//                     <th className="p-2 text-[#003b19] font-semibold">Image</th>
//                     <th className="p-2 text-[#003b19] font-semibold">
//                       Product Name
//                     </th>
//                     <th className="p-2 text-[#003b19] font-semibold">Model</th>
//                     <th className="p-2 text-[#003b19] font-semibold">Price</th>
//                     <th className="p-2 text-[#003b19] font-semibold">
//                       Quantity
//                     </th>
//                     <th className="p-2 text-[#003b19] font-semibold">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentProducts.length > 0 ? (
//                     currentProducts.map((p, i) => (
//                       <tr key={i} className="border-t items-center">
//                         <td className="p-2">
//                           <input type="checkbox" />
//                         </td>

//                         <td className="p-2 text-sm">
//                           {p.image ? (
//                             <img
//                               src={`https://devshub.easeesqueezy.com/easeesqueezy_backend/writable/uploads/${p.image}`}
//                               // src="/adminImages/d1.png"
//                               alt={p.name}
//                               className="w-[50px] h-[50px] object-cover rounded"
//                             />
//                           ) : (
//                             <span className="text-gray-400">No image</span>
//                           )}
//                         </td>

//                         <td className="p-2 text-sm">
//                           <span>{p.product_name}</span>
//                           <div
//                             className={`text-sm ${
//                               p.status == "1"
//                                 ? "text-green-600"
//                                 : "text-red-500"
//                             }`}
//                           >
//                             {p.status == "1" ? (
//                               <span>Active</span>
//                             ) : (
//                               <span>Inactive</span>
//                             )}
//                           </div>
//                         </td>
//                         <td className="p-2 text-sm">
//                           <div className="text-[#003b19]">{p.model}</div>
//                         </td>
//                         <td className="p-2 text-sm">
//                           {p.special_price ? (
//                             <>
//                               <div className="text-red-500 line-through">
//                                 {Number(p.price).toFixed(2)}
//                               </div>
//                               <div className="text-green-600">
//                                 {Number(p.special_price).toFixed(2)}
//                               </div>
//                             </>
//                           ) : (
//                             <div className="text-green-600">
//                               {Number(p.price).toFixed(2)}
//                             </div>
//                           )}
//                         </td>

//                         <td className="p-2 text-sm">
//                           <span
//                             className={`px-1 py-0 rounded text-sm text-white ${
//                               Number(p.quantity) >= 50
//                                 ? "bg-green-500"
//                                 : Number(p.quantity) > 20
//                                 ? "bg-orange-400"
//                                 : "bg-red-500"
//                             }`}
//                           >
//                             {p.quantity}
//                           </span>
//                         </td>

//                         <td className="p-2 flex gap-1 items-center">
//                           <button
//                             onClick={() => navigate(`/admin/products/${p.id}`)}
//                             className="bg-[#003b19] p-2 rounded text-white"
//                           >
//                             <Pencil size={16} />
//                           </button>
//                           <button className="bg-red-500 p-2 rounded text-white">
//                             <Trash2 size={16} />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="7">
//                         <h1 className="text-center py-6 text-red-500 text-3xl font-bold">
//                           No Product Found
//                         </h1>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <button
//                   onClick={() =>
//                     setCurrentPage((prev) => Math.max(prev - 1, 1))
//                   }
//                   disabled={currentPage === 1}
//                   className="px-3 py-1 border rounded disabled:opacity-50"
//                 >
//                   Prev
//                 </button>

//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`px-3 py-1 border rounded ${
//                       currentPage === i + 1
//                         ? "bg-[#003b19] text-white"
//                         : "bg-white"
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() =>
//                     setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                   }
//                   disabled={currentPage === totalPages}
//                   className="px-3 py-1 border rounded disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Logs } from "lucide-react";
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
        breadcrumb={[{ label: "Home", link: "#" }, { label: "Products" }]}
      />

      <div className="flex gap-4 flex-col lg:flex-row border">
        <div className="flex-1 w-full bg-white p-4 shadow rounded">
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
