import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
} from "../actionType/cartActionType";

export default function cartActionReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      let tempProducts = [...state];
      const pos = tempProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      tempProducts.splice(pos, 1);

      localStorage.setItem("cart", JSON.stringify(tempProducts));
      return tempProducts;

    case CLEAR_CART:
      return [];

    case REMOVE_CART_ITEM:
      const tempCartProducts = state.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(tempCartProducts));
      return tempCartProducts;

    default:
      return state;
  }
}
