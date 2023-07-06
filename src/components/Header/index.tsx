import React, { useState } from "react";
import "./style.scss";
import Logo from "images/logo.png";
import { Link } from "react-router-dom";
import iconInfo from "images/icons/info.svg";
import iconChallenge from "images/icons/challenge.svg";
import iconProfile from "images/icons/profile.svg";
import iconMenu from "images/icons/menu.svg";
import iconClose from "images/icons/icon_close.svg";
import { useActiveLink } from "hooks/useActiveLink";

export default function Header() {
  const dataNavigation = [
    {
      title: "自分の記録",
      link: "/profile",
      icon: iconProfile,
    },
    {
      title: "チャレンジ",
      link: "/challenge",
      icon: iconChallenge,
    },
    {
      title: "お知らせ",
      link: "/info",
      icon: iconInfo,
    },
  ];

  const linkActive = useActiveLink();
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);

  return (
    <div className="container wrapper-header">
      <div className="container-content content-header">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="icon-logo" />
        </Link>
        <div
          className={`wrapper-list-link ${
            openMenuMobile && "open-menu-mobile"
          }`}
        >
          <div className="list-link-content">
            <Link to={"/"} className={`logo-on-menu-mobile`}>
              <img src={Logo} alt="logo" className="icon-logo" />
            </Link>
            {dataNavigation.map((item) => {
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  className={`link-navigation ${
                    linkActive === item.link && "link-navigation-active"
                  }`}
                >
                  <img src={item.icon} alt={item.title} className="icon-link" />
                  {item.title}
                </Link>
              );
            })}
            <div className="icon-menu-navigation">
              <img src={iconMenu} alt="icon-menu" />
            </div>
            <div
              className="wrapper-icon-close"
              onClick={() => setOpenMenuMobile(false)}
            >
              <img src={iconClose} alt="icon-Close" />
            </div>
          </div>
        </div>
        <div
          className="icon-menu-mobile"
          onClick={() => setOpenMenuMobile(true)}
        >
          <img src={iconMenu} alt="icon-menu" />
        </div>
      </div>
    </div>
  );
}
