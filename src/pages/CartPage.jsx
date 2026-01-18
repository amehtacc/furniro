import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Trash2 } from "lucide-react";
import { Shop_Hero_Image } from "../assets/images.js";
import Usp from "../components/Usp.jsx";
import useCart from "../contexts/CartContext.jsx";
import Button from "../components/Button.jsx";

function CartPage() {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);

  const navigate = useNavigate();

  const { cart, setCart } = useCart();

  const totalCalculatedPrice = cart?.reduce(
    (accumulator, currentItem) => accumulator + currentItem.total_price,
    0,
  );

  function handleDeleteItem(id) {
    setCart(cart?.filter((item) => item.id !== id));
  }

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

      <section className="w-full h-full px-10 xl:px-30 py-20">
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10">
          <div className="w-full md:w-[70%]">
            <table className="w-full table-auto">
              <thead className="bg-[#F9F1E7]">
                <tr>
                  <th className="p-5">Product</th>
                  <th className="p-5">Price</th>
                  <th className="p-5">Quantity</th>
                  <th className="p-5">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item) => (
                  <tr key={item.id} className="">
                    <td className="flex items-center gap-5 my-5 pl-5">
                      <img
                        className="w-14 h-14 rounded-md outline-none"
                        src={item.image_path}
                        alt={item.name}
                      />{" "}
                      <span className="text-gray-500 text-sm">{item.name}</span>
                    </td>
                    <td className="text-center text-gray-500">
                      ${item.discount_price}
                    </td>
                    <td className="text-center text-gray-500">
                      {item.product_count}
                    </td>
                    <td className="text-center text-lg">
                      <span>${item.total_price}</span>
                    </td>
                    <td className="pr-5">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="w-5 h-5 text-[#B88E2F]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-[30%] bg-[#F9F1E7] flex flex-col items-center justify-center gap-10 px-4 lg:px-7 pt-3 pb-7">
            <div className="w-full flex items-center justify-between">
              <h4 className="font-semibold text-lg lg:text-xl xl:text-3xl">Cart Total</h4>
              <span className="text-sm lg:text-base font-medium text-gray-700">
                ({cart.length} items)
              </span>
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-3">
              {cart?.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex items-center justify-between"
                >
                  <p className="text-gray-500 text-xs">{item.name}</p>
                  <p className="text-gray-700 text-sm">${item.total_price}</p>
                </div>
              ))}
              <hr className="w-full text-gray-400" />
              <div className="w-full flex items-center justify-between text-xl">
                <p className="font-medium">Total</p>
                <p className="font-medium">${totalCalculatedPrice}</p>
              </div>
            </div>

            <div className="w-full">
              <Button
                onClick={() =>
                  cart.length > 0 ? navigate("/checkout") : navigate("/shop")
                }
                variant="outline"
                size="sm"
                className="w-full font-semibold"
              >
                {cart.length > 0 ? "Proceed to Checkout" : "Shop Now"}
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

export default CartPage;
