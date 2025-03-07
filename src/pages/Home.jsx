import React, { useEffect } from "react";
import Searchform from "../components/Searchform";
import TrendingCoins from "../components/TrendingCoins";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const Home = () => {
  let theme = true;
  const {isLoading} = useSelector(state=> state.coins)
  const navigate = useNavigate()
  const {isError,message,user} = useSelector(state => state.auth)

  
      useEffect(() => {
    
        if (!user) {
          navigate("/login");
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


  return (
    <div
      className={
        theme
          ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh] flex items-center justify-center flex-col "
          : "  py-16 px-8 md:px-16 min-h-[90vh] flex items-center justify-center flex-col "
      }
    >
      <Searchform />
      <TrendingCoins/>
    </div>
  );
};

export default Home;
