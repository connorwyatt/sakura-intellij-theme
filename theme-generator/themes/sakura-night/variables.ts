import { lighten, mix, saturate } from "polished";
import { palette } from "../palette.ts";

const themeName = "Sakura Night";

const backgroundColor = palette.charcoal1;
const topBarBackgroundColor = palette.charcoal0;
const editorBackgroundColor = palette.charcoal2;
const textColor = lighten(0.6, editorBackgroundColor);

const mixWithBackground = (percentage: number, color: string): string =>
  mix(percentage, backgroundColor, color);

const mixWithTopBarBackground = (percentage: number, color: string): string =>
  mix(percentage, topBarBackgroundColor, color);

const mixWithEditorBackground = (percentage: number, color: string): string =>
  mix(percentage, editorBackgroundColor, color);

const guidelinesColor = mixWithEditorBackground(0.9, textColor);

const punctuationColor = mix(
  0.5,
  textColor,
  palette.pink0,
);

const typeName = palette.purple0;

export default {
  name: themeName,
  isDark: true,
  editorScheme: "/themes/sakura-night.xml",
  backgroundColor,
  bordersColor: guidelinesColor,
  actionButtons: {
    hover: {
      backgroundColor: mixWithBackground(0.75, palette.pink0),
      borderColor: mixWithBackground(0.5, palette.pink0),
    },
    pressed: {
      backgroundColor: mixWithBackground(0.65, palette.pink0),
      borderColor: mixWithBackground(0.4, palette.pink0),
    },
    separatorColor: guidelinesColor,
  },
  buttons: {
    primary: {
      backgroundColor: palette.pink0,
      borderColor: palette.pink0,
      textColor: palette.pink2,
    },
    secondary: {
      backgroundColor: mixWithBackground(0.9, palette.pink2),
      borderColor: mixWithBackground(0.8, palette.pink2),
      textColor: textColor,
    },
    shadowColor: mixWithBackground(0.9, palette.pink2),
  },
  checkbox: {
    backgroundColor,
    textColor,
    selectedColor: palette.pink0,
  },
  completionPopup: {
    match: {
      textColor: palette.pink0,
    },
    textColor: textColor,
  },
  counter: {
    backgroundColor: palette.pink0,
    textColor: palette.pink2,
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    textColor: textColor,
    breadcrumbs: {
      current: {
        backgroundColor: mix(
          0.75,
          editorBackgroundColor,
          textColor,
        ),
        textColor: textColor,
      },
      default: {
        backgroundColor: editorBackgroundColor,
        textColor: mixWithEditorBackground(0.5, textColor),
      },
      hovered: (() => {
        const color = mix(
          0.75,
          editorBackgroundColor,
          textColor,
        );
        return ({
          backgroundColor: color,
          textColor: mix(0.5, color, textColor),
        });
      })(),
      inactive: {
        backgroundColor: editorBackgroundColor,
        textColor: mixWithEditorBackground(0.5, textColor),
      },
    },
    caret: {
      color: palette.pink0,
      rowBackgroundColor: lighten(0.05, editorBackgroundColor),
    },
    console: {
      output: {
        black: {
          backgroundColor: textColor,
          textColor: editorBackgroundColor,
        },
        red: palette.red0,
        green: palette.green0,
        yellow: palette.yellow0,
        blue: palette.blue0,
        pink: palette.pink0,
        cyan: palette.skyBlue0,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.red0)),
        greenBright: lighten(0.05, saturate(0.2, palette.green0)),
        yellowBright: lighten(0.05, saturate(0.2, palette.yellow0)),
        blueBright: lighten(0.05, saturate(0.2, palette.blue0)),
        pinkBright: lighten(0.05, saturate(0.2, palette.pink0)),
        cyanBright: lighten(0.05, saturate(0.2, palette.skyBlue0)),
        normal: textColor,
        error: palette.red0,
        system: textColor,
        white: {
          textColor: textColor,
        },
      },
      input: {
        user: textColor,
      },
    },
    errorHint: palette.red0,
    fileStatus: {
      added: palette.green0,
      copied: palette.green0,
      deleted: palette.red0,
      modified: palette.skyBlue0,
    },
    foldedText: {
      textColor: mixWithEditorBackground(0.5, textColor),
      backgroundColor: mixWithEditorBackground(0.9, textColor),
    },
    identifierUnderCaret: {
      effectColor: palette.pink0,
      errorStripeColor: mixWithEditorBackground(0.75, palette.pink0),
    },
    info: {
      effectColor: palette.skyBlue0,
      errorStripeColor: palette.skyBlue0,
    },
    indentGuideColor: mixWithEditorBackground(0.85, textColor),
    inlay: {
      default: {
        backgroundColor: palette.pink0,
        textColor: palette.white0,
      },
      noBackground: {
        textColor: textColor,
      },
    },
    inlineHint: {
      current: {
        backgroundColor: palette.pink0,
        textColor: palette.pink2,
      },
      default: {
        backgroundColor: mixWithEditorBackground(0, palette.pink0),
        textColor: palette.pink2,
      },
      highlighted: {
        backgroundColor: palette.pink0,
        textColor: palette.pink2,
      },
    },
    label: {
      textColor: textColor,
    },
    lineNumbers: {
      normal: { textColor: textColor },
      caretRow: { textColor: palette.pink0 },
    },
    matchingElement: {
      effectColor: palette.pink0,
    },
    selection: {
      backgroundColor: mixWithEditorBackground(0.75, palette.pink0),
      textColor: null,
    },
    syntax: {
      attribute: palette.purple0,
      badCharacter: { effectColor: palette.red0 },
      braces: punctuationColor,
      brackets: punctuationColor,
      className: typeName,
      classReference: typeName,
      color: palette.purple0,
      comma: punctuationColor,
      comment: {
        textColor: mixWithEditorBackground(0.5, textColor),
      },
      constant: palette.skyBlue0,
      deprecation: {
        effectColor: palette.red0,
      },
      docs: {
        comment: {
          textColor: mixWithEditorBackground(0.25, palette.green0),
          tag: {
            textColor: palette.pink0,
            value: {
              textColor: palette.yellow0,
            },
          },
        },
        markup: {
          textColor: palette.skyBlue0,
        },
      },
      dot: punctuationColor,
      entity: palette.skyBlue0,
      error: {
        effectColor: palette.red0,
        errorStripeColor: palette.red0,
      },
      functionCall: palette.yellow0,
      functionDeclaration: palette.yellow0,
      globalVariable: palette.yellow0,
      highlightedReference: {
        textColor: textColor,
        effectColor: textColor,
      },
      identifier: textColor,
      instanceField: textColor,
      instanceMethod: palette.yellow0,
      interfaceName: typeName,
      json: {
        propertyKey: palette.yellow0,
      },
      label: palette.purple0,
      keyword: palette.pink0,
      metadata: palette.yellow0,
      namedParameter: palette.yellow0,
      number: palette.skyBlue0,
      operator: punctuationColor,
      parameter: textColor,
      primitiveTypes: typeName,
      semicolon: punctuationColor,
      staticField: textColor,
      staticMethod: palette.yellow0,
      string: palette.green0,
      stringEscape: {
        invalid: { textColor: palette.skyBlue0, effectColor: palette.red0 },
        valid: { textColor: palette.skyBlue0 },
      },
      tag: punctuationColor,
      todo: {
        textColor: palette.orange0,
        errorStripeColor: palette.orange0,
      },
      typeParameter: typeName,
      typo: {
        effectColor: palette.yellow0,
        errorStripeColor: palette.yellow0,
      },
      unusedElement: {
        backgroundColor: null,
        textColor: mixWithEditorBackground(0.5, textColor),
        effectColor: mixWithEditorBackground(0.25, palette.yellow0),
      },
      warning: {
        effectColor: palette.yellow0,
        errorStripeColor: palette.yellow0,
      },
      writeIdentifierUnderCaret: {
        backgroundColor: mixWithEditorBackground(0.9, textColor),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          textColor,
        ),
      },
      xml: {
        nsPrefix: { textColor: palette.yellow0 },
        attributeName: palette.green0,
        attributeValue: palette.skyBlue0,
        tagName: palette.yellow0,
      },
    },
    tab: {
      modifiedIconColor: palette.pink0,
    },
    whitespaces: punctuationColor,
  },
  field: {
    disabled: {
      borderColor: mixWithBackground(0.5, guidelinesColor),
    },
    focused: {
      borderColor: palette.pink0,
    },
    iconColor: textColor,
    focusColor: palette.pink0,
    hover: {
      iconColor: textColor,
    },
    error: {
      focusColor: palette.red0,
      inactive: {
        focusColor: mixWithBackground(0.5, palette.red0),
      },
    },
    warning: {
      focusColor: palette.yellow0,
      inactive: {
        focusColor: mixWithBackground(0.5, palette.yellow0),
      },
    },
  },
  fileColors: {
    blue: mixWithBackground(0.8, palette.skyBlue0),
    gray: mixWithBackground(0.8, textColor),
    green: mixWithBackground(0.8, palette.green0),
    orange: mixWithBackground(0.8, palette.orange0),
    rose: mixWithBackground(0.8, palette.red0),
    violet: mixWithBackground(0.8, palette.purple0),
    yellow: mixWithBackground(0.8, palette.yellow0),
  },
  group: {
    separatorColor: guidelinesColor,
    disabled: { separatorColor: mixWithBackground(0.5, guidelinesColor) },
  },
  label: {
    textColor,
  },
  link: {
    active: { textColor: palette.pink1 },
    hover: { textColor: palette.pink0 },
    visited: { textColor: palette.pink1 },
    pressed: { textColor: palette.pink0 },
  },
  list: {
    textColor,
    hover: {
      backgroundColor: lighten(0.05, backgroundColor),
      inactive: {
        backgroundColor: lighten(0.025, backgroundColor),
      },
    },
  },
  mainToolbar: {
    backgroundColor: topBarBackgroundColor,
    inactive: {
      textColor: mixWithTopBarBackground(0.5, textColor),
    },
  },
  menuItem: {
    backgroundColor,
    textColor,
    accelerator: { textColor: mixWithBackground(0.25, textColor) },
    disabled: {
      backgroundColor,
      textColor: mixWithBackground(0.5, textColor),
    },
  },
  notification: {
    backgroundColor: editorBackgroundColor,
    borderColor: guidelinesColor,
    textColor,
    error: {
      backgroundColor: mixWithEditorBackground(0.5, palette.red0),
      borderColor: palette.red0,
      textColor: textColor,
    },
    info: {
      backgroundColor: mixWithEditorBackground(0.5, palette.skyBlue0),
      borderColor: palette.skyBlue0,
      textColor: textColor,
    },
    warning: {
      backgroundColor: mixWithEditorBackground(0.5, palette.yellow0),
      borderColor: palette.yellow0,
      textColor: textColor,
    },
  },
  panel: {
    backgroundColor: backgroundColor,
    foregroundColor: textColor,
  },
  plugins: {
    backgroundColor: backgroundColor,
    hover: {
      backgroundColor: editorBackgroundColor,
    },
  },
  popup: {
    backgroundColor: editorBackgroundColor,
    separatorColor: guidelinesColor,
    borderColor: guidelinesColor,
  },
  progressBar: {
    backgroundColor: editorBackgroundColor,
    foregroundColor: mixWithEditorBackground(0.5, palette.pink2),
    progressColor: mixWithEditorBackground(0.5, palette.pink2),
    indeterminate: {
      startColor: palette.pink0,
      endColor: palette.pink2,
    },
    failedColor: palette.red0,
    failedEndColor: lighten(0.1, palette.red0),
    warningColor: palette.yellow0,
    warningEndColor: lighten(0.1, palette.yellow0),
    passedColor: palette.green0,
    passedEndColor: lighten(0.1, palette.green0),
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.5, palette.pink0),
    thumbBorderColor: mixWithBackground(0.25, palette.pink0),
    hover: {
      thumbColor: mixWithBackground(0.25, palette.pink0),
      thumbBorderColor: palette.pink0,
    },
  },
  selection: {
    active: {
      backgroundColor: mixWithBackground(0.5, palette.pink0),
    },
    inactive: {
      backgroundColor: mixWithBackground(0.75, palette.pink0),
    },
    textColor: palette.pink2,
  },
  tab: {
    active: {
      backgroundColor: mixWithBackground(0.8, palette.pink0),
      focused: {
        underlineColor: palette.pink0,
      },
      unfocused: {
        underlineColor: palette.pink0,
      },
    },
    hover: {
      backgroundColor: mixWithBackground(0.9, palette.pink0),
    },
    inactive: {
      backgroundColor,
    },
  },
  tabbedPane: {
    underlineColor: palette.pink0,
  },
  toolWindow: {
    backgroundColor,
    button: {
      selected: {
        backgroundColor: mixWithBackground(0.5, palette.pink0),
        iconColor: textColor,
      },
      hover: { backgroundColor: mixWithBackground(0.5, palette.pink0) },
    },
    header: {
      backgroundColor,
      borderColor: guidelinesColor,
      inactive: { backgroundColor: lighten(0.05, backgroundColor) },
    },
  },
  tree: {
    rowHeight: 28,
    hash: guidelinesColor,
  },
};
