import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";

const { desaturate, lighten, mix, saturate } = Polished;

const themeName = "Sakura Night";

const backgroundColor = palette.charcoal1;
const topBarBackgroundColor = palette.charcoal0;
const editorBackgroundColor = palette.charcoal2;

const mixWithBackground = (percentage: number, color: string): string =>
  mix(percentage, backgroundColor, color);

const mixWithTopBarBackground = (percentage: number, color: string): string =>
  mix(percentage, topBarBackgroundColor, color);

const mixWithEditorBackground = (percentage: number, color: string): string =>
  mix(percentage, editorBackgroundColor, color);

const textColor = lighten(0.6, backgroundColor);
const editorTextColor = desaturate(0.5, palette.pink0);

const errorColor = palette.red0;
const infoColor = palette.blue0;
const successColor = palette.green0;
const warningColor = palette.yellow0;

const guidelinesColor = mixWithEditorBackground(0.9, textColor);

const constantColor = palette.purple0;
const functionColor = palette.blue0;
const globalVariableColor = palette.yellow0;
const keywordColor = palette.pink0;
const localVariableColor = editorTextColor;
const metadataColor = palette.purple0;
const numberColor = palette.blue0;
const punctuationColor = mix(0.5, editorTextColor, palette.pink0);
const stringColor = palette.green0;
const stringEscapeColor = palette.orange0;
const todoColor = palette.orange0;
const typeNameColor = palette.yellow0;

const syntax = {
  attribute: metadataColor,
  badCharacter: { textColor: errorColor, effectColor: errorColor },
  braces: punctuationColor,
  brackets: punctuationColor,
  className: typeNameColor,
  classReference: typeNameColor,
  color: stringEscapeColor,
  comma: punctuationColor,
  comment: {
    textColor: mixWithEditorBackground(0.25, editorTextColor),
  },
  constant: constantColor,
  deprecation: {
    effectColor: mixWithEditorBackground(0.5, editorTextColor),
    textColor: mixWithEditorBackground(0.5, editorTextColor),
  },
  docs: {
    comment: {
      textColor: mixWithEditorBackground(0.25, stringColor),
      tag: {
        textColor: palette.pink0,
        value: {
          textColor: palette.yellow0,
        },
      },
    },
    markup: {
      textColor: palette.blue0,
    },
  },
  dot: punctuationColor,
  entity: stringEscapeColor,
  error: {
    textColor: errorColor,
    effectColor: errorColor,
    errorStripeColor: errorColor,
  },
  functionCall: functionColor,
  functionDeclaration: functionColor,
  globalVariable: globalVariableColor,
  highlightedReference: {
    textColor: editorTextColor,
    effectColor: editorTextColor,
  },
  identifier: editorTextColor,
  instanceField: editorTextColor,
  instanceMethod: functionColor,
  interfaceName: typeNameColor,
  json: {
    propertyKey: keywordColor,
  },
  label: metadataColor,
  localVariable: localVariableColor,
  keyword: keywordColor,
  markedForRemoval: {
    effectColor: errorColor,
    textColor: mixWithEditorBackground(0.5, errorColor),
  },
  metadata: metadataColor,
  namedParameter: metadataColor,
  number: numberColor,
  operator: punctuationColor,
  parameter: editorTextColor,
  primitiveTypes: typeNameColor,
  semicolon: punctuationColor,
  staticField: editorTextColor,
  staticMethod: functionColor,
  string: stringColor,
  stringEscape: {
    invalid: { textColor: stringEscapeColor, effectColor: errorColor },
    valid: { textColor: stringEscapeColor },
  },
  tabs: mixWithEditorBackground(0.5, punctuationColor),
  tag: punctuationColor,
  todo: {
    textColor: editorTextColor,
    errorStripeColor: todoColor,
  },
  typeParameter: typeNameColor,
  typo: {
    effectColor: warningColor,
    errorStripeColor: warningColor,
  },
  unusedElement: {
    backgroundColor: null,
    textColor: mixWithEditorBackground(0.5, editorTextColor),
    effectColor: mixWithEditorBackground(0.25, warningColor),
  },
  warning: {
    effectColor: warningColor,
    errorStripeColor: warningColor,
  },
  whitespace: mixWithEditorBackground(0.5, punctuationColor),
  xml: {
    nsPrefix: { textColor: palette.yellow0 },
    attributeName: palette.yellow0,
    attributeValue: palette.blue0,
    tagName: palette.pink0,
  },
};

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
      textColor: lighten(0.15, palette.pink0),
    },
    secondary: {
      backgroundColor: mixWithBackground(0.9, lighten(0.15, palette.pink0)),
      borderColor: mixWithBackground(0.8, lighten(0.15, palette.pink0)),
      textColor,
    },
    shadowColor: mixWithBackground(0.9, lighten(0.15, palette.pink0)),
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
    textColor,
  },
  counter: {
    backgroundColor: palette.pink0,
    textColor: lighten(0.15, palette.pink0),
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: guidelinesColor,
    textColor,
    breadcrumbs: {
      current: {
        backgroundColor: mix(
          0.75,
          editorBackgroundColor,
          textColor,
        ),
        textColor,
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
    codeLens: {
      borderColor: palette.pink0,
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
        cyan: palette.blue0,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.red0)),
        greenBright: lighten(0.05, saturate(0.2, palette.green0)),
        yellowBright: lighten(0.05, saturate(0.2, palette.yellow0)),
        blueBright: lighten(0.05, saturate(0.2, palette.blue0)),
        pinkBright: lighten(0.05, saturate(0.2, palette.pink0)),
        cyanBright: lighten(0.05, saturate(0.2, palette.blue0)),
        normal: textColor,
        error: errorColor,
        system: textColor,
        white: {
          textColor,
        },
      },
      input: {
        user: textColor,
      },
    },
    ctrlClickable: {
      textColor: palette.pink0,
      effectColor: palette.pink0,
    },
    diff: {
      conflict: {
        importantColor: mixWithEditorBackground(0.5, palette.yellow0),
        ignoredColor: mixWithEditorBackground(0.8, palette.yellow0),
        errorStripeColor: mixWithEditorBackground(0.5, palette.yellow0),
      },
      deleted: {
        importantColor: mixWithEditorBackground(0.5, palette.red0),
        ignoredColor: mixWithEditorBackground(0.8, palette.red0),
        errorStripeColor: mixWithEditorBackground(0.5, palette.red0),
      },
      inserted: {
        importantColor: mixWithEditorBackground(0.5, palette.green0),
        ignoredColor: mixWithEditorBackground(0.8, palette.green0),
        errorStripeColor: mixWithEditorBackground(0.5, palette.green0),
      },
      modified: {
        importantColor: mixWithEditorBackground(0.5, palette.blue0),
        ignoredColor: mixWithEditorBackground(0.8, palette.blue0),
        errorStripeColor: mixWithEditorBackground(0.5, palette.blue0),
      },
      separatorWave: mixWithEditorBackground(0.25, palette.pink0),
    },
    fileStatus: {
      added: palette.green0,
      copied: palette.green0,
      deleted: palette.red0,
      modified: palette.blue0,
    },
    foldedText: {
      textColor: mixWithEditorBackground(0.5, textColor),
      backgroundColor: mixWithEditorBackground(0.9, textColor),
    },
    gutter: {
      backgroundColor: mixWithEditorBackground(0.75, backgroundColor),
    },
    hint: {
      borderColor: guidelinesColor,
      error: mixWithBackground(0.5, palette.red0),
      info: backgroundColor,
      question: mixWithBackground(0.5, palette.purple0),
      warning: mixWithBackground(0.5, palette.yellow0),
    },
    identifierUnderCaret: {
      standard: {
        backgroundColor: mixWithEditorBackground(0.75, palette.pink0),
        effectColor: mixWithEditorBackground(0.5, palette.pink0),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.pink0,
        ),
      },
      write: {
        backgroundColor: mixWithEditorBackground(0.75, palette.pink0),
        effectColor: mixWithEditorBackground(0.5, palette.pink0),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.pink0,
        ),
      },
    },
    info: {
      effectColor: infoColor,
      errorStripeColor: infoColor,
    },
    indentGuide: {
      normal: { color: guidelinesColor },
      selected: { color: mixWithEditorBackground(0.5, palette.pink0) },
    },
    inlay: {
      default: {
        backgroundColor: palette.pink0,
        textColor: palette.white0,
      },
      noBackground: {
        textColor,
      },
    },
    inlineHint: {
      current: {
        backgroundColor: palette.pink0,
        textColor: lighten(0.15, palette.pink0),
      },
      default: {
        backgroundColor: mixWithEditorBackground(0, palette.pink0),
        textColor: lighten(0.15, palette.pink0),
      },
      highlighted: {
        backgroundColor: palette.pink0,
        textColor: lighten(0.15, palette.pink0),
      },
    },
    label: {
      textColor,
    },
    lineNumbers: {
      normal: { textColor },
      caretRow: { textColor: palette.pink0 },
    },
    matchingElement: {
      effectColor: palette.pink0,
    },
    methodSeparators: mixWithEditorBackground(0.75, palette.pink0),
    notification: {
      backgroundColor: mixWithEditorBackground(0.5, palette.pink0),
    },
    search: {
      searchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue0),
        effectColor: mixWithEditorBackground(0.25, palette.blue0),
      },
      textSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue0),
        effectColor: mixWithEditorBackground(0.25, palette.blue0),
      },
      writeSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue0),
        effectColor: mixWithEditorBackground(0.25, palette.blue0),
      },
    },
    selection: {
      backgroundColor: mixWithEditorBackground(0.75, palette.pink0),
      textColor: null,
    },
    softWrapSign: guidelinesColor,
    syntax,
    tab: {
      modifiedIconColor: palette.pink0,
    },
    vcs: {
      annotation: {
        textColor,
        lastCommit: {
          textColor,
        },
        color1: mixWithEditorBackground(0.3, palette.pink0),
        color2: mixWithEditorBackground(0.45, palette.pink0),
        color3: mixWithEditorBackground(0.6, palette.pink0),
        color4: mixWithEditorBackground(0.75, palette.pink0),
        color5: mixWithEditorBackground(0.9, palette.pink0),
      },
      gutter: {
        addedLines: palette.green0,
        modifiedLines: palette.blue0,
        removedLines: palette.red0,
      },
    },
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
      focusColor: errorColor,
      inactive: {
        focusColor: mixWithBackground(0.5, errorColor),
      },
    },
    warning: {
      focusColor: warningColor,
      inactive: {
        focusColor: mixWithBackground(0.5, warningColor),
      },
    },
  },
  fileColors: {
    blue: mixWithBackground(0.8, palette.blue0),
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
    active: { textColor: palette.pink0 },
    hover: { textColor: palette.pink0 },
    visited: { textColor: palette.pink0 },
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
      backgroundColor: mixWithEditorBackground(0.5, errorColor),
      borderColor: errorColor,
      textColor,
    },
    info: {
      backgroundColor: mixWithEditorBackground(0.5, infoColor),
      borderColor: infoColor,
      textColor,
    },
    warning: {
      backgroundColor: mixWithEditorBackground(0.5, warningColor),
      borderColor: warningColor,
      textColor,
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
    foregroundColor: mixWithEditorBackground(0.5, lighten(0.15, palette.pink0)),
    progressColor: mixWithEditorBackground(0.5, lighten(0.15, palette.pink0)),
    indeterminate: {
      startColor: palette.pink0,
      endColor: lighten(0.15, palette.pink0),
    },
    failedColor: errorColor,
    failedEndColor: lighten(0.1, errorColor),
    warningColor: warningColor,
    warningEndColor: lighten(0.1, warningColor),
    passedColor: successColor,
    passedEndColor: lighten(0.1, successColor),
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
    textColor: lighten(0.15, palette.pink0),
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
