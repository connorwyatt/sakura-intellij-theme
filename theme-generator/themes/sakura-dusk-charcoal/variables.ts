import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Dusk (Charcoal)";
const editorScheme = "/themes/sakura-dusk-charcoal.xml";

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
