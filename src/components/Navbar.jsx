import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const {user} = useSelector(state => state.auth)
  let theme = true;
const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.carts)

  const handleLogOut = () => {
    dispatch(logOutUser())
  }
 
  return (
    <nav
      className={
        theme
          ? "w-full py-3 px-10 md:px-16 flex justify-between shadow-2xl border-b border-gray-800 bg-gray-900"
          : "w-full py-3 px-10 md:px-16 shadow-2xl flex justify-between "
      }
    >
      <Link to={"/"} className="text-green-500 text-xl uppercase font-black">
        <span className="text-blue-500">Crypto</span>-Mart
      </Link>
      <span className="flex items-center gap-4">
        {!user ? (
          <>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 px-2 py-2 md:px-4 md:py-2 rounded-sm text-white text-sm font-medium transition-colors duration-200"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-4 md:py-2 rounded-sm text-sm font-medium transition-colors duration-200"
            >
              Login
            </Link>{" "}
          </>
        ) : (
          <>
          <button  onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-sm text-sm font-medium transition-colors duration-200">
            Log Out
          </button>
          <Link to={"/cart"} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-sm text-sm font-medium transition-colors duration-200">
            Cart ({cartItems.length})
          </Link>
          </>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
