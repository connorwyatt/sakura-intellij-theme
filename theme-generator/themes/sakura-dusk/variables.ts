import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Dusk";
const editorScheme = "/themes/sakura-dusk.xml";

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
