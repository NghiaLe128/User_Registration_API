import React from "react";
import { FaSignOutAlt } from "react-icons/fa"; // Import the logout icon
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here, e.g., clearing tokens
    navigate("/login"); // Redirect to login page
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      style={{ background: "linear-gradient(to bottom right, #4a90e2, #50c9c3, #3a7bd5)" }}
    >
      {/* Logout Icon */}
      <button 
        onClick={handleLogout} 
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        aria-label="Logout"
      >
        <FaSignOutAlt />
      </button>

      <h1 className="text-4xl font-bold text-center text-white">Welcome to My App</h1>
      
      <div className="text-center space-y-2 text-white mt-6">
        <h2 className="text-2xl font-semibold">COURSE PROJECT</h2>
        <p className="text-lg">PROJECT IA03 - User Registration API with React Frontend</p>
      </div>
      
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4 mt-8">
        <h3 className="text-xl font-semibold text-center">Student Information</h3>
        <p><strong>Student ID:</strong> 21127116</p>
        <p><strong>Name:</strong> Nguyễn Lê Thanh Nghĩa</p>
        <p><strong>Class:</strong> 21KTPM2 | University of Science, VNU-HCM</p>
        <p><strong>Supervisors:</strong> Nguyễn Huy Khánh (Theory), Mai Anh Tuấn (Practice), Đỗ Nguyên Kha (Practice), Trần Duy Quang (Practice)</p>
      </div>
    </div>
  );
};

export default HomePage;
