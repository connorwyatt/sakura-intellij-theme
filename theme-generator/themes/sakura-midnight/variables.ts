import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Midnight";
const editorScheme = "/themes/sakura-midnight.xml";

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
