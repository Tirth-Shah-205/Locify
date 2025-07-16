import React,{useState , useEffect} from 'react'
import { Link , useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';

function ViewPwd() {
  const { web_id, user_id } = useParams();
  const [passwordData, setPasswordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copyStatus, setCopyStatus] = useState("idle");
  const [actionLoading, setActionLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost/Lockify/view_details.php",
          {
            reg_id: user_id,
            wid: web_id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setPasswordData(response.data.website);
      } catch (error) {
        console.error("Error fetching password details:", error);
        setPasswordData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [web_id, user_id]);

  const handleCopy = () => {
    setCopyStatus("loading");
    navigator.clipboard.writeText(passwordData.password);

    setTimeout(() => {
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }, 1000);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this password?"))
      return;

    setActionLoading(true);
    try {
      const response = await axios.post(
        "http://localhost/Lockify/delete_password.php",
        {
          web_id,
          reg_id: user_id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        alert("Password deleted successfully.");
        navigate("/home");
      } else {
        alert("Failed to delete password.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error while deleting.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdate = async () => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;

    setActionLoading(true);
    try {
      const response = await axios.post(
        "http://localhost/Lockify/update_password.php",
        {
          web_id,
          reg_id: user_id,
          new_password: newPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        alert("Password updated successfully.");
        setPasswordData({ ...passwordData, password: newPassword });
      } else {
        alert("Failed to update password.");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Error while updating.");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!passwordData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-red-500">
          No data found or an error occurred.
        </p>
      </div>
    );
  }
   return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-lg border border-blue-500">
        <h2 className="text-3xl font-extrabold text-blue-400 mb-6 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="lock emoji">🔐</span> {passwordData.web_name}
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
            <button
              onClick={handleCopy}
              disabled={copyStatus === "loading"}
              className={`ml-4 px-3 py-1 text-sm rounded transition duration-300 cursor-pointer flex items-center gap-2
                ${
                  copyStatus === "copied"
                    ? "bg-green-600 text-purple-300"
                    : "bg-blue-500 hover:bg-blue-800"
                }`}
              title="Copy to clipboard"
            >
              {copyStatus === "loading" && (
                <svg
                  className="animate-spin h-4 w-4 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  ></path>
                </svg>
              )}

              {copyStatus === "copied"
                ? "✅ Copied"
                : copyStatus === "loading"
                ? "Copying..."
                : "📋 Copy"}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
             onClick={handleUpdate}
            disabled={actionLoading}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
           📝 Edit Details
          </button>
          <button
            onClick={handleDelete}
            disabled={actionLoading}
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
           🗑️ Delete Account
          </button>
        </div>

        
        
        <div className="mt-6 text-center">
            <Link to="/Home" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105">
                ⬅ Back to Home
            </Link>
        </div>
    
      </div>
    </div>
  )}

export default ViewPwd