import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"

function RegisterForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    fullName:"",
    password:""
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("/api/v1/users/register", formData)
      .then((response) => {
        setData(response.data);
        setError(null);
      
      })
      .catch((error) => {
        console.log("Error::", error);
        setError("Registration failed. Please try again.");
        setData(null);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {data ? "User successfully register":""}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
            autoComplete='username'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
            autoComplete='username'
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
            autoComplete='current-password'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
          <label className='text-sm flex justify-center gap-6 mt-2 p-2'>
          <p>Already account ?</p>
          <Link to="/login"
          className='underline text-blue-700 font-semibold'> Login</Link>
          </label>
        </form>
        {data && (
          <div className="mt-4">
            <h3 className="text-green-600">User Registered Successfully!</h3>
            <pre>{JSON.stringify(data.data.email, null, 2)}</pre>
          </div>
        )}
        {error && (
          <div className="mt-4">s
            <h3 className="text-red-600">{error}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;
