import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
