import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-sm border border-blue-500">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6 text-center">
            Login to Your Account
          </h2>
          <form method="post" action="" className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor='email' className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor='password' className="block text-gray-300 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <Link to="/Home">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
            </Link>
          </form>
          <div className="mt-6 text-center text-gray-400 text-sm">
            Not registered yet?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition duration-200">
              Create an account
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;