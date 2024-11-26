import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Night";
const editorScheme = "/themes/sakura-night.xml";

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
  palette.blueWhite,
  palette.blueWhiteDarken1,
  palette.blueWhiteDarken2,
  palette.blueWhiteDarken3,
  palette.blueWhiteDarken4,
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
