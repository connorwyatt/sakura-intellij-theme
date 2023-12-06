import { rgb2hex } from "./deps.ts";

export const rgbaToHex = (rgba: string): string => {
  const { hex, alpha } = rgb2hex(rgba);

  const opacityHex = (Math.round(alpha * 255)).toString(16);

  return `${hex}${opacityHex}`;
};
