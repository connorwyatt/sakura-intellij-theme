import { Polished } from "../deps.ts";

const { darken } = Polished;

const charcoal3 = "#3a3a3c";
const charcoal2 = darken(0.025, charcoal3);
const charcoal1 = darken(0.05, charcoal3);
const charcoal0 = darken(0.1, charcoal3);

export const palette = {
  charcoal0,
  charcoal1,
  charcoal2,
  charcoal3,
  white0: "#f2f5f7",
  red0: "#ce7474",
  orange0: "#d99e6d",
  yellow0: "#dabe71",
  green0: "#a7c785",
  turquoise0: "#7dc7b9",
  blue0: "#7db1c7",
  purple0: "#b89cd5",
  pink0: "#e0adc0",
};
