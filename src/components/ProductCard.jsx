import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../redux/action/cartAction";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state);

  const [count, setCount] = useState(
    cartProducts.filter((item) => item.id === product.id).length
  );

  useEffect(
    () =>
      setCount(cartProducts.filter((item) => item.id === product.id).length),
    [cartProducts, product.id]
  );

  return (
    <div>
      <div className="py-10 mx-5">
        <div className="rounded overflow-hidden shadow-lg max-w-xs p-2 bg-gray-100 space-y-5">
          <img src={product.image} alt="1st pic" className="w-full h-80" />
          <p className="h-20">{product.title}</p>
          <p>${product.price}</p>

          {count ? (
            <div className="flex flex-row justify-around bg-blue-300 rounded-xl">
              <button
                onClick={() =>
                  dispatch(addToCart({ ...product, count: count }))
                }
              >
                {" "}
                <i className="fa fa-plus pt-4 text-4xl text-gray-500 mx-7"></i>
              </button>
              <p className="mt-5 text-gray-700 text-xl">{count}</p>
              <button
                onClick={() => count && dispatch(removeFromCart(product.id))}
              >
                {" "}
                <i className="fa fa-minus pt-4 text-4xl text-gray-500 mx-7"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addToCart({ ...product, count: count }))}
              className="bg-blue-600 text-gray-50 w-full pt-3 pb-3 rounded-2xl hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
