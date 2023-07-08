import React, { useState } from "react";
import "./style.scss";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import ListFood from "./components/ListFood";

export default function Home() {
  const [menuSelect, setMenuSelect] = useState<string>("");

  const handleSelectMenu = (id: string) => {
    if (id === menuSelect) {
      setMenuSelect("");
      return;
    }
    setMenuSelect(id);
  };

  return (
    <div className="wrapper-page wrapper-home-page">
      <Banner />
      <Menu menuSelect={menuSelect} onSelectMenu={handleSelectMenu} />
      <ListFood menuSelect={menuSelect} />
    </div>
  );
}
