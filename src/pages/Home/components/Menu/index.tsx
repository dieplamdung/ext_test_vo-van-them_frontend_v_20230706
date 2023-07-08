import React from "react";
import "./style.scss";
import ItemMenu from "components/ItemMenu";
import { LIST_MENU } from "utils/constant";

type PropsMenu = {
  menuSelect: string;
  onSelectMenu: (value: string) => void;
};

export default function Menu({ menuSelect, onSelectMenu }: PropsMenu) {
  return (
    <div className="container">
      <div className="container-content wrapper-list-menu">
        {LIST_MENU.map((item) => {
          return (
            <div key={item.id} className="wrapper-menu">
              <ItemMenu
                {...item}
                onClick={(id) => onSelectMenu(id)}
                isSelect={menuSelect === item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
