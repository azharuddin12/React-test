import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ProfileDetail } from "./Pages/ProfileDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
