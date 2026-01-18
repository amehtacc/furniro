import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Search } from "lucide-react";
import filterBySearch from "../utils/filterBySearch.js";
import useProduct from "../contexts/ProductContext.jsx";

function SearchOverlay({ setSearchOverlay }) {
  const [searchValue, setSearchValue] = useState("");
  const { products } = useProduct();
  const navigate = useNavigate();

  const searchedProducts = filterBySearch(searchValue, products) || [];

  function handleViewProduct(product) {
    navigate(`/shop/${product.sku}`);
    setSearchOverlay(false);
    setSearchValue("");
  }

  return (
    <div className="w-full h-screen absolute inset-0 bg-black/90 z-50">
      <div className="relative w-full h-full flex justify-center">
        <div className="w-[80%] sm:w-[50%] xl:w-[30%] relative top-20 lg:top-40">
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search prodcut here..."
              className="w-full outline-none bg-[#f7e4ce] p-3 rounded-l-md text-lg"
            />
            <div className="bg-white p-2.5 rounded-r-md cursor-pointer">
              <Search className="w-8 h-8" />
            </div>
          </div>

          {searchedProducts.length > 0 && (
            <div className="bg-[#F9F1E7] p-5 rounded-md max-h-[300px] lg:max-h-[400px] overflow-y-auto">
              {searchedProducts?.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleViewProduct(product)}
                  className="w-full flex items-center justify-between rounded-md mb-3 border border-gray-400 px-3 py-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
                >
                  <div className="flex items-center justify-start gap-3">
                    <img
                      src={product.image_path}
                      alt={product.name}
                      className="w-8 h-8 rounded-md"
                    />
                    <p className="text-gray-500 text-sm">{product.name}</p>
                  </div>
                  <p className="text-gray-700">${product.discount_price}</p>
                </div>
              ))}
            </div>
          )}

          {searchValue && searchedProducts.length === 0 && (
            <div className="bg-[#F9F1E7] p-5 rounded-md flex items-center justify-center">
              No product found
            </div>
          )}
        </div>

        <div
          className="absolute top-5 right-5 lg:top-10 lg:right-10 cursor-pointer"
          onClick={() => setSearchOverlay(false)}
        >
          <X className="text-white w-6 lg:w-8 h-6 lg:h-8" />
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;