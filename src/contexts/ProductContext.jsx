import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProducts } from "../services/products";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const allowedCategories = [
    "sofa",
    "kitchen",
    "tv table",
    "matress",
    "lamp",
    "wardrove",
    "mirror",
    "desk",
    "table",
  ];

  const LIMIT = 100;
  let offset = 0;

  async function getAllProducts() {
    try {
      setLoading(true);

      const filteredProdcuts = [];
      
      while (filteredProdcuts.length < 300) {
        const response = await getProducts(LIMIT, offset);
        const data = response.data.data;

        const matchedProducts = data.filter((product) =>
          allowedCategories.includes(product.category)
        );

        filteredProdcuts.push(...matchedProducts);
        setProducts(filteredProdcuts);

        offset += LIMIT;

        if (offset > 500) break;
        if (!data.length) break;
      }
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const value = useMemo(
    () => ({
      products,
      loading,
      error,
    }),
    [products, loading, error]
  );
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default function useProduct() {
  return useContext(ProductContext);
}
