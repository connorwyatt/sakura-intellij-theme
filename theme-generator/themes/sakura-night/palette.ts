import { darken, lighten } from "polished";

const brown3 = "#3a3a3c";
const brown2 = darken(0.025, brown3);
const brown1 = darken(0.05, brown3);
const brown0 = darken(0.1, brown3);

const pink0 = "#fb9ebf";
const pink1 = lighten(0.075, pink0);
const pink2 = lighten(0.15, pink0);

export const palette = {
  brown0,
  brown1,
  brown2,
  brown3,
  white0: "#f2f5f7",
  pink0,
  pink1,
  pink2,
  green0: "#9db27e",
  blue0: "#83aec9",
  turquoise0: "#88c9ad",
  red0: "#cb787c",
  orange0: "#c28c6f",
  yellow0: "#d7bd78",
  purple0: "#a688c2",
};
