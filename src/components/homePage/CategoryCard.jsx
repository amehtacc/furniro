import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ src1, src2, text }) {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  const category = text.toLowerCase();

  function handleCategory() {
    navigate(`/shop?category=${category}`);
  }

  return (
    <div className="relative w-full max-w-[380px] flex flex-col items-center justify-center gap-6">
      {/* Image */}
      <div
        onClick={handleCategory}
        className="relative w-full aspect-3/4 rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100"
          src={src1}
          alt={text}
        />

        <img
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
            onHover ? "opacity-100" : "opacity-0"
          }`}
          src={src2}
          alt={text}
        />
      </div>

      {/* Text */}
      <p className="font-semibold text-2xl">{text}</p>
    </div>
  );
}

export default CategoryCard;
