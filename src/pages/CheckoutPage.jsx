import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Shop_Hero_Image } from "../assets/images.js";
import Usp from "../components/Usp.jsx";
import useCart from "../contexts/CartContext.jsx";
import Button from "../components/Button.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import OrderPlacedPopup from "../components/OrderPlacedPopup.jsx";

function CheckoutPage() {
  const [showOrderPlacedPopup, setShowOrderPlacedPopup] = useState(false);
  const [orderDetail, setOrderDetail] = useState();
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);

  const { cart } = useCart();

  const totalCalculatedPrice = cart?.reduce(
    (accumulator, currentItem) => accumulator + currentItem.total_price,
    0,
  );

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

      <section className="w-full h-full px-10 md:px-20 xl:px-30 py-20">
        <h4 className="font-semibold text-3xl text-left mb-10">
          Billing details
        </h4>
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-20">
          <div className="w-full md:w-[60%] flex flex-col items-start">
            <div className="w-full">
              <CheckoutForm
                setShowOrderPlacedPopup={setShowOrderPlacedPopup}
                setOrderDetail={setOrderDetail}
              />
              {showOrderPlacedPopup && (
                <OrderPlacedPopup
                  setShowOrderPlacedPopup={setShowOrderPlacedPopup}
                  orderDetail={orderDetail}
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left pb-3">Product</th>
                  <th className="text-right pb-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item) => (
                  <tr key={item.id}>
                    <td className="text-left text-gray-500 text-sm pb-2">
                      <div className="flex items-center gap-3">
                        {item.name} <span className="text-black">x</span>{" "}
                        <span className="text-black">
                          {" "}
                          {item.product_count}
                        </span>
                      </div>
                    </td>
                    <td className="text-right text-gray-700 pb-2">
                      ${item.total_price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr className="w-full text-gray-400 mt-1 mb-3" />

            <div className="w-full flex items-center justify-between text-xl">
              <p className="font-medium">Total</p>
              <p className="font-medium">${totalCalculatedPrice}</p>
            </div>

            <div className="w-full mt-10">
              <Button
                type="submit"
                form="checkout-form"
                variant="outline"
                size="sm"
                className="w-full font-semibold"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <Usp />
      </section>
    </div>
  );
}

export default CheckoutPage;
