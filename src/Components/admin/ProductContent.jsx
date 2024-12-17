import React, { useState } from "react";

function ProductsContent() {
  const [foodMenu, setFoodMenu] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      status: "Available",
      price: "250",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Caesar Salad",
      category: "Salad",
      status: "Unavailable",
      price: "250",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Grilled Chicken",
      category: "Main Course",
      status: "Available",
      price: "$12",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ]);

  // Function to delete a product
  const handleDelete = (id) => {
    setFoodMenu(foodMenu.filter((item) => item.id !== id));
  };

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setFoodMenu(
      foodMenu.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Products</h1>

      {/* Button to Add Product */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 ml-auto block hover:bg-blue-600">
        Add New Product
      </button>

      {/* Table for Product List */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-950 text-white uppercase text-sm">
              <th className="py-3 px-6 text-left">Food Item</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
                      {foodMenu.map((item) => (
                          <tr
                              key={item.id}
                              className="border-b last:border-none hover:bg-green-100"
                          >
                              <td className="py-3 px-6 flex items-center">
                                  <img
                                      src={item.img}
                                      alt={item.name}
                                      className="w-12 h-12 rounded-md mr-3 object-cover"
                                  />
                                  <div>
                                      <p className="font-medium">{item.name}</p>
                                  </div>
                              </td>
                              <td className="py-3 px-6">{item.category}</td>
                              <td className="py-3 px-6">
                                  <select
                                      value={item.status}
                                      onChange={(e) =>
                                          handleStatusChange(item.id, e.target.value)
                                      }
                                      className="py-1 px-3 rounded-full text-xs border"
                                  >
                                      <option value="Available">Available</option>
                                      <option value="Unavailable">Unavailable</option>
                                      <option value="Out of Stock">Out of Stock</option>
                                  </select>
                              </td>
                              <td className="py-3 px-6">{item.price}</td>
                              <td className="py-3 px-6 text-center">
                                  {/* Edit Link */}
                                  <a href="#" className="text-blue-500 hover:underline mr-4">
                                      Edit
                                  </a>
                                  {/* Delete Button */}
                                  <button
                                      onClick={() => handleDelete(item.id)}
                                      className="text-red-500 hover:text-red-700"
                                  >
                                      Delete
                                  </button>
                              </td>
                          </tr>
                      ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsContent;
