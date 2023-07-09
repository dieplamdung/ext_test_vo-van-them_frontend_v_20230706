import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";
import Header from "components/Header";
import Footer from "components/Footer";
import IconScroll from "components/IconScroll";
import Challenge from "pages/Challenge";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <div className="container">
        <div className="container-content icon-scroll">
          <IconScroll />
        </div>
      </div>
    </div>
  );
}

export default App;
