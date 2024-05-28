import React, { createContext, useContext, useReducer } from "react";
import JSONData from "../Shopping-cart.json"
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products:JSONData,
    cart:[]
  })
    

console.log(JSONData)
  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart)
}
