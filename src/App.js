import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmailStep from "./components/EmailStep";
import PasswordStep from "./components/PasswordStep";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<EmailStep />} />
  <Route path="/password" element={<PasswordStep />} />
  <Route  path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
</Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
