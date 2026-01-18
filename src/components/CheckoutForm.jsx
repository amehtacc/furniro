import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "./Input";
import CheckoutPopup from "./OrderPlacedPopup.jsx";
import useCart from "../contexts/CartContext.jsx";

function CheckoutForm({ setShowOrderPlacedPopup, setOrderDetail }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    zipCode: "",
  });

  const { cart, setCart } = useCart();

  function handleSubmitUserDetail(e) {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.address.trim() ||
      !formData.country.trim() ||
      !formData.zipCode.trim()
    ) {
      return toast.error("All fields are required!");
    }

    if (formData.mobile.trim().length < 10) {
      return toast.error("Invalid mobile number!");
    }

    setOrderDetail({ formData: formData, orderItems: cart });
    setShowOrderPlacedPopup(true);

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      country: "",
      zipCode: "",
    });

    localStorage.removeItem("cart")
    setCart([]);

  }

  return (
    <form
      onSubmit={handleSubmitUserDetail}
      id="checkout-form"
      className="relative w-full flex flex-col items-center justify-center gap-7"
    >
      <Input
        id="fullName"
        type="text"
        label="Full Name"
        placeholder="Enter your fullname"
        value={formData.fullName}
        setValue={setFormData}
        required
      />
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        setValue={setFormData}
        required
      />
      <Input
        id="address"
        type="text"
        label="Address"
        placeholder="Enter your address"
        value={formData.address}
        setValue={setFormData}
        required
      />
      <div className="w-full flex items-center justify-center gap-7">
        <Input
          id="country"
          type="text"
          label="Country"
          placeholder="Enter your country"
          value={formData.country}
          setValue={setFormData}
          required
        />
        <Input
          id="zipCode"
          type="text"
          label="Zip Code"
          placeholder="Enter your zip code"
          value={formData.zipCode}
          setValue={setFormData}
          required
        />
      </div>
      <Input
        id="mobile"
        type="text"
        label="Mobile Number"
        placeholder="Enter your mobile number"
        value={formData.mobile}
        setValue={setFormData}
        required
      />
    </form>
  );
}

export default CheckoutForm;
