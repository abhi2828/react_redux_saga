import { combineReducers } from "redux";

import { Cart } from "./reducer/cartReducer";
import { ProductListReducer } from "./reducer/productReducer";
export default combineReducers({ Cart, ProductListReducer });
