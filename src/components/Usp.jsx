import React from "react";
import {
  Trophy,
  Guarantee,
  Shipping,
  Customer_Support,
} from "../assets/images.js";

function Usp() {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 bg-[#F9F1E7] px-6 sm:px-10 md:px-16 xl:px-20 py-20 md:py-30">
      <div className="flex md:flex-col xl:flex-row items-center justify-start gap-3">
        <div className="w-[60px] h-[60px]">
          <img className="max-h-full" src={Trophy} alt="Trophy" />
        </div>
        <div className="md:text-center xl:text-left">
          <p className="font-semibold text-xl xl:text-2xl">High Quality</p>
          <p className="font-medium text-base xl:text-lg text-[#898989]">
            crafted from top materials
          </p>
        </div>
      </div>

      <div className="flex md:flex-col xl:flex-row items-center justify-start gap-3">
        <div className="w-[60px] h-[60px]">
          <img className="max-h-full" src={Guarantee} alt="Guarantee" />
        </div>
        <div className="md:text-center xl:text-left">
          <p className="font-semibold text-xl xl:text-2xl">Warranty Protection</p>
          <p className="font-medium text-base xl:text-lg text-[#898989]">
            Over 2 years
          </p>
        </div>
      </div>

      <div className="flex md:flex-col xl:flex-row items-center justify-start gap-3">
        <div className="w-[60px] h-[60px]">
          <img className="max-h-full" src={Shipping} alt="Shipping" />
        </div>
        <div className="md:text-center xl:text-left">
          <p className="font-semibold text-xl xl:text-2xl">Free Shipping</p>
          <p className="font-medium text-base xl:text-lg text-[#898989]">
            Order over 150 $
          </p>
        </div>
      </div>

      <div className="flex md:flex-col xl:flex-row items-center justify-start gap-3">
        <div className="w-[60px] h-[60px]">
          <img className="max-h-full" src={Customer_Support} alt="Customer_Support" />
        </div>
        <div className="md:text-center xl:text-left">
          <p className="font-semibold text-xl xl:text-2xl">24 / 7 Support</p>
          <p className="font-medium text-base xl:text-lg text-[#898989]">
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
}

export default Usp;
