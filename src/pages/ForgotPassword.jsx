import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        "https://auth-e342.onrender.com/api/v1/auth/request-reset-password",
        { email }
      );
      console.log(response.data);
    } catch (err) {
      console.error("There was an error logging in!", err);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <form className="space-y-6" onSubmit={handleForgotPassword}>
          <div>
            <label
              htmlFor="reset-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="reset-email"
              name="reset-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Send Reset Code
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <Link rel="stylesheet" to="/login">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
