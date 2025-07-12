import React from 'react';

const AddPassword = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md border border-blue-500">
        <h2 className="text-3xl font-extrabold text-blue-400 mb-6 text-center">Save New Password</h2>
        <form className="space-y-6" method='POST' action=''>
          {/* Website Name */}
          <div>
            <label htmlFor="website" className="block text-gray-300 text-sm font-bold mb-2">
              Website Name
            </label>
            <input
              type="text"
              id="website"
              name="web_name"
              placeholder="e.g. Gmail.com"
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your Username"
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
              required
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert('Password saved successfully!')}
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPassword;