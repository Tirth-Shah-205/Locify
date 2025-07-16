import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom' ;
import axios from 'axios';

function Home() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const reg_id = localStorage.getItem("user_id");
        const data = { reg_id };

        const response = await axios.post("http://localhost/Lockify/home.php", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setWebsites(response.data);
      } catch (err) {
        console.error("Error fetching websites:", err);
        setWebsites([]);
      }
    };

    fetchWebsites();
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl"> {/* Container for title and list */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center animate-fade-in">
          Saved Accounts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.length === 0 ? (
          <h1 className="text-2xl md:text-5xl font-bold text-blue-400 mb-8 text-center animate-fade-in col-span-full">
            No websites saved yet.
          </h1>
        ) : (
          websites.map((site) => (
            <div
              key={site.web_id}
              className="bg-gray-800 p-6 rounded-lg shadow-xl border border-blue-600 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">
                <span role="img" aria-label="website icon" className="mr-2">🌐</span>
                {site.web_name}
              </h2>
              <Link to = {`/profile/${site.web_id}/${site.reg_id}`} className="block"> {/* Placeholder link for details */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                  View Details
                </button>
              </Link>
            </div>
          )))}
        </div>

        <div className="mt-10 text-center">
          <Link to = "/add-password">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                + Add New Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;