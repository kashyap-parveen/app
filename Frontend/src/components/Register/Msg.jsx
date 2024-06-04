import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Msg() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/login")
    }, 3000);
  })
  
  return (
    <>
    <div className=' w-full flex justify-center items-center font-semibold text-3xl text-green-800'>
    <h2>User Register Successfully....</h2>

    </div>
    
    </>
  )
}

export default Msg