import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ProfilePassword() {
   const [profilePassword, setProfilePassword] = useState('');
  const navigate = useNavigate();
  const { web_id, user_id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: user_id,
      profilePassword
    };

    try {
      const response = await axios.post("http://localhost/Lockify/profilepwd.php", formData);

      if (response.data.user) {
        navigate(`/view-pwd/${web_id}/${user_id}`);
      } else {
        alert("Invalid Profile Password");
      }
    } catch (err) {
      console.error("Error verifying password", err);
      alert("Something went wrong. Try again.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-sm border border-blue-500">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6 text-center">
            Enter Profile Password
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Profile Password Input */}
            <div>
              <label htmlFor='ProfilePassword' className="block text-gray-300 text-sm font-bold mb-2">
                Profile Password
              </label>
              <input
                type="password"
                placeholder="Your Master Password"
                id="ProfilePassword"
                name="profilePassword"
                value={profilePassword}
                onChange={(e) => setProfilePassword(e.target.value)}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
                required
              />
            </div>

            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Details
            </button> 
    
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfilePassword;