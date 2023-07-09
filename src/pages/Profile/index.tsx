import React, { useState } from "react";
import "./style.scss";
import BlockProfileList from "./components/BlockProfileList";
import ChartProfile from "./components/ChartProfile";
import MyExercise from "./components/MyExercise";
import {
  DATA_CHART,
  DATA_CHART_PROFILE,
  DATA_MY_DIARY,
  DATA_MY_EXERCISE,
} from "utils/constant";
import MyDiary from "./components/MyDiary";

export default function Profile() {
  const [filter, setFilter] = useState<string>("day");
  const [date, setDate] = useState<string>(DATA_CHART_PROFILE[0].date);

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

  const [dataMyExercise, setDataMyExercise] = useState<
    {
      title: string;
      value: string;
      time: string;
    }[]
  >(DATA_MY_EXERCISE[0].data);

  const [dataMyDiary, setDataMyDiary] = useState<
    { day: string; time: string; title: string; description: string }[]
  >(DATA_MY_DIARY[0].data);

  const handleFilter = (id: string) => {
    if (id === filter) return;
    setFilter(id);
    const newDataChart = DATA_CHART_PROFILE.find((item) => item.id === id);
    if (newDataChart) {
      setDate(newDataChart.date);
      setDataChart(newDataChart?.data);
    }

    const newDataMyExercise = DATA_MY_EXERCISE.find((item) => item.id === id);
    if (newDataMyExercise) {
      setDataMyExercise(newDataMyExercise?.data);
    }

    const newDataMyDiary = DATA_MY_DIARY.find((item) => item.id === id);
    if (newDataMyDiary) {
      setDataMyDiary(newDataMyDiary?.data);
    }
  };

  return (
    <div className="container">
      <div className="container-content wrapper-content-profile-page">
        <BlockProfileList />
        <ChartProfile
          filter={filter}
          onChangeFilter={handleFilter}
          date={date}
          dataChart={dataChart}
        />
        <MyExercise date={date} listExercise={dataMyExercise} />
        <MyDiary data={dataMyDiary} />
      </div>
    </div>
  );
}
