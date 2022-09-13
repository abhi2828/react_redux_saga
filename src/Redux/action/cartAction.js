import { Add_TO_Cart, Empty_Cart, Remove_From_Cart } from "../const";

export const addTOCart = (data) => {
  console.log("action addTOCart called", data);

  return {
    type: Add_TO_Cart,
    data,
  };
};

export const RemoveFromCart = (data) => {
  console.log("action Remove_From_Cart called", data);

  return {
    type: Remove_From_Cart,
    data,
  };
};

export const EmptyCart = () => {
  console.log("action Empty_Cart called");

  return {
    type: Empty_Cart,
  };
};
