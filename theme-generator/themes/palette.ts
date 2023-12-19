import { Polished } from "../deps.ts";

const { darken, saturate } = Polished;

const darkenColor = (color: string): string => {
  return saturate(0.1, darken(0.15, color));
};

const baseRed = "#e68a8a";
const baseOrange = "#de9259";
const baseYellow = "#e3c448";
const baseGreen = "#a3d36a";
const baseTurquoise = "#6adac5";
const baseBlue = "#76bbd7";
const baseIndigo = "#768dd7";
const basePurple = "#b78ee0";
const basePink = "#e88fb1";

export const palette = {
  black: "#151d20",
  blackLighten1: "#1a2428",
  blackLighten2: "#1f2b30",
  blackLighten3: "#243238",
  white: "#f5fbfc",
  whiteDarken1: "#f0f6f7",
  whiteDarken2: "#e8eeef",
  whiteDarken3: "#dfe4e6",
  whiteDarken4: "#d2d8d9",
  red: baseRed,
  redDarken1: darkenColor(baseRed),
  orange: baseOrange,
  orangeDarken1: darkenColor(baseOrange),
  yellow: baseYellow,
  yellowDarken1: darkenColor(baseYellow),
  green: baseGreen,
  greenDarken1: darkenColor(baseGreen),
  turquoise: baseTurquoise,
  turquoiseDarken1: darkenColor(baseTurquoise),
  blue: baseBlue,
  blueDarken1: darkenColor(baseBlue),
  indigo: baseIndigo,
  indigoDarken1: darkenColor(baseIndigo),
  purple: basePurple,
  purpleDarken1: darkenColor(basePurple),
  pink: basePink,
  pinkDarken1: darkenColor(basePink),
};
