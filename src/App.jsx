import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
