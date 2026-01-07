import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Logo_Full,
  Account_Alert,
  Search_Icon,
  Heart_Wishlist_Icon,
  Shopping_Cart_Icon,
} from "../assets/images.js";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScroll(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 mx-auto px-12 xl:px-20 py-5 flex items-center justify-center bg-white z-50 ${
        isScroll ? "shadow-md" : ""
      } transition-all duration-200 ease-in-out`}
    >
      <div className="w-full flex items-center justify-between">
        <div>
          <a href="#">
            <img className="w-auto h-9 xl:h-10" src={Logo_Full} alt="Logo" />
          </a>
        </div>
        <nav>
          <ul className="flex items-center justify-center text-base font-medium gap-8 xl:gap-18">
            <li>
              <Link to="/"  className="group relative">
                Home
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#797979] h-0.5 w-0 group-hover:w-full transition-all duration-200 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="group relative">
                Shop
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#797979] h-0.5 w-0 group-hover:w-full transition-all duration-200 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <a href="#" className="group relative">
                About
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#797979] h-0.5 w-0 group-hover:w-full transition-all duration-200 ease-in-out"></span>
              </a>
            </li>
            <li>
              <a href="#" className="group relative">
                Contact
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#797979] h-0.5 w-0 group-hover:w-full transition-all duration-200 ease-in-out"></span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-6 xl:gap-10">
          <a
            href="#"
            className="w-5 xl:w-6 h-5 xl:h-6 hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            <img
              className="w-full h-full"
              src={Account_Alert}
              alt="Account_Alert"
            />
          </a>
          <a
            href="#"
            className="w-5 xl:w-6 h-5 xl:h-6 hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            <img
              className="w-full h-full"
              src={Search_Icon}
              alt="Search_Icon"
            />
          </a>
          <a
            href="#"
            className="w-5 xl:w-6 h-5 xl:h-6 hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            <img
              className="w-full h-full"
              src={Heart_Wishlist_Icon}
              alt="Heart_Wishlist_Icon"
            />
          </a>
          <a
            href="#"
            className="w-5 xl:w-6 h-5 xl:h-6 hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            <img
              className="w-full h-full"
              src={Shopping_Cart_Icon}
              alt="Shopping_Cart_Icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
