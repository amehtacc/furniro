import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import {
  Hero_Image,
  Dining_1,
  Dining_2,
  Living_1,
  Living_2,
  Bedroom_1,
  Bedroom_2,
} from "../assets/images.js";
import CategoryCard from "../components/homePage/CategoryCard.jsx";
import ProductCard from "../components/homePage/ProductCard.jsx";
import useProduct from "../contexts/ProductContext.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

function Home() {
  const { products, loading, error } = useProduct();
  const productData = (products || []).slice(0, 8);
  
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center px-16 xl:px-35 pt-20 pb-10 xl:pb-30 flex items-end justify-end"
        style={{ backgroundImage: `url(${Hero_Image})` }}
      >
        <div className="absolute w-120 xl:w-150 h-auto bg-[#FFF3E3] px-10 pb-10 pt-14">
          <div className="w-full h-full flex flex-col items-start gap-10">
            <div>
              <p className="text-[#333333] font-semibold tracking-[3px] mb-2">
                New Arrival
              </p>
              <h2 className="text-[#B88E2F] font-bold text-5xl mb-5">
                Discover Our <br /> New Collection
              </h2>
              <p className="text-[#333333] font-medium text-lg">
                Discover thoughtfully crafted pieces designed for modern living.
                Where comfort meets timeless style.
              </p>
            </div>
            <a href="#products">
              <Button variant="primary" size="lg" className="font-bold">
                BUY NOW
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="relative w-full mx-auto px-10 md:px-16 xl:px-20 py-30">
        <div className="w-full text-center mx-auto mb-16">
          <h3 className="font-bold text-[2rem]">Browse The Range</h3>
          <p className="text-lg text-[#666666]">
            Explore our full range of styles and find the perfect pieces for
            every room.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          <CategoryCard src1={Dining_1} src2={Dining_2} text="Dining" />
          <CategoryCard src1={Living_1} src2={Living_2} text="Living" />
          <CategoryCard src1={Bedroom_1} src2={Bedroom_2} text="Bedroom" />
        </div>
      </section>

      {/* Products section */}
      <section
        id="products"
        className="relative w-full mx-auto px-10 md:px-16 xl:px-20 pb-30 pt-10"
      >
        <div className="w-full text-center mx-auto mb-16">
          <h3 className="font-bold text-[2rem]">Our Products</h3>
          <p className="text-lg text-[#666666]">
            Discover quality products designed for everyday living..
          </p>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
            {productData?.map((product, index) => (
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
        )}

        {!loading && (
          <div className="w-full flex items-center justify-center mt-20">
            <Link to="/shop">
              <Button variant="outline" size="sm" className="font-semibold">
                Show More
              </Button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
