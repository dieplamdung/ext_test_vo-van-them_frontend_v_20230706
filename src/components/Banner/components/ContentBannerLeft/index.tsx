import React, { useEffect, useState } from "react";
import "./style.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { fillingValue } from "utils/fillingValue";

type BannerLeftProps = {
  total: number;
  value: number;
};

export default function ContentBannerLeft(props: BannerLeftProps) {
  const { total, value } = props;
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (total && value) {
      const newPercentage = Math.floor((value / total) * 100);
      setPercentage(newPercentage);
    }
  }, [total, value]);

  return (
    <div className="wrapper-content-banner-left">
      <div className="color-overlay" />
      <div className="banner-left-content">
        <div className="wrapper-circular">
          <CircularProgressbar
            value={66}
            strokeWidth={2}
            styles={buildStyles({
              pathColor: `var(--light)`,
              trailColor: "transparent",
            })}
          />
          <div className="wrapper-value-progress">
            <p className="value">
              {fillingValue(value)}/{fillingValue(total)}
            </p>
            <p className="percentage">{fillingValue(percentage)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
