import { Add_TO_Cart, Empty_Cart, Remove_From_Cart } from "../const";

const initial = 0;

export const Cart = (state = initial, action) => {
  switch (action.type) {
    case Add_TO_Cart:
      console.log("reducer Add_TO_Cart called ", action);
      return state + 1;
      break;
    case Remove_From_Cart:
      console.log("reducer Remove_From_Cart called ", action);
      return state > 0 ? state - 1 : 0;
      break;
    case Empty_Cart:
      console.log("reducer Empty_Cart called ", action);
      return (state = 0);
      break;
    default:
      return state;
  }
};
