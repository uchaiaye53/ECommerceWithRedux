import { createContext, useEffect, useState } from "react";

const ProductList = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const productData = await response.json();
    localStorage.setItem("productData", JSON.stringify(productData));
    setProducts(productData);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <ProductList.Provider value={[products, setProducts]}>
        {children}
      </ProductList.Provider>
    </>
  );
};

export default Context;

export { ProductList };
