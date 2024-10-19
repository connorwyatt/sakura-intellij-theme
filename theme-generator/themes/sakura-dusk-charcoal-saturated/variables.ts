import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Dusk Saturated (Charcoal)";
const editorScheme = "/themes/sakura-dusk-charcoal-saturated.xml";

const backgroundColor = palette.blackLighten5;
const overlayBackgroundColor = palette.blackLighten6;
const topBarBackgroundColor = palette.blackLighten4;
const editorBackgroundColor = palette.blackLighten4;

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
