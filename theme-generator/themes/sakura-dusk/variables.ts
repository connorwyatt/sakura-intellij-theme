import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Dusk";
const editorScheme = "/themes/sakura-dusk.xml";

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
);
