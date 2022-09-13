import { Product_List } from "../const";

export const productListAction = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = await data.json();
  console.warn("action is called", data);

  return {
    type: Product_List,
    data,
  };
};
