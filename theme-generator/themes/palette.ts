import { Polished } from "../deps.ts";

const { darken, saturate } = Polished;

const darkenColor = (
  color: string,
  amounts: {
    saturateAmount?: number;
    darkenAmount?: number;
  } | null = null,
): string => {
  return saturate(
    amounts?.saturateAmount ?? 0.1,
    darken(amounts?.darkenAmount ?? 0.2, color),
  );
};

const baseRed = "#e68a8a";
const baseOrange = "#de9865";
const baseYellow = "#e1ca75";
const baseGreen = "#9bc26c";
const baseTurquoise = "#79d9c7";
const baseBlue = "#76bbd7";
const baseIndigo = "#768dd7";
const basePurple = "#bb99e0";
const basePink = "#e787ac";

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
  orangeDarken1: darkenColor(baseOrange, {
    darkenAmount: 0.1,
  }),
  yellow: baseYellow,
  yellowDarken1: darkenColor(baseYellow, { darkenAmount: 0.15 }),
  green: baseGreen,
  greenDarken1: darkenColor(baseGreen, { darkenAmount: 0.15 }),
  turquoise: baseTurquoise,
  turquoiseDarken1: darkenColor(baseTurquoise),
  blue: baseBlue,
  blueDarken1: darkenColor(baseBlue, { darkenAmount: 0.15 }),
  indigo: baseIndigo,
  indigoDarken1: darkenColor(baseIndigo),
  purple: basePurple,
  purpleDarken1: darkenColor(basePurple, {
    saturateAmount: 0.025,
    darkenAmount: 0.15,
  }),
  pink: basePink,
  pinkDarken1: darkenColor(basePink, {
    saturateAmount: 0.05,
    darkenAmount: 0.1,
  }),
};
