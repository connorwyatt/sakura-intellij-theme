import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Night Saturated";
const editorScheme = "/themes/sakura-night-saturated.xml";

const backgroundColor = palette.blueBlackLighten3;
const overlayBackgroundColor = palette.blueBlackLighten4;
const topBarBackgroundColor = palette.blueBlackLighten2;
const editorBackgroundColor = palette.blueBlackLighten2;

export default generateDarkTheme(
  themeName,
  editorScheme,
  backgroundColor,
  overlayBackgroundColor,
  topBarBackgroundColor,
  editorBackgroundColor,
  palette.saturatedRed,
  palette.saturatedOrange,
  palette.saturatedYellow,
  palette.saturatedGreen,
  palette.saturatedTurquoise,
  palette.saturatedBlue,
  palette.saturatedIndigo,
  palette.saturatedPurple,
  palette.saturatedPink,
);
