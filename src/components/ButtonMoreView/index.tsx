import React from "react";
import "./style.scss";

type PropsButtonViewMore = {
  title: string;
  onClick: () => void;
};

export default function ButtonViewMore(props: PropsButtonViewMore) {
  const { title, onClick } = props;
  return (
    <button className="button-view-more" onClick={onClick}>
      {title}
    </button>
  );
}
