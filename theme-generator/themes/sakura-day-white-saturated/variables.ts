import { palette } from "../palette.ts";
import { generateLightTheme } from "../generate-light-theme.ts";

const themeName = "Sakura Day Saturated (White)";
const editorScheme = "/themes/sakura-day-white-saturated.xml";

const backgroundColor = palette.whiteDarken1;
const overlayBackgroundColor = palette.whiteDarken2;
const topBarBackgroundColor = palette.whiteDarken2;
const editorBackgroundColor = palette.white;

export default generateLightTheme(
  themeName,
  editorScheme,
  backgroundColor,
  overlayBackgroundColor,
  topBarBackgroundColor,
  editorBackgroundColor,
  palette.black,
  palette.blackLighten1,
  palette.blackLighten2,
  palette.blackLighten3,
  palette.blackLighten4,
  palette.blackLighten5,
  palette.blackLighten6,
  palette.white,
  palette.whiteDarken1,
  palette.whiteDarken2,
  palette.whiteDarken3,
  palette.whiteDarken4,
  palette.saturatedRedDarken1,
  palette.saturatedOrangeDarken1,
  palette.saturatedYellowDarken1,
  palette.saturatedGreenDarken1,
  palette.saturatedTurquoiseDarken1,
  palette.saturatedBlueDarken1,
  palette.saturatedIndigoDarken1,
  palette.saturatedPurpleDarken1,
  palette.saturatedPinkDarken1,
);
