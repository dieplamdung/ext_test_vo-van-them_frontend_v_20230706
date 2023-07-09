import React, { useState } from "react";
import "./style.scss";
import Chart from "components/Chart";
import {
  DATA_CHART,
  DATA_FILTER_TIME,
  DATA_CHART_PROFILE,
} from "utils/constant";
import HeaderBlock from "../HeaderBlock";

type PropsChartProfile = {
  date: string;
  filter: string;
  onChangeFilter: (value: string) => void;
  dataChart: {
    id: string;
    color: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
};

export default function ChartProfile(props: PropsChartProfile) {
  const { date, dataChart, onChangeFilter, filter } = props;

  return (
    <div className="wrapper-chart-profile">
      <div className="content-chart-profile">
        <HeaderBlock title="BODY RECORD" value={date} />
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
                onClick={() => onChangeFilter(item.id)}
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
