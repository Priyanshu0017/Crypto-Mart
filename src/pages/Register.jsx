import React, { useEffect, useState } from "react";
import cryptoimg from "../assets/crypto-img-1.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  let theme = true;
  const dispatch = useDispatch();
  const { user, isLoading, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { name, email, password, confirm_password } = formData;

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      toast.error("Password Mismatch!!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // Dispatch your register action here
      dispatch(registerUser(formData))
    }
  };

  useEffect(() => {

    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isError, message,user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={
        theme
          ? "py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
          : "py-16 px-8 md:px-16 min-h-[90vh]"
      }
    >
      <div className="shadow border border-gray-300 rounded-sm flex flex-col md:flex-row justify-between items-center p-5">
        <div className="w-full md:w-1/2">
          <h1 className="my-3 uppercase font-bold text-3xl ml-2 text-gray-500">
            Register Here
          </h1>
          <p className="my-2 ml-1 text-sm text-gray-500">Kindly enter Your Details</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className={
                theme
                  ? "border-2  bg-gray-900 border-gray-700 p-2 w-full my-2 text-white rounded-md placeholder:text-gray-500"
                  : "border-2 bg-white  placeholder:text-gray-500 border-gray-300 p-2 w-full my-2 rounded-md"
              }
              type="text"
              placeholder="Enter Your name"
              required
              name="name"
              value={name}
              onChange={(e) => HandleChange(e)}
            />
            <input
              className={
                theme
                  ? "border-2 bg-gray-900 border-gray-700 p-2 w-full my-2 text-white rounded-md placeholder:text-gray-500"
                  : "border-2 bg-white placeholder:text-gray-500 border-gray-300 p-2 w-full my-2rounded-md"
              }
              type="email"
              placeholder="Enter Your Email"
              required
              name="email"
              value={email}
              onChange={(e) => HandleChange(e)}
            />
            <input
              className={
                theme
                  ? "border-2 bg-gray-900 border-gray-700 p-2 w-full my-2 text-white rounded-md placeholder:text-gray-500"
                  : "border-2 bg-white placeholder:text-gray-500 border-gray-300 p-2 w-full my-2  rounded-md"
              }
              type="password"
              placeholder="Enter Your Password"
              required
              name="password"
              value={password}
              onChange={(e) => HandleChange(e)}
            />
            <input
              className={
                theme
                  ? "border-2 bg-gray-900 border-gray-700 p-2 w-full my-2 text-white rounded-md placeholder:text-gray-500"
                  : "border-2 bg-white placeholder:text-gray-500 border-gray-300 p-2 w-full my-2 rounded-md"
              }
              type="password"
              placeholder="Confirm Password"
              required
              name="confirm_password"
              value={confirm_password}
              onChange={(e) => HandleChange(e)}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 duration-200 p-2 rounded-md text-white w-full font-bold my-3 md:w-1/2"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="Image w-1/2 hidden md:block">
          <img className="md:h-96" src={cryptoimg} alt="crypto img" />
        </div>
      </div>
    </div>
  );
};

export default Register;