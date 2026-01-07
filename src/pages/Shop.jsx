import React from "react";
import { Shop_Hero_Image } from "../assets/images.js";
import Usp from "../components/Usp.jsx";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductCard from "../components/homePage/ProductCard.jsx";
import useProduct from "../contexts/ProductContext.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import { useSearchParams } from "react-router-dom";
import filterByCategory from "../utils/filterByCategory.js";

function Shop() {
  const { products, loading, error } = useProduct();

  const { pathname } = useLocation();
  const pageName = pathname.slice(1);

  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")
  
  const productData = filterByCategory(products, category) || [];

  return (
    <div className="w-full h-full">
      <section className="w-full pt-20">
        <div
          className="relative w-full h-80 bg-center bg-cover"
          style={{ backgroundImage: `url(${Shop_Hero_Image})` }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-5 absolute inset-0 bg-white/40 backdrop-blur-xs">
            <h3 className="font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {pageName[0].toUpperCase()}
              {pageName.slice(1)}
            </h3>
            <p className="flex items-center justify-center gap-1">
              <span className="font-medium">Home</span>
              <ChevronRight className="w-5 h-5" />
              {pageName[0].toUpperCase()}
              {pageName.slice(1)}
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full mx-auto px-10 md:px-16 xl:px-20 py-30">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
            {productData?.map((product, index) => (
              <ProductCard
                key={product?.id}
                src={product?.image_path}
                title={product?.name}
                description={(product?.description || "").slice(0, 60)}
                price={product?.price}
              />
            ))}
          </div>
        )}
      </section>

      <section className="w-full">
        <Usp />
      </section>
    </div>
  );
}

export default Shop;
