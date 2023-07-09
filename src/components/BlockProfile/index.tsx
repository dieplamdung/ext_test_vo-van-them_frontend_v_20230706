import React from "react";
import "./style.scss";

type PropsBlockProfile = {
  title:string;
  description: string;
  image: string;
};

export default function BlockProfile(props: PropsBlockProfile) {
  const { title, description, image } = props;
  return (
    <div className="wrapper-block-profile">
      <div className="content-block-profile">
        <img src={image} alt="title" className="content-block image-background" />
        <div className="content-block background-overlay" />
        <div className="content-block content-profile">
          <p className="limit-text-2 title-profile">{title}</p>
          <p className="limit-text-2 description-profile">{description}</p>
        </div>
      </div>
    </div>
  );
}
