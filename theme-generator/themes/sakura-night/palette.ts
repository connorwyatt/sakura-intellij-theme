import { darken, lighten } from "polished";

const charcoal3 = "#3a3a3c";
const charcoal2 = darken(0.025, charcoal3);
const charcoal1 = darken(0.05, charcoal3);
const charcoal0 = darken(0.1, charcoal3);

const pink0 = "#fb9ebf";
const pink1 = lighten(0.075, pink0);
const pink2 = lighten(0.15, pink0);

export const palette = {
  charcoal0,
  charcoal1,
  charcoal2,
  charcoal3,
  white0: "#f2f5f7",
  red0: "#ce7474",
  orange0: "#d9926d",
  yellow0: "#dabe71",
  green0: "#a7c785",
  skyBlue0: "#7dbcc7",
  blue0: "#8ca0d2",
  purple0: "#b89cd5",
  pink0,
  pink1,
  pink2,
};
