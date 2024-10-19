import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Dusk Saturated";
const editorScheme = "/themes/sakura-dusk-saturated.xml";

const backgroundColor = palette.blueBlackLighten5;
const overlayBackgroundColor = palette.blueBlackLighten6;
const topBarBackgroundColor = palette.blueBlackLighten4;
const editorBackgroundColor = palette.blueBlackLighten4;

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
