import React, { useState } from 'react';
import axios from "axios"

function RegisterForm() {
const [data, setData] = useState("");

const handleRegister = () => {
  axios.post("/api/v1/users/register")
  .then((response)=>setData(response.data))
  .catch((error)=>{console.log("Error::",error)})
  console.log(data)
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} action='/api/v1/users/register' method='post'>
        <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
            type="text"
            name='fullName'
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Full Name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
            type="text"
            name='username'
            autoComplete='username'
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
            type="email"
            name='email'
            autoComplete='username'
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
            type="password"
            name='password'
            autoComplete='current-password'
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            />
        </div>
{/*         
        <div className="mb-4">
            <label className="block text-gray-700">Avatar</label>
            <input
            type="file"
            name='avatar'
            accept="image/*"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleAvatarChange}
            />
            
            {avatar && (
            <div className="mt-4">
                <img src={avatar} alt="Avatar Preview" className="w-20 h-20 rounded-full object-cover" />
            </div>
            )}
            
        </div> */}

        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
