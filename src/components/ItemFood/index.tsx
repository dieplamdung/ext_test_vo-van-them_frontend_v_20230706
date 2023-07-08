import React from "react";
import "./style.scss";

export type PropsItemFood = {
  imageFood: string;
  id: string | number;
  value: string;
  onClick?: (value?: string | number) => void;
};

export default function ItemFood(props: PropsItemFood) {
  const { imageFood, id, value, onClick } = props;
  return (
    <div className="wrapper-item-food">
      <div className="item-food-content" onClick={() => onClick?.(id)}>
        <img src={imageFood} alt={value} className="image-food" />
        <div className="label-food-value">
          <p className="label">{value}</p>
        </div>
      </div>
    </div>
  );
}
