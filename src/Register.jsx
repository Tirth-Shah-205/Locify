import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Contact, setContact] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [ProfilePassword, setProfilePassword] = useState("")

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const data = { Name, Email, Contact, Password, ConfirmPassword, ProfilePassword }

    if (Password == ConfirmPassword) {
      try {
        const response = await axios.post("http://localhost/Lockify/register.php", data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (response.data.status) {
          alert("Registration Successfull")
          navigate('/')
        } else {
          alert("Registration Failed")
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      alert("Password and Confirm Password does not match")
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md border border-blue-500">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6 text-center">
            Create Your Account
          </h2>
          <form className="space-y-5" onSubmit={submitHandler}>

            <div>
              <label htmlFor='name' className="block text-gray-300 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor='email' className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor='contact' className="block text-gray-300 text-sm font-bold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Contact Number"
                id="contact"
                name="contact"
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor='password' className="block text-gray-300 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor='confirmPassword' className="block text-gray-300 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor='ProfilePassword' className="block text-gray-300 text-sm font-bold mb-2">
                Profile Password
              </label>
              <input
                type="password"
                placeholder="Profile Password"
                id="ProfilePassword"
                name="profile_password"
                value={ProfilePassword}
                onChange={(e) => setProfilePassword(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
