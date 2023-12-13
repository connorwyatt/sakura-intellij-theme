import { Polished } from "../deps.ts";

const { darken, saturate } = Polished;

const charcoal = "#29393f";
const charcoalDarken050 = darken(0.05, charcoal);
const charcoalDarken075 = darken(0.075, charcoal);
const charcoalDarken100 = darken(0.1, charcoal);
const charcoalDarken125 = darken(0.125, charcoal);

const pink = "#eba2bd";
const pinkSaturated250 = saturate(0.25, pink);

export const palette = {
  charcoalDarken125,
  charcoalDarken100,
  charcoalDarken075,
  charcoalDarken050,
  charcoal,
  white: "#f2f5f7",
  red: "#e16161",
  orange: "#eb9c5b",
  yellow: "#ecc65f",
  green: "#a8d973",
  turquoise: "#6adac5",
  blue: "#72bcda",
  purple: "#b88ee3",
  pink,
  pinkSaturated250,
};
