import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ProductProvider>
  );
}

export default App;
