import { Product_List } from "../const";

const initial = 0;

export const ProductListReducer = (state = initial, action) => {
  switch (action.type) {
    case Product_List:
      console.log("reducer Product_List called ", action);
      return action.data;
    default:
      return state;
  }
};
