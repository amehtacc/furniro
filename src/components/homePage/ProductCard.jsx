import React, { useState } from "react";
import Button from "../Button";
import { Heart_Icon } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import useCart from "../../contexts/CartContext";

function ProductCard({
  sku,
  src,
  title,
  description,
  price,
  discount_price,
  product,
}) {
  const [onHover, setOnHover] = useState(false);
  const { cart, setCart } = useCart();

  const navigate = useNavigate();

  const cartItems = cart;

  function handleViewProduct() {
    navigate(`/shop/${sku}`);
  }

  function handleAddToCart() {
    const hasProduct = cartItems.find((item) => item.id === product.id);

    if (hasProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, productCount: item.productCount + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, productCount: 1 }]);
    }
  }

  return (
    <div
      className="relative w-full max-w-71 h-full shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out bg-[#F4F5F7] flex flex-col items-center justify-start gap-3"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {/* Overlay on hover */}
      <div
        className={`absolute inset-0 bg-black flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ease-in-out ${
          onHover ? "bg-black/80" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="font-semibold"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="font-semibold"
          onClick={handleViewProduct}
        >
          View details
        </Button>

        <Button className="flex items-center justify-center gap-1 absolute top-4 right-4">
          <img className="w-4 h-4" src={Heart_Icon} alt="Heart_Icon" />
          <span className="text-white text-sm font-semibold">Like</span>
        </Button>
      </div>

      {/* Product image */}
      <div className="w-full h-75">
        <img className="w-full h-full object-cover" src={src} alt={title} />
      </div>

      {/* Product details */}
      <div className="w-full flex flex-col gap-3 px-3 pt-2 pb-5">
        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-xl text-black leading-6">{title}</h4>
          <p className="font-medium text-sm text-[#898989]">
            {description}
            {"..."}
          </p>
        </div>
        <div className="font-medium text-xl text-[#353535] flex items-end justify-start leading-none">
          ${discount_price}
          <span className="pl-5 text-sm text-[#545454] font-normal leading-none flex items-center">
            List Price:
            <span className="line-through pl-1">${price}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
