import React from "react";
import CartItem from "./CartItem";
import BillCard from "../components/BillCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const theme = true;
  const { cartItems } = useSelector((state) => state.carts);

  if (cartItems.length === 0) {
    return (
      <div
        className={
          theme
            ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
            : "  py-16 px-8 md:px-16 min-h-[90vh]"
        }
      >
        <h1 className="my-5 text-2xl text-gray-600 text-center font-bold"> No Items In Your Cart </h1>
      </div>
    );
  }

  return (
    <div
      className={
        theme
          ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
          : "  py-16 px-8 md:px-16 min-h-[90vh]"
      }
    >
      <div className="grid p-4 rounded-sm border gap-4 border-gray-400 grid-cols-1 md:grid-cols-3">
        <div className="border  border-gray-400 rounded-md p-5 col-span-1 md:col-span-2">
          {cartItems.map((cart) => (
            <CartItem key={cart.id} cart={cart} />
          ))}
        </div>
        <BillCard cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
