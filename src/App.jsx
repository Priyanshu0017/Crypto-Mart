import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SearchPage from "./pages/SearchPage";
import CoinPage from "./pages/CoinPage";
import PrivateRoute from "./components/PrivateRoute";
import ThemeBtn from "./components/ThemeBtn";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PrivateRoute/>}>
        
        <Route path="" element={<Home/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="coin/search/:searchquery" element={<SearchPage/>}></Route>
        <Route path="coin/:id" element={<CoinPage/>}></Route>
        
        </Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <ThemeBtn/>
      <ToastContainer/>
    </Router>
  );
};

export default App;
