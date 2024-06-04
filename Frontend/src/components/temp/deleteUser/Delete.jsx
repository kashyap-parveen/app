import React from 'react'

function Delete() {

    const deleteUser = ()=>{

    }
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
     <h2 className="text-2xl font-bold mb-6 text-center">Delete User</h2>
     <form action='/api/v1/users/deleteUser' method='get'>
     <div className="mb-4">
            <label className="block text-gray-700">Enter Username Or email</label>
            <input
            type="text"
            name='username'
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Username Or email"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Delete User
          </button>
     </form>
     </div>
     </div>



    </>
  )
}

export default Delete