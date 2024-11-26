import { palette } from "../palette.ts";
import { generateLightTheme } from "../generate-light-theme.ts";

const themeName = "Sakura Day";
const editorScheme = "/themes/sakura-day.xml";

const backgroundColor = palette.blueWhiteDarken1;
const overlayBackgroundColor = palette.blueWhiteDarken2;
const topBarBackgroundColor = palette.blueWhiteDarken2;
const editorBackgroundColor = palette.blueWhite;

export default generateLightTheme(
  themeName,
  editorScheme,
  backgroundColor,
  overlayBackgroundColor,
  topBarBackgroundColor,
  editorBackgroundColor,
  palette.blueBlack,
  palette.blueBlackLighten1,
  palette.blueBlackLighten2,
  palette.blueBlackLighten3,
  palette.blueBlackLighten4,
  palette.blueBlackLighten5,
  palette.blueBlackLighten6,
  palette.blueWhite,
  palette.blueWhiteDarken1,
  palette.blueWhiteDarken2,
  palette.blueWhiteDarken3,
  palette.blueWhiteDarken4,
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
