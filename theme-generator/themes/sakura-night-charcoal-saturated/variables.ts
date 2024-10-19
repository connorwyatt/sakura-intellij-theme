import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Night Saturated (Charcoal)";
const editorScheme = "/themes/sakura-night-charcoal-saturated.xml";

const backgroundColor = palette.blackLighten3;
const overlayBackgroundColor = palette.blackLighten4;
const topBarBackgroundColor = palette.blackLighten2;
const editorBackgroundColor = palette.blackLighten2;

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
