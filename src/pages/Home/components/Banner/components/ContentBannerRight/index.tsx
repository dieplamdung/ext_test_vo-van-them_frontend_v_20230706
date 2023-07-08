import React from "react";
import "./style.scss";

import { COLOR_CHART } from "utils/constant";
import Chart from "components/Chart";

export default function ContentBannerRight() {
  const data = [
    {
      id: "nutrition",
      color: COLOR_CHART.primary,
      data: [
        {
          x: "6月",
          y: 100,
        },
        {
          x: "7月",
          y: 90,
        },
        {
          x: "8月",
          y: 70,
        },
        {
          x: "9月",
          y: 80,
        },
        {
          x: "10月",
          y: 50,
        },
        {
          x: "11月",
          y: 30,
        },
        {
          x: "12月",
          y: 10,
        },
        {
          x: "01月",
          y: 30,
        },
        {
          x: "02月",
          y: 10,
        },
        {
          x: "03月",
          y: 10,
        },
        {
          x: "04月",
          y: 10,
        },
        {
          x: "05月",
          y: 10,
        },
      ],
    },
    {
      id: "calor",
      color: COLOR_CHART.secondary,
      data: [
        {
          x: "6月",
          y: 80,
        },
        {
          x: "7月",
          y: 70,
        },
        {
          x: "8月",
          y: 80,
        },
        {
          x: "9月",
          y: 60,
        },
        {
          x: "10月",
          y: 40,
        },
        {
          x: "11月",
          y: 50,
        },
        {
          x: "12月",
          y: 20,
        },
        {
          x: "01月",
          y: 30,
        },
        {
          x: "02月",
          y: 30,
        },
        {
          x: "03月",
          y: 40,
        },
        {
          x: "04月",
          y: 20,
        },
        {
          x: "05月",
          y: 10,
        },
      ],
    },
  ];
  return (
    <div className="wrapper-content-banner-right">
      <Chart data={data} />
    </div>
  );
}
