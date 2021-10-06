import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
} from "../actionType/cartActionType";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function removeCartItem(id) {
  return {
    type: REMOVE_CART_ITEM,
    payload: {
      id,
    },
  };
}
