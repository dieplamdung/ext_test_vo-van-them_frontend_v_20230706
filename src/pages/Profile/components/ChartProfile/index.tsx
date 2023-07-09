import React, { useState } from "react";
import "./style.scss";
import Chart from "components/Chart";
import {
  DATA_CHART,
  DATA_FILTER_TIME,
  DATA_CHART_PROFILE,
} from "utils/constant";

export default function ChartProfile() {
  const [filter, setFilter] = useState<string>("day");
  const [date, setDate] = useState<string>("2023.07.09");

  const [dataChart, setDataChart] = useState<
    {
      id: string;
      color: string;
      data: {
        x: string;
        y: number;
      }[];
    }[]
  >(DATA_CHART);

  const handleFilter = (id: string) => {
    if (id === filter) return;
    setFilter(id);
    const newDataChart = DATA_CHART_PROFILE.find((item) => item.id === id);
    if (newDataChart) {
      setDate(newDataChart.date);
      setDataChart(newDataChart?.data);
    }
  };

  return (
    <div className="wrapper-chart-profile">
      <div className="content-chart-profile">
        <div className="title-chart-profile">
          <p className="title">BODY RECORD</p>
          <p className="title-date">{date}</p>
        </div>
        <div className="chart-profile">
          <Chart data={dataChart} />
        </div>
        <div className="group-filter-time">
          {DATA_FILTER_TIME.map((item) => {
            return (
              <div
                className={`item-filter ${
                  filter === item.id && "item-filter-active"
                }`}
                key={item.id}
                onClick={() => handleFilter(item.id)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
