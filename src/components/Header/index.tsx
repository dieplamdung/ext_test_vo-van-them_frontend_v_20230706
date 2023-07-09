import React, { useEffect, useMemo, useState } from "react";
import "./style.scss";
import Logo from "images/logo.png";
import { Link } from "react-router-dom";
import iconInfo from "images/icons/info.svg";
import iconChallenge from "images/icons/challenge.svg";
import iconProfile from "images/icons/profile.svg";
import iconMenu from "images/icons/menu.svg";
import iconClose from "images/icons/icon_close.svg";
import { useActiveLink } from "hooks/useActiveLink";
import { useScrollDown } from "hooks/useScrollDown";

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
    {
      title: "自分の記録",
      link: "/profile",
    },
    {
      title: "体重グラフ",
      link: "/chart",
    },
    {
      title: "目標",
      link: "/target",
    },
    {
      title: "選択中のコース",
      link: "/learning",
    },
    {
      title: "コラム一覧",
      link: "/list",
    },
    {
      title: "設定",
      link: "/setting",
    },
  ];

  const linkActive = useActiveLink();
  const scrollDown = useScrollDown();
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);

  useEffect(() => {
    setOpenMenuMobile(false);
    setShowMoreMenu(false);
  }, [linkActive]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0];
    if (body) {
      if (openMenuMobile) {
        body.classList.add("disable-scroll");
      } else {
        body.classList.remove("disable-scroll");
      }
    }
  }, [openMenuMobile]);

  const contentHeader = () => {
    return (
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
            {dataNavigation.map((item, index) => {
              if (index <= 2) {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className={`link-navigation ${
                      linkActive === item.link && "link-navigation-active"
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="icon-link"
                    />
                    {item.title}
                  </Link>
                );
              }
              return (
                <Link
                  key={index}
                  to={item.link}
                  className={`link-navigation ${
                    linkActive === item.link && "link-navigation-active"
                  } link-navigation-more`}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="icon-menu-navigation">
              <img
                src={showMoreMenu ? iconClose : iconMenu}
                alt="icon-menu"
                onClick={() => setShowMoreMenu(!showMoreMenu)}
              />
              <div
                className={`list-navigation-more ${
                  showMoreMenu && "list-navigation-more-show"
                }`}
              >
                {dataNavigation.map((item, index) => {
                  if (index > 2) {
                    return (
                      <Link
                        key={item.link}
                        to={item.link}
                        className={`link-navigation ${
                          linkActive === item.link && "link-navigation-active"
                        } link-more`}
                      >
                        {item.title}
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
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
    );
  };

  return (
    <>
      <div
        className={`container wrapper-header ${
          scrollDown && "hidden-menu-main"
        }`}
      >
        {contentHeader()}
      </div>

      <div
        className={`container wrapper-header ${
          scrollDown ? "sticky-header" : "sticky-header-hidden"
        }`}
      >
        {contentHeader()}
      </div>
    </>
  );
}
