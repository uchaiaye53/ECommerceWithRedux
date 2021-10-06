import React, { useContext } from "react";
import { ProductList } from "../contextAPI/Context";
import { ProductCard } from "./ProductCard";

function Product() {
  const [products] = useContext(ProductList);

  return (
    <>
      <div className=" bg-blue-100">
          <div className="grid xl:grid-cols-4 gap-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div> 
    </>
  );
}

export default Product;
