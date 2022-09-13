import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTOCart,
  EmptyCart,
  RemoveFromCart,
} from "../Redux/action/cartAction";
import { productListAction } from "../Redux/action/productAction";

const Main = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  console.log("result", result);
  const product = {
    mobile: "redme",
  };

  return (
    <>
      <button
        className="btn btn-outline-success d-block mx-auto my-3"
        onClick={() => {
          dispatch(addTOCart(product));
        }}
      >
        Add
      </button>

      <button
        className="btn btn-outline-success d-block mx-auto my-3"
        onClick={() => {
          dispatch(RemoveFromCart(product));
        }}
      >
        Remove
      </button>
      <button
        className="btn btn-outline-success d-block mx-auto my-3"
        onClick={() => {
          dispatch(EmptyCart(product));
        }}
      >
        Empty
      </button>

      <button
        className="btn btn-outline-success d-block mx-auto my-3"
        onClick={() => {
          dispatch(productListAction());
        }}
      >
        All List
      </button>
    </>
  );
};

export default Main;
