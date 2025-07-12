import React from 'react'
import { Link } from 'react-router-dom';

function ViewPwd() {
    const passwordData = {
    website: 'Facebook',
    username: 'Tirth Shah',
    password: 'AB@1',
  };
   return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-lg border border-blue-500">
        <h2 className="text-3xl font-extrabold text-blue-400 mb-6 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="lock emoji">🔐</span> {passwordData.website}
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
            <span className="text-gray-300 font-semibold">Username:</span>
            <span className="text-lg font-medium text-blue-300">{passwordData.username}</span>
          </div>

          <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
            <span className="text-gray-300 font-semibold">Password:</span>
            <span className="text-lg font-medium text-purple-300 select-none">
            {passwordData.password}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Edit Details
          </button>
          <button
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Delete Account
          </button>
        </div>

        
        
        <div className="mt-6 text-center">
            <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105">
                ⬅ Back to Home
            </Link>
        </div>
    
      </div>
    </div>
  )}

export default ViewPwd