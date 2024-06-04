import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserSlice } from '../../app/useContext/userContext/userSlice.js'


function LoginForm() {
  const dispatch = useDispatch()


  const par = {
    name:"Parveen Kashyap",
    username:"@parveen"
  }
  dispatch(setUserSlice(par))
 
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const formData = {
    email:email,
    password:password
  }


  const loginSubmit = (e)=>{
    e.preventDefault()
    axios.post("/api/v1/users/login",formData)
    .then( (res) => {
      const users = res.data.data.user
      setUser(users)
      navigate('/profile')
    })
    .catch( (err) => {
      console.log("Users credentials not match")
      setEmail("")
      setPassword("")
      console.log("ERROR:", err);
    })
    console.log(user);
  }


  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={loginSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
             type="text"
             name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='new-password'
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <label className='text-sm flex justify-center gap-6 mt-2 p-2'>
          <p>Don't have an account yet?</p>
          <Link to="/register"
          className='underline text-blue-700 font-semibold'> Sign Up</Link>
          </label>
        </form>

      </div>
    </div>
    
    </>
  );
}

export default LoginForm;




/*
const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  const handleChange = (e)=>{
    const {name, value} = e.target
  // console.log(`Name: ${name} and value is: ${value}`);
  setFormData({...formData,[name]:value})
  };
  const loginSubmit = async (e)=>{
    e.preventDefault()
    console.log(formData);
    axios.post(axios.post("/api/v1/users/test", {formData}))
    .then( (res) => setData(res.data))
      console.log(data)
    .catch( (error) => console.log("ERROR:", error))
    console.log(`Click loginSubmit`);
  }
 */

/*

  const [userData, setUserData] = useState("")
  const formData = {
    username:"a",
    password:"aq"
  }
  const loginSubmit =(e)=>{
    e.preventDefault()
    console.log('clicked loginSubmit');
    axios.post("/api/v1/users/login",formData)
    .then( (response)=>{
      const result = response.data
      if (result.statusCode == 200) {
        navigate("/profile")
      }
      setUserData(result)
    }
      /*
      if (userData.statusCode === 200) {
        navigate('/profile')
      } else{
        console.log("username or password wrong");
      }
    }

      
)
    
.catch( ()=>  navigate("/"))
}

*/ 