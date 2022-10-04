import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCheckUser from '../../hooks/useCheckUser';

const Login = () => {
    const [tError,setTError]=useState(false)
    const [userData,setUserValue]=useState({})
    const [user,error]=useCheckUser(userData)

    const navigate=useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

const handleLoginFrom=(e)=>{
    const email = e.target.email.value
  const password = e.target.password.value
  if(email.length===0 || password.length===0){
    setTError(true)

  }
  else{
    setTError(false)
  }
  const addUser ={email,password}
  setUserValue(addUser)
    e.preventDefault();

}
if(user){
    navigate(from, { replace: true });
}


    return (

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col mt-5 justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl px-24 font-semibold"> Login Here</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                        <form
                                onSubmit={handleLoginFrom}
                                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                            >
                                <div className="relative">
                                    <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440  transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                {error && <p className='text-sm text-red-500'>Sorry , Your email or password wrong . </p>}
                                {tError && <p className='text-sm text-red-500'>Please , Your Email or Password is missing . </p>}
                                <div className="relative">
                                    <button  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-2 py-1">Login</button>
                                </div>
                                <h1 className='text-lg'>Don't have an account? <Link to='/register' className='text-red-500 hover:border-b-2  hover:border-red-500'>Register</Link></h1>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;