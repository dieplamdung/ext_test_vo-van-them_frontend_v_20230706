import React, { ReactElement } from "react";
import "./style.scss";

type PropsItemMenu = {
  iconMenu: string;
  label: string;
  id:string;
  onClick:(id:string)=>void;
};

export default function ItemMenu(props: PropsItemMenu) {
  const { iconMenu, label,onClick, id } = props;
  return (
    <div className="wrapper-item-menu" onClick={()=>onClick(id)}>
      <div className="content-item-menu">
        <img src={iconMenu} alt={label || ""} className="icon-menu" />
        <p className="label-menu">{label}</p>
      </div>
    </div>
  );
}
