import React, { useState } from "react";

const Reset = () => {
    const [suss,setSuss]=useState(false)
    const [error,setError]=useState(false)

  const handleResetFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const name = e.target.name.value
    const password = e.target.password.value
    const newPassword = e.target.newPassword.value
    const resetUser ={name,email,password,newPassword}
  
  fetch('https://dry-island-38030.herokuapp.com/reset', {
//   fetch('http://localhost:5000/reset', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(resetUser),
})
  .then((response) => response.json())
  .then((data) => {
    if(data.acknowledged){
        setSuss(true)
        setError(false)
    }
    else{
        setSuss(false)
        setError(true)
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
   
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center mt-10 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r to-amber-300 from-red-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl px-24 font-semibold"> Reset Your Details</h1>
            </div>

            <div className="divide-y divide-gray-200">
              {/* <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"> */}
              <form
                onSubmit={handleResetFrom}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="name"
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder=" Enter  New Name"
                    required
                  />
                  <label
                    for="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Enter  New Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required
                  />
                  <label
                    for="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="New Password"
                    required
                  />
                  <label
                    for="newPassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    New Password
                  </label>
                </div>
                {suss && <h1 className="text-sm text-blue-500">Reset Your details successfully !!!! </h1>}
                {error&& <h1 className="text-sm text-red-600">Sorry , Your Email or Password   is wrong .</h1>}
                <div className="relative">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-1">
                   Submit
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
