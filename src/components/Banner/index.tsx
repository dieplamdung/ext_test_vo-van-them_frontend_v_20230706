import React from "react";
import "./style.scss";
import ContentBannerLeft from "./components/ContentBannerLeft";
import ContentBannerRight from "./components/ContentBannerRight";

export default function Banner() {
  return (
    <div className="wrapper-banner">
      <div className="content-banner content-banner-left">
        <div className="wrapper-content">
            <ContentBannerLeft total={12} value={5}/>
        </div>
      </div>
      <div className="content-banner content-banner-right">
        <div className="wrapper-content">
            <ContentBannerRight />
        </div>
      </div>
    </div>
  );
}
