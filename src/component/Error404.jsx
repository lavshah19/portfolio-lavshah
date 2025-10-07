import React from "react";
import { Frown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full border border-blue-100 backdrop-blur-lg">
        <Frown className="w-20 h-20 text-blue-400 mb-6 animate-bounce" />
        <h1 className="text-5xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8 text-center">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <NavLink to="/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
