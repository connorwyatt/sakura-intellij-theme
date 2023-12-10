import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";
import { rgbaToHex } from "../../utilities.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

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

const focusColor = palette.pink0;

const fieldBackgroundColor = mixWithBackground(
  0.8,
  lighten(0.15, palette.pink0),
);
const fieldBorderColor = fieldBackgroundColor;
const fieldTextColor = textColor;

const disabledFieldBorderColor = mixWithBackground(0.5, fieldBorderColor);
const disabledFieldTextColor = mixWithBackground(0.5, fieldTextColor);

const buttonPrimaryBackgroundColor = palette.pink0;
const buttonPrimaryBorderColor = buttonPrimaryBackgroundColor;
const buttonPrimaryTextColor = backgroundColor;

const buttonSecondaryBackgroundColor = fieldBackgroundColor;
const buttonSecondaryBorderColor = fieldBorderColor;
const buttonSecondaryTextColor = fieldTextColor;

const caretColor = palette.pink0;

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
  actions: {
    blue: palette.blue0,
    green: palette.green0,
    grey: textColor,
    greyInline: "#ff00ff",
    greyInlineDark: textColor,
    red: palette.red0,
    yellow: palette.yellow0,
  },
  banner: {
    error: {
      backgroundColor: mixWithBackground(0.75, palette.red0),
      borderColor: mixWithBackground(0.5, palette.red0),
    },
    info: {
      backgroundColor: mixWithBackground(0.75, palette.blue0),
      borderColor: mixWithBackground(0.5, palette.blue0),
    },
    success: {
      backgroundColor: mixWithBackground(0.75, palette.green0),
      borderColor: mixWithBackground(0.5, palette.green0),
    },
    warning: {
      backgroundColor: mixWithBackground(0.75, palette.yellow0),
      borderColor: mixWithBackground(0.5, palette.yellow0),
    },
  },
  buttons: {
    primary: {
      backgroundColor: buttonPrimaryBackgroundColor,
      borderColor: buttonPrimaryBorderColor,
      textColor: buttonPrimaryTextColor,
      focusColor,
      focused: {
        borderColor: focusColor,
      },
    },
    secondary: {
      backgroundColor: buttonSecondaryBackgroundColor,
      borderColor: buttonSecondaryBorderColor,
      textColor: buttonSecondaryTextColor,
    },
    disabled: {
      borderColor: disabledFieldBorderColor,
      textColor: disabledFieldTextColor,
    },
    focused: {
      borderColor: focusColor,
    },
    split: {
      primary: {
        iconColor: buttonPrimaryTextColor,
        separatorColor: guidelinesColor,
      },
    },
    shadowColor: mixWithBackground(0.9, buttonPrimaryTextColor),
  },
  checkbox: {
    backgroundColor,
    textColor,
    selectedColor: "#ff0000",
    selected: {
      backgroundColor: fieldBackgroundColor,
      borderColor: fieldBorderColor,
      focusColor,
      tickColor: fieldTextColor,
    },
    unselected: {
      backgroundColor,
      borderColor: fieldBorderColor,
      focusColor,
    },
    disabled: {
      backgroundColor: mixWithBackground(0.5, fieldBackgroundColor),
      borderColor: mixWithBackground(0.5, fieldBorderColor),
      tickColor: mixWithBackground(0.5, fieldTextColor),
    },
  },
  comboBox: {
    backgroundColor,
    textColor: fieldTextColor,
    disabled: {
      textColor: mixWithBackground(0.5, fieldTextColor),
    },
    modified: {
      textColor: "#ffff00",
    },
    selected: {
      backgroundColor: mixWithBackground(0.5, palette.pink0),
      textColor,
    },
    nonEditable: {
      backgroundColor: editorBackgroundColor,
    },
    arrowButton: {
      backgroundColor: fieldBackgroundColor,
      iconColor: fieldTextColor,
      disabled: {
        iconColor: fieldTextColor,
      },
      nonEditable: {
        backgroundColor: fieldBackgroundColor,
      },
    },
  },
  completionPopup: {
    match: {
      textColor: palette.pink0,
    },
    textColor,
  },
  complexPopup: { header: { backgroundColor } },
  counter: {
    backgroundColor: palette.pink0,
    textColor: lighten(0.15, palette.pink0),
  },
  dragAndDrop: {
    borderColor: "#ff0000",
    area: {
      backgroundColor: mixWithBackground(0.75, palette.pink0),
      foregroundColor: mixWithBackground(0.75, palette.pink0),
    },
    row: { backgroundColor: "#ff00ff" },
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: guidelinesColor,
    textColor,
    bookmark: {
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.pink0),
      errorStripeColor: mixWithEditorBackground(0.75, palette.pink0),
    },
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
    breakpoint: {
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.red0),
      errorStripeColor: mixWithEditorBackground(0.75, palette.red0),
    },
    caret: {
      color: caretColor,
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
    readonly: {
      background: mixWithEditorBackground(0.95, palette.pink0),
      fragmentBackground: mixWithEditorBackground(0.95, palette.pink0),
    },
    rightMarginColor: guidelinesColor,
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
      changedLinesPopup: {
        backgroundColor,
      },
      gutter: {
        addedLines: palette.green0,
        modifiedLines: palette.blue0,
        removedLines: palette.red0,
      },
    },
    visualIndentGuideColor: "#ffff00",
  },
  field: {
    disabled: {
      borderColor: fieldBorderColor,
    },
    focused: {
      borderColor: focusColor,
    },
    iconColor: textColor,
    focusColor,
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
    blue: mixWithBackground(0.75, desaturate(0.1, palette.blue0)),
    gray: mixWithBackground(0.75, desaturate(0.1, textColor)),
    green: mixWithBackground(0.75, desaturate(0.1, palette.green0)),
    orange: mixWithBackground(0.75, desaturate(0.1, palette.orange0)),
    rose: mixWithBackground(0.75, desaturate(0.1, palette.red0)),
    violet: mixWithBackground(0.75, desaturate(0.1, palette.purple0)),
    yellow: mixWithBackground(0.75, desaturate(0.1, palette.yellow0)),
  },
  group: {
    separatorColor: guidelinesColor,
    disabled: { separatorColor: mixWithBackground(0.5, guidelinesColor) },
  },
  label: {
    backgroundColor: "#ff0000",
    textColor,
    disabled: {
      textColor: mixWithBackground(0.5, textColor),
    },
    error: {
      textColor: errorColor,
    },
    info: {
      textColor: infoColor,
    },
    success: {
      textColor: successColor,
    },
  },
  link: {
    active: { textColor: palette.blue0 },
    hover: { textColor: palette.blue0 },
    visited: { textColor: palette.blue0 },
    pressed: { textColor: palette.blue0 },
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
  menu: {
    backgroundColor: editorBackgroundColor,
    textColor,
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
  objects: {
    blue: palette.blue0,
    blackText: palette.charcoal0,
    green: palette.green0,
    grey: palette.charcoal3,
    pink: palette.pink0,
    purple: palette.purple0,
    red: palette.red0,
    redStatus: palette.red0,
    yellow: palette.yellow0,
    yellowDark: darken(0.2, palette.yellow0),
  },
  panel: {
    backgroundColor,
    foregroundColor: textColor,
  },
  plugins: {
    list: {
      backgroundColor,
      hover: {
        backgroundColor: editorBackgroundColor,
      },
      disabled: {
        textColor: mixWithBackground(0.5, textColor),
      },
      selected: {
        backgroundColor: mixWithBackground(0.75, palette.pink0),
      },
    },
    description: {
      tag: {
        backgroundColor: mixWithBackground(0.25, palette.blue0),
        textColor: palette.white0,
      },
      pagination: {
        current: palette.pink0,
      },
    },
    button: {
      install: {
        backgroundColor: buttonSecondaryBackgroundColor,
        borderColor: buttonSecondaryBackgroundColor,
        textColor: buttonSecondaryTextColor,
        fillBackgroundColor: buttonSecondaryBackgroundColor,
        fillTextColor: buttonSecondaryTextColor,
        focused: {
          backgroundColor: buttonSecondaryBackgroundColor,
        },
      },
      update: {
        backgroundColor: buttonSecondaryBackgroundColor,
        borderColor: buttonSecondaryBorderColor,
        textColor: buttonSecondaryTextColor,
      },
    },
    search: {
      backgroundColor,
    },
    sectionHeader: {
      backgroundColor: editorBackgroundColor,
      textColor,
    },
    tab: {
      hover: {
        backgroundColor: "#00ffff",
      },
      selected: {
        backgroundColor: "#ff00ff",
        textColor: "#ff0000",
      },
    },
  },
  popup: {
    backgroundColor: editorBackgroundColor,
    separatorColor: textColor,
    borderColor: guidelinesColor,
  },
  popupMenu: {
    backgroundColor: editorBackgroundColor,
    textColor: textColor,
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
    warningColor,
    warningEndColor: lighten(0.1, warningColor),
    passedColor: successColor,
    passedEndColor: lighten(0.1, successColor),
  },
  runWidget: {
    iconColor: textColor,
    textColor,
    runningIconColor: palette.white0,
    running: {
      backgroundColor: palette.green0,
    },
    stop: { backgroundColor: palette.red0 },
    hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
    pressed: { overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)) },
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.5, palette.pink0),
    thumbBorderColor: mixWithBackground(0.25, palette.pink0),
    hover: {
      thumbColor: mixWithBackground(0.25, palette.pink0),
      thumbBorderColor: palette.pink0,
    },
  },
  segmentedButton: {
    focused: {
      selected: {
        backgroundColor: buttonSecondaryBackgroundColor,
      },
    },
    selected: {
      backgroundColor: buttonSecondaryBackgroundColor,
      borderColor: {
        start: buttonSecondaryBorderColor,
        end: buttonSecondaryBorderColor,
      },
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
  textField: {
    backgroundColor: fieldBackgroundColor,
    textColor: fieldTextColor,
    caretColor,
    shadowColor: mixWithBackground(0.9, fieldTextColor),
    highlightColor: "#ff0000",
    inactive: {
      textColor: mixWithBackground(0.5, fieldTextColor),
    },
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
    iconColor: textColor,
    hover: {
      backgroundColor: mixWithBackground(0.9, palette.pink0),
      inactive: {
        backgroundColor: mixWithBackground(0.9, palette.pink0),
      },
    },
    error: { textColor: errorColor },
    modified: { textColor: palette.blue0 },
  },
  vcs: {
    log: {
      commit: {
        rowHeight: 28,
        currentBranch: {
          backgroundColor: mixWithBackground(0.9, palette.pink0),
        },
        hover: {
          backgroundColor: mixWithBackground(0.8, palette.pink0),
        },
        selected: {
          backgroundColor: mixWithBackground(0.5, palette.pink0),
          textColor: palette.white0,
          inactive: {
            backgroundColor: mixWithBackground(0.75, palette.pink0),
            textColor,
          },
        },
        unmatched: {
          textColor: mixWithBackground(0.5, textColor),
        },
        reference: {
          textColor,
        },
      },
      icon: {
        head: palette.pink0,
        localBranch: palette.blue0,
        remoteBranch: palette.green0,
        tag: palette.yellow0,
        other: palette.purple0,
      },
    },
    markerPopup: {
      borderColor: guidelinesColor,
      toolbar: {
        backgroundColor: editorBackgroundColor,
      },
    },
  },
};
