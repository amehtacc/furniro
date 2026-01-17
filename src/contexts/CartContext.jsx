import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default function useCart() {
  return useContext(CartContext);
}
