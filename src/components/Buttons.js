import React from "react";
import { useDispatch } from "react-redux";
import { Add_TO_Cart } from "../Redux/const";

export const Add_TO_Cart_btn = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="btn btn-outline-success d-block mx-auto"
        onClick={() => {
          dispatch(Add_TO_Cart(product));
        }}
      >
        Add to cart
      </button>
    </>
  );
};
