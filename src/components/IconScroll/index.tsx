import React from "react";
import iconScroll from "images/icons/icon_scroll.svg";
import "./style.scss";
import { useScrollDown } from "hooks/useScrollDown";

export default function IconScroll() {
  const scrollDown = useScrollDown();
  const handleClickScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="wrapper-icon-scroll">
      {scrollDown && (
        <img
          src={iconScroll}
          alt="icon-scroll"
          className="icon-scroll"
          onClick={handleClickScrollTop}
        />
      )}
    </div>
  );
}
