import axios from "axios";

const API_URL = 'https://authenticationeskills.vercel.app/api/user'

const register = async (formdata) => {
    const responce = await axios.post(API_URL + "/register",formdata)
    localStorage.setItem('user',JSON.stringify(responce.data))
    return responce.data
};

const login = async (formdata) => {
    const responce = await axios.post(API_URL + "/login",formdata)
    localStorage.setItem('user',JSON.stringify(responce.data))
    return await responce.data
};


const authService = { register,login};

export default authService