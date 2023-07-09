import iconKnife from "images/icons/icon_knife.svg";
import iconCup from "images/icons/icon_cup.svg";
import imgFoodMorning1 from "images/m01.jpg";
import imgFoodMorning2 from "images/m02.jpg";
import imgFoodMorning3 from "images/m03.jpg";

import imgFoodLunch1 from "images/l01.jpg";
import imgFoodLunch2 from "images/l02.jpg";
import imgFoodLunch3 from "images/l03.jpg";

import imgFoodDinner1 from "images/d01.jpg";
import imgFoodDinner2 from "images/d02.jpg";

import imgFoodSnack from "images/s01.jpg";

import imgBlock1 from "images/MyRecommend-1.jpg";
import imgBlock2 from "images/MyRecommend-2.jpg";
import imgBlock3 from "images/MyRecommend-3.jpg";

export const COLOR_CHART = {
  primary: "hsl(46, 100%, 56%)",
  secondary: "hsl(163, 67%, 74%)",
};

const ID_MENU = {
  morning: "morning",
  lunch: "lunch",
  dinner: "dinner",
  snack: "snack",
};

export const LIST_MENU = [
  {
    id: ID_MENU.morning,
    label: "Morning",
    iconMenu: iconKnife,
  },
  {
    id: ID_MENU.lunch,
    label: "Lunch",
    iconMenu: iconKnife,
  },
  {
    id: ID_MENU.dinner,
    label: "Dinner",
    iconMenu: iconKnife,
  },
  {
    id: ID_MENU.snack,
    label: "Snack",
    iconMenu: iconCup,
  },
];

export const DATA_CHART = [
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

export const LIST_FOOD_MORNING = [
  {
    imageFood: imgFoodMorning1,
    id: 1,
    value: "05.21.Morning",
  },
  {
    imageFood: imgFoodMorning2,
    id: 2,
    value: "05.20.Morning",
  },
];
export const LIST_FOOD_LUNCH = [
  {
    imageFood: imgFoodLunch1,
    id: 1,
    value: "05.21.Lunch",
  },
  {
    imageFood: imgFoodLunch2,
    id: 2,
    value: "05.20.Lunch",
  },
];
export const LIST_FOOD_DINNER = [
  {
    imageFood: imgFoodDinner1,
    id: 1,
    value: "05.21.Dinner",
  },
  {
    imageFood: imgFoodDinner2,
    id: 2,
    value: "05.20.Dinner",
  },
];
export const LIST_FOOD_SNACK = [
  {
    imageFood: imgFoodSnack,
    id: 1,
    value: "05.21.Snack",
  },
  {
    imageFood: imgFoodSnack,
    id: 2,
    value: "05.20.Snack",
  },
];

export const LIST_FOOD = [
  { id: ID_MENU.morning, data: LIST_FOOD_MORNING },
  { id: ID_MENU.lunch, data: LIST_FOOD_LUNCH },
  { id: ID_MENU.dinner, data: LIST_FOOD_DINNER },
  { id: ID_MENU.snack, data: LIST_FOOD_SNACK },
];

export const CONTENT_BLOCK_PROFILE = [
  {
    title: "BODY RECORD",
    description: "自分のカラダの記録",
    image: imgBlock1,
  },
  {
    title: "MY EXERCISE",
    description: "自分の運動の記録",
    image: imgBlock2,
  },
  {
    title: "MY DIARY",
    description: "自分の日記",
    image: imgBlock3,
  },
];

export const DATA_FILTER_TIME = [
  {
    id: "day",
    title: "日",
  },
  {
    id: "week",
    title: "週",
  },
  {
    id: "month",
    title: "月",
  },
  {
    id: "year",
    title: "年",
  },
];

export const DATA_CHART_PROFILE = [
  {
    id: "day",
    date:"2023.07.09",
    data: [
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
    ],
  },
  {
    id: "week",
    date:"1st week",
    data: [
      {
        id: "nutrition",
        color: COLOR_CHART.primary,
        data: [
          {
            x: "6月",
            y: 90,
          },
          {
            x: "7月",
            y: 80,
          },
          {
            x: "8月",
            y: 70,
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
            y: 20,
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
            y: 10,
          },
          {
            x: "03月",
            y: 5,
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
            y: 100,
          },
          {
            x: "7月",
            y: 30,
          },
          {
            x: "8月",
            y: 60,
          },
          {
            x: "9月",
            y: 70,
          },
          {
            x: "10月",
            y: 30,
          },
          {
            x: "11月",
            y: 20,
          },
          {
            x: "12月",
            y: 10,
          },
          {
            x: "01月",
            y: 50,
          },
          {
            x: "02月",
            y: 40,
          },
          {
            x: "03月",
            y: 30,
          },
          {
            x: "04月",
            y: 10,
          },
          {
            x: "05月",
            y: 20,
          },
        ],
      },
    ],
  },
  {
    id: "month",
    date:"July 2023",
    data: [
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
    ],
  },
  {
    id: "year",
    date:"2023",
    data: [
      {
        id: "nutrition",
        color: COLOR_CHART.primary,
        data: [
          {
            x: "6月",
            y: 90,
          },
          {
            x: "7月",
            y: 80,
          },
          {
            x: "8月",
            y: 70,
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
            y: 20,
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
            y: 10,
          },
          {
            x: "03月",
            y: 5,
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
            y: 100,
          },
          {
            x: "7月",
            y: 30,
          },
          {
            x: "8月",
            y: 60,
          },
          {
            x: "9月",
            y: 70,
          },
          {
            x: "10月",
            y: 30,
          },
          {
            x: "11月",
            y: 20,
          },
          {
            x: "12月",
            y: 10,
          },
          {
            x: "01月",
            y: 50,
          },
          {
            x: "02月",
            y: 40,
          },
          {
            x: "03月",
            y: 30,
          },
          {
            x: "04月",
            y: 10,
          },
          {
            x: "05月",
            y: 20,
          },
        ],
      },
    ],
  },
];
