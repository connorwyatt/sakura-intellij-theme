import { Polished } from "../deps.ts";

const { darken } = Polished;

const charcoal = "#2b363b";
const charcoalDarken050 = darken(0.05, charcoal);
const charcoalDarken075 = darken(0.075, charcoal);
const charcoalDarken100 = darken(0.1, charcoal);
const charcoalDarken125 = darken(0.125, charcoal);

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
  pink: "#eba2bd",
};
