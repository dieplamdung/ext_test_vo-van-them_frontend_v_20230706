import React, { useState } from "react";
import "./style.scss";
import ItemFood from "components/ItemFood";
import { LIST_FOOD } from "utils/constant";
import ButtonViewMore from "components/ButtonMoreView";

type PropsListFood = {
  menuSelect: string;
};

export default function ListFood(props: PropsListFood) {
  const { menuSelect } = props;

  const [listFood, setListFood] = useState(LIST_FOOD);

  const handleAddMoreData = (
    id: string
  ): { imageFood: string; id: number; value: string }[] => {
    const itemFilter = LIST_FOOD.find((item) => item.id === id);

    return itemFilter?.data || [];
  };

  const handleClickViewMore = () => {
    const newListFood = listFood.map((item) => {
      return {
        id: item.id,
        data: [...item.data, ...handleAddMoreData(item.id)],
      };
    });
    setListFood(newListFood);
  };

  return (
    <div className="container">
      <div className="container-content">
        {!menuSelect ? (
          <div className={`wrapper-list-item-food`}>
            {listFood.map((food, index) => {
              return (
                <div className="list-item-food" key={index}>
                  {food.data.map((item, idx) => {
                    return <ItemFood {...item} key={idx} />;
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`wrapper-list-item-food `}>
            {listFood.map((food, index) => {
              if (food.id === menuSelect) {
                return (
                  <React.Fragment key={index}>
                    {food.data.map((item, idx) => {
                      return <ItemFood {...item} key={idx} />;
                    })}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        )}

        {!menuSelect && (
          <ButtonViewMore
            title="記録をもっと見る"
            onClick={handleClickViewMore}
          />
        )}
      </div>
    </div>
  );
}
