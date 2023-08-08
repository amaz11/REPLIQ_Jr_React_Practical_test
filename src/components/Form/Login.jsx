import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BaseApi from '../../axios/BaseApi';

const Login = () => {
  const [input, setInput] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate()
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const signupSubmit = async(e)=>{
    e.preventDefault();
    const { data} = await BaseApi.post('/sign-in',input)
    if(data){
      document.cookie =`Bearer=${data.access_token}`
      navigate("/")
    }
    else{
    alert("somthing went wrong")
    }
  }
  return (
   <section className="flex items-center justify-center min-h-screen bg-gray-50">
  <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">
    <div className="px-8 md:w-1/2 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
      <form action className="flex flex-col gap-4" onSubmit={signupSubmit}>
        <input className="p-2 mt-8 border rounded-xl" type="phone" name="phone" placeholder="Phone Number" value={input.phone}
                    onChange={handelInput}/>
        <div className="relative">
          <input className="w-full p-2 border rounded-xl" type="password" name="password" placeholder="Password" value={input.password}
                    onChange={handelInput}/>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="gray" className="absolute -translate-y-1/2 bi bi-eye top-1/2 right-3" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button className="py-2 text-white duration-300 bg-orange-400 rounded-xl hover:scale-105">Login</button>
      </form>
      <div className="grid items-center grid-cols-3 mt-6 text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-sm text-center">OR</p>
        <hr className="border-gray-400" />
      </div>


      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <Link to={"/auth/register"} className="px-5 py-2 duration-300 bg-white border rounded-xl hover:scale-110">Register</Link>
      </div>
    </div>
    <div className="hidden w-1/2 md:block">
      <img className="rounded-2xl" src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
    </div>
  </div>
</section>

  )
}

export default Login