import React, { useEffect, useState } from "react";
import "./style.scss";
import img from "images/column-1.jpg";
import ButtonViewMore from "components/ButtonMoreView";

export type ItemChallenge = {
  date: string;
  time: string;
  description: string;
  imageBg: string;
  hashtag: string[];
};

type PropsListChallenge = {
  data: ItemChallenge[];
  bannerSelect: string;
};

export default function ListChallenge(props: PropsListChallenge) {
  const { data, bannerSelect } = props;
  const [listChallenge, setListChallenge] = useState<ItemChallenge[]>([]);

  const handleClickViewMore = () => {
    setListChallenge([...listChallenge,...listChallenge]);
  };

  useEffect(() => {
    setListChallenge(data);
  }, [data]);
  return (
    <div className="wrapper-list-challenge">
      <div className="content-list-challenge">
        {listChallenge.map((item, index) => {
          return (
            <div className="wrapper-challenge-item" key={index}>
              <div className="wrapper-image-background">
                <img
                  src={item.imageBg}
                  alt={item.description}
                  className="image-background"
                />
                <p className="wrapper-time">
                  {item.date}
                  <span className="time">{item.time}</span>
                </p>
              </div>
              <p className="limit-text-2 description-challenge-item">
                {item.description}
              </p>
              <div className="wrapper-hashtag">
                {item.hashtag.map((tag, idx) => {
                  return (
                    <p className="hashtag" key={idx}>
                      #{tag}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {!bannerSelect && (
        <ButtonViewMore
          title="記録をもっと見る"
          onClick={handleClickViewMore}
        />
      )}
    </div>
  );
}
