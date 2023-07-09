import React from "react";
import "./style.scss";
import HeaderBlock from "../HeaderBlock";

type PropsMyExercise = {
  date: string;
  listExercise: {
    title: string;
    value: string;
    time: string;
  }[];
};

export default function MyExercise(props: PropsMyExercise) {
  const { date, listExercise } = props;
  return (
    <div className="wrapper-my-exercise">
      <div className="content-my-exercise">
        <HeaderBlock title="MY EXERCISE" value={date} />
        <div className="content-list-exercise custom-scrollbar">
          <div className="list-exercise">
            {listExercise.map((item, index) => {
              return (
                <div className="exercise-item" key={index}>
                  <div className="item-dot" />
                  <div className="content-item-exercise">
                    <p className="limit-text-1 title-exercise">{item.title}</p>
                    <p className="value-exercise">{item.value}</p>
                  </div>
                  <p className="time-exercise">{item.time}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
