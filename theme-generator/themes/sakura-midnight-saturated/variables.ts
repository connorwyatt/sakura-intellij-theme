import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Midnight Saturated";
const editorScheme = "/themes/sakura-midnight-saturated.xml";

const backgroundColor = palette.blueBlackLighten1;
const overlayBackgroundColor = palette.blueBlackLighten2;
const topBarBackgroundColor = palette.blueBlack;
const editorBackgroundColor = palette.blueBlack;

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
