import { Polished } from "../deps.ts";

const { darken, saturate } = Polished;

const charcoal3 = "#323b3f";
const charcoal2 = darken(0.075, charcoal3);
const charcoal1 = darken(0.1, charcoal3);
const charcoal0 = darken(0.125, charcoal3);

export const palette = {
  charcoal0,
  charcoal1,
  charcoal2,
  charcoal3,
  white0: "#f2f5f7",
  red0: saturate(0.2, "#ce7474"),
  orange0: saturate(0.2, "#d99e6d"),
  yellow0: saturate(0.2, "#dabe71"),
  green0: saturate(0.2, "#a7c785"),
  turquoise0: saturate(0.2, "#7dc7b9"),
  blue0: saturate(0.2, "#7db1c7"),
  purple0: saturate(0.2, "#b89cd5"),
  pink0: saturate(0.2, "#e0adc0"),
};
