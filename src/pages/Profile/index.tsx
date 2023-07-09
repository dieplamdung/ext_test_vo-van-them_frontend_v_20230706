import React from "react";
import "./style.scss";
import BlockProfileList from "./components/BlockProfileList";
import ChartProfile from "./components/ChartProfile";

export default function Profile() {
  return (
    <div className="container">
      <div className="container-content wrapper-content-profile-page">
        <BlockProfileList />
        <ChartProfile />
      </div>
    </div>
  );
}
