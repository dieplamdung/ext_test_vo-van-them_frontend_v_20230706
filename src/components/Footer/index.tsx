import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  const dataListFooter = [
    {
      title: "会員登録",
      link: "/会員登録",
    },
    {
      title: "運営会社",
      link: "/運営会社",
    },
    {
      title: "利用規約",
      link: "/利用規約",
    },
    {
      title: "個人情報の取扱について",
      link: "/個人情報の取扱について",
    },
    {
      title: "特定商取引法に基づく表記",
      link: "/特定商取引法に基づく表記",
    },
    {
      title: "お問い合わせ",
      link: "/お問い合わせ",
    },
  ];
  return (
    <div className="container wrapper-footer">
      <div className="container-content list-link-footer">
        {dataListFooter.map((item,index)=>{
            return(
                <Link
                    key={index}
                    to={item.link}
                    className="link-footer"
                  >
                    {item.title}
                  </Link>
            )
        })}
      </div>
    </div>
  );
}
