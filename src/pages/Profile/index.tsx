import React from "react";
import "./style.scss";
import BlockProfileList from "./components/BlockProfileList";

export default function Profile() {
  return (
    <div className="container">
      <div className="container-content wrapper-content-profile-page">
        <BlockProfileList />
      </div>
    </div>
  );
}
