import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmailStep from "./components/EmailStep";
import PasswordStep from "./components/PasswordStep";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailStep />} />
        <Route path="/password" element={<PasswordStep />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
