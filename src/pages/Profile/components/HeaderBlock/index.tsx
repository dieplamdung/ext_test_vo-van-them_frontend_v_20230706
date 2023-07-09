import React from "react";
import "./style.scss";

type PropsHeaderBlock = {
  title: string;
  value: string;
};

export default function HeaderBlock(props: PropsHeaderBlock) {
  const { title, value } = props;
  return (
    <div className="wrapper-header-block">
      <p className="title">{title}</p>
      <p className="title-date">{value}</p>
    </div>
  );
}
