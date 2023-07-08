import React from "react";
import "./style.scss";
import ItemMenu from "components/ItemMenu";
import { LIST_MENU } from "utils/constant";

export default function Menu() {
  return (
    <div className="container">
      <div className="container-content wrapper-list-menu">
        {LIST_MENU.map((item) => {
          return(
            <div key={item.id} className="wrapper-menu">
               <ItemMenu {...item} onClick={(id) => console.log(id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
