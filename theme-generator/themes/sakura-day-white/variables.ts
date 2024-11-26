import { palette } from "../palette.ts";
import { generateLightTheme } from "../generate-light-theme.ts";

const themeName = "Sakura Day (White)";
const editorScheme = "/themes/sakura-day-white.xml";

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
  palette.redDarken1,
  palette.orangeDarken1,
  palette.yellowDarken1,
  palette.greenDarken1,
  palette.turquoiseDarken1,
  palette.blueDarken1,
  palette.indigoDarken1,
  palette.purpleDarken1,
  palette.pinkDarken1,
);
