import React, { useEffect, useState } from 'react'
import cryptoimg from '../assets/crypto-img-1.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { logInUser } from '../features/auth/authSlice';
import Loading from '../components/Loading';

const Login = () => {
  const theme = true
  
  const dispatch = useDispatch();
  const { user, isLoading, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formdata,setFormData] = useState({
    email : "",
    password : ""
  })
  const {email, password } = formdata

  const HandleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInUser(formdata))
  }

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
      return <Loading/>;
    }
  return (
    <div
    className={
      theme
        ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
        : "  py-16 px-8 md:px-16 min-h-[90vh]"
    }
  >
   
      <div className=" shadow border border-gray-300 rounded-sm flex flex-col md:flex-row justify-between items-center p-5">
        <div className='w-full md:w-1/2'>
        <h1 className="my-3 uppercase font-bold text-3xl ml-2 text-gray-500">Login</h1>
        <p className='my-2 ml-1 text-sm text-gray-500'>Kindly enter Your email and password</p>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input className={theme ? "border-2 bg-gray-900 border-gray-700 p-2 w-full my-2 text-white rounded-md placeholder:text-gray-500":"border-2 bg-white placeholder:text-gray-500 border-gray-300 p-2 w-full my-2 rounded-md  "}  type='email'
             placeholder='Enter Your Email'
              required
              name="email"
              value={email}
              onChange={ (e)=>HandleChange(e)}/>
            <input className={theme ? "border-2 bg-gray-900 border-gray-700 p-2 w-full my-2 text-white rounded-md placeholder:text-gray-500":"border-2 bg-white placeholder:text-gray-500 border-gray-300 p-2 w-full my-2 rounded-md  "} type='password' placeholder='Enter Your Password' required
            name="password"
            value={password}
            onChange={ (e)=>HandleChange(e)}
            />
            <button type='submit' className='bg-green-500 hover:bg-green-700 duration-200 p-2 rounded-md text-white w-full font-bold my-3 md:w-1/2'>Sign In</button>
        </form>
        </div>
        <div className='Image w-1/2 hidden md:block'>
            <img className='md:h-96' src={cryptoimg} alt="crypto img" />
        </div>
      </div>
    </div>
  )
}

export default Login
