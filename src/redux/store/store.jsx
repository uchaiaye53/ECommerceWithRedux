import { createStore } from "redux";
import cartActionReducer from "../reducer/cartActionReducer";

const store = createStore(cartActionReducer);

export default store;
