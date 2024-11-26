import { palette } from "../palette.ts";
import { generateLightTheme } from "../generate-light-theme.ts";

const themeName = "Sakura Day Saturated";
const editorScheme = "/themes/sakura-day-saturated.xml";

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
