import React from "react";
import "./style.scss";
import { DATA_BANNER_CHALLENGE } from "utils/constant";

type PropsBanner = {
    bannerSelect: string;
  onSelectBanner: (value: string) => void;
};

export default function Banner(props: PropsBanner) {
  const { bannerSelect, onSelectBanner } = props;
  return (
    <div className="wrapper-content-banner">
      {DATA_BANNER_CHALLENGE.map((item) => {
        return (
          <div
            className="wrapper-banner-item"
            key={item.id}
            onClick={() => onSelectBanner(item.id)}
          >
            <div
              className={`content-banner-item ${
                bannerSelect === item.id && "banner-selected"
              }`}
            >
              <p className="title-banner-item">{item.title}</p>
              <div className="line-banner-item" />
              <p className="description-banner-item">{item.description} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
