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
