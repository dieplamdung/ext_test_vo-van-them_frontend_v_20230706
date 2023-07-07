import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
