import React from "react";
import "./style.scss";
import BlockProfile from "components/BlockProfile";
import { CONTENT_BLOCK_PROFILE } from "utils/constant";

export default function BlockProfileList() {
  return (
    <div className="wrapper-block-profile-list">
      {CONTENT_BLOCK_PROFILE.map((item, index) => {
        return <BlockProfile {...item} key={index} />;
      })}
    </div>
  );
}
