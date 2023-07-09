import React, { useEffect, useState } from "react";
import "./style.scss";
import ButtonViewMore from "components/ButtonMoreView";

type PropsMyDiary = {
  data: { day: string; time: string; title: string; description: string }[];
};
export default function MyDiary(props: PropsMyDiary) {
  const { data } = props;
  const [dataMyDiary, setDataMyDiary] = useState<
    { day: string; time: string; title: string; description: string }[]
  >([]);

  useEffect(() => {
    setDataMyDiary(data);
  }, [data]);

  const handleClickViewMore = () => {
    setDataMyDiary([...dataMyDiary, ...dataMyDiary]);
  };
  
  return (
    <>
      {!!dataMyDiary.length && (
        <div className="wrapper-my-diary">
          <p className="title-my-diary">MY DIARY</p>
          <div className="content-list-my-diary">
            {dataMyDiary.map((item, index) => {
              return (
                <div className="wrapper-item-my-diary" key={index}>
                  <div className="content-item-my-diary">
                    <p className="time-my-diary">
                      {item.day}
                      <br />
                      {item.time}
                    </p>
                    <p className="title-item-my-diary">{item.title}</p>
                    <p className="title-item-my-diary">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ButtonViewMore
            title="記録をもっと見る"
            onClick={handleClickViewMore}
          />
        </div>
      )}
    </>
  );
}
