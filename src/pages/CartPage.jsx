import React from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Shop_Hero_Image } from "../assets/images.js";

function CartPage() {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);

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

      <section className="relative text-2xl w-full mx-auto px-10 md:px-16 xl:px-20 py-30 flex items-center justify-center">Work In Progress...</section>
    </div>
  );
}

export default CartPage;
