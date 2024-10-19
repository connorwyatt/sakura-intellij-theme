import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Night (Charcoal)";
const editorScheme = "/themes/sakura-night-charcoal.xml";

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
  palette.red,
  palette.orange,
  palette.yellow,
  palette.green,
  palette.turquoise,
  palette.blue,
  palette.indigo,
  palette.purple,
  palette.pink,
);
