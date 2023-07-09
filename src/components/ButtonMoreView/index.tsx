import React from "react";
import "./style.scss";

type PropsButtonViewMore = {
  title: string;
  onClick: () => void;
};

export default function ButtonViewMore(props: PropsButtonViewMore) {
  const { title, onClick } = props;
  return (
    <div className="wrapper-button-bottom">
    <button className="button-view-more" onClick={onClick}>
      {title}
    </button>
    </div>
  );
}
