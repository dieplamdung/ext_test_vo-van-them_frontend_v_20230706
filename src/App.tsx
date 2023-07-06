import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
