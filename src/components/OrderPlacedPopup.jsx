import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Confetti from "react-confetti";

function OrderPlacedPopup({ setShowOrderPlacedPopup, orderDetail }) {
  const userDetail = orderDetail?.formData;
  const orderItems = orderDetail?.orderItems;

  const navigate = useNavigate();

  const totalCalculatedPrice = orderItems?.reduce(
    (accumulator, currentItem) => accumulator + currentItem.total_price,
    0,
  );

  function handleClosePopup() {
    setShowOrderPlacedPopup(false);
    navigate("/");
  }

  return (
    <div className="w-full h-screen fixed inset-0 bg-black/90 z-50">
      <div className="w-full h-full flex justify-center">
        <div className="relative top-10 w-[80%] sm:w-[50%] xl:w-[50%] h-[90%] bg-[#f9ecdc] overflow-y-scroll rounded-xl px-3 py-5 lg:p-10 border-4 border-[#B88E2F]">
          <div className="flex flex-col gap-10">
            <p className="text-green-700 lg:text-xl font-semibold text-center">
              Your Order Placed Successfully
            </p>

            <div>
              <p className="text-lg md:text-xl font-medium mb-2">
                User Details:
              </p>
              <div className="flex flex-col items-start justify-between">
                <table className="min-w-max text-sm md:text-base">
                  <tbody>
                    <tr>
                      <td className="font-medium pr-2">Full Name</td>
                      <td className="font-medium pr-2">:</td>
                      <td>{userDetail.fullName}</td>
                    </tr>
                    <tr>
                      <td className="font-medium pr-2">Email</td>
                      <td className="font-medium pr-2">:</td>
                      <td>{userDetail.email}</td>
                    </tr>
                    <tr>
                      <td className="font-medium pr-2">Mobile</td>
                      <td className="font-medium pr-2">:</td>
                      <td>{userDetail.mobile}</td>
                    </tr>
                    <tr>
                      <td className="font-medium pr-2">Address</td>
                      <td className="font-medium pr-2">:</td>
                      <td>{userDetail.address}</td>
                    </tr>
                    <tr>
                      <td className="font-medium pr-2">Country</td>
                      <td className="font-medium pr-2">:</td>
                      <td>{userDetail.country}</td>
                    </tr>
                    <tr>
                      <td className="font-medium pr-2">Zip Code</td>
                      <td className="font-medium pr-2">:</td>
                      <td>{userDetail.zipCode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="text-lg md:text-xl font-medium mb-2">
                Order Details:
              </p>
              {orderItems?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-col items-start mb-3">
                    <p className="text-sm md:text-base font-medium">
                      {item.name}
                    </p>
                    <p className="max-md:text-xs text-gray-500">
                      Quantity: {item.product_count}
                    </p>
                  </div>
                  <div className="text-sm lg:text-base">
                    ${item.total_price}
                  </div>
                </div>
              ))}
              <hr className="w-full text-gray-400 mt-1 mb-3" />

              <div className="w-full flex items-center justify-between text-xl">
                <p className="font-medium">Total</p>
                <p className="font-medium">${totalCalculatedPrice}</p>
              </div>
            </div>
          </div>
        </div>

        <Confetti className="w-full h-full" />
      </div>
      <div
        onClick={() => handleClosePopup()}
        className="absolute top-3 lg:top-10 right-3 lg:right-10 cursor-pointer"
      >
        <X className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
      </div>
    </div>
  );
}

export default OrderPlacedPopup;
