import React from "react";
import useProduct from "../contexts/ProductContext.jsx";
import ProductCard from "./homePage/ProductCard.jsx";
import filterByCategory from "../utils/filterByCategory.js";

function RelatedProducts({ category }) {
  const { products, loading } = useProduct();

  const filteredProducts = filterByCategory(products, category);

  const relatedProduts = filteredProducts?.slice(0, 4);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
      {relatedProduts?.map((product) => (
        <ProductCard
          key={product?.id}
          sku={product?.sku}
          src={product?.image_path}
          title={product?.name}
          description={(product?.description || "").slice(0, 60)}
          price={product?.price}
          discount_price={product?.discount_price}
          product={product}
        />
      ))}
    </div>
  );
}

export default RelatedProducts;
