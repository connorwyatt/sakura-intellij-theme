import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";
import { rgbaToHex } from "../../utilities.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

const themeName = "Sakura Night";

const backgroundColor = palette.charcoalDarken075;
const overlayBackgroundColor = palette.charcoalDarken050;
const topBarBackgroundColor = palette.charcoalDarken100;
const editorBackgroundColor = palette.charcoalDarken100;

const mixWithBackground = (percentage: number, color: string): string =>
  mix(percentage, backgroundColor, color);

const mixWithTopBarBackground = (percentage: number, color: string): string =>
  mix(percentage, topBarBackgroundColor, color);

const mixWithEditorBackground = (percentage: number, color: string): string =>
  mix(percentage, editorBackgroundColor, color);

const textColor = lighten(0.6, backgroundColor);
const editorTextColor = desaturate(0.5, palette.white);

const fieldBackgroundColor = mixWithBackground(
  0.925,
  lighten(0.15, palette.pink),
);
const fieldBorderColor = palette.pinkSaturated250;
const fieldTextColor = textColor;

const disabledFieldBorderColor = mixWithBackground(0.5, fieldBorderColor);
const disabledFieldTextColor = mixWithBackground(0.5, fieldTextColor);

const buttonPrimaryBackgroundColor = palette.pinkSaturated250;
const buttonPrimaryBorderColor = buttonPrimaryBackgroundColor;
const buttonPrimaryTextColor = palette.white;

const buttonSecondaryBackgroundColor = fieldBackgroundColor;
const buttonSecondaryBorderColor = fieldBorderColor;
const buttonSecondaryTextColor = fieldTextColor;

const linkColor = palette.blue;

const fieldFocusColor = mix(
  0.5,
  backgroundColor,
  buttonPrimaryBackgroundColor,
);

const caretColor = palette.pink;

const errorColor = palette.red;
const infoColor = palette.blue;
const successColor = palette.green;
const warningColor = palette.yellow;

const guidelinesColor = mixWithBackground(0.95, palette.white);
const treeLinesColor = mixWithBackground(0.8, palette.white);
const editorGuidelinesColor = mixWithEditorBackground(0.9, palette.white);

const selectionColor = mixWithEditorBackground(0.75, palette.pinkSaturated250);

const badgeBackgroundColor = palette.pinkSaturated250;
const badgeTextColor = palette.white;

const commentColor = mixWithEditorBackground(0.25, palette.white);
const constantColor = palette.purple;
const enumCaseColor = palette.purple;
const functionColor = palette.blue;
const globalVariableColor = palette.yellow;
const keywordColor = palette.pink;
const localVariableColor = editorTextColor;
const metadataColor = palette.purple;
const numberColor = palette.blue;
const punctuationColor = mix(0.5, editorTextColor, palette.pink);
const stringColor = palette.green;
const stringEscapeColor = palette.orange;
const templateLanguageBackgroundColor = mixWithEditorBackground(
  0.75,
  palette.blue,
);
const todoColor = palette.orange;
const typeNameColor = palette.yellow;

const syntax = {
  attribute: metadataColor,
  badCharacter: {
    textColor: errorColor,
    effectColor: errorColor,
    errorStripeColor: errorColor,
  },
  braces: punctuationColor,
  brackets: punctuationColor,
  className: typeNameColor,
  classReference: typeNameColor,
  color: stringEscapeColor,
  comma: punctuationColor,
  comment: {
    textColor: commentColor,
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
        textColor: palette.pink,
        value: {
          textColor: palette.yellow,
        },
      },
    },
    markup: {
      textColor: palette.blue,
    },
  },
  dot: punctuationColor,
  entity: stringEscapeColor,
  enumCase: enumCaseColor,
  error: {
    textColor: errorColor,
    effectColor: errorColor,
    errorStripeColor: errorColor,
  },
  functionCall: functionColor,
  functionDeclaration: functionColor,
  globalVariable: globalVariableColor,
  highlightedReference: {
    textColor: stringColor,
    effectColor: stringColor,
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
  templateLanguage: {
    backgroundColor: templateLanguageBackgroundColor,
  },
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
    nsPrefix: { textColor: palette.yellow },
    attributeName: palette.yellow,
    attributeValue: palette.blue,
    tagName: palette.pink,
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
      backgroundColor: mixWithBackground(0.75, palette.pink),
      borderColor: mixWithBackground(0.5, palette.pink),
    },
    pressed: {
      backgroundColor: mixWithBackground(0.65, palette.pink),
      borderColor: mixWithBackground(0.4, palette.pink),
    },
    separatorColor: guidelinesColor,
  },
  actions: {
    blue: palette.blue,
    green: palette.green,
    grey: textColor,
    greyInline: "#ff00ff",
    greyInlineDark: textColor,
    red: palette.red,
    yellow: palette.yellow,
  },
  banner: {
    error: {
      backgroundColor: mixWithBackground(0.75, palette.red),
      borderColor: mixWithBackground(0.5, palette.red),
    },
    info: {
      backgroundColor: mixWithBackground(0.75, palette.blue),
      borderColor: mixWithBackground(0.5, palette.blue),
    },
    success: {
      backgroundColor: mixWithBackground(0.75, palette.green),
      borderColor: mixWithBackground(0.5, palette.green),
    },
    warning: {
      backgroundColor: mixWithBackground(0.75, palette.yellow),
      borderColor: mixWithBackground(0.5, palette.yellow),
    },
  },
  buttons: {
    primary: {
      backgroundColor: buttonPrimaryBackgroundColor,
      borderColor: buttonPrimaryBorderColor,
      textColor: buttonPrimaryTextColor,
      focusColor: fieldFocusColor,
      focused: {
        borderColor: fieldFocusColor,
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
      borderColor: fieldFocusColor,
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
      backgroundColor: fieldBorderColor,
      borderColor: fieldBorderColor,
      focusColor: fieldFocusColor,
      tickColor: palette.white,
    },
    unselected: {
      backgroundColor,
      borderColor: fieldBorderColor,
      focusColor: fieldFocusColor,
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
      textColor: mix(0.5, palette.pink, fieldTextColor),
    },
    selected: {
      backgroundColor: mixWithBackground(0.5, palette.pink),
      textColor,
    },
    nonEditable: {
      backgroundColor: fieldBackgroundColor,
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
      textColor: palette.pink,
    },
    textColor,
  },
  complexPopup: { header: { backgroundColor } },
  counter: {
    backgroundColor: badgeBackgroundColor,
    textColor: badgeTextColor,
  },
  dragAndDrop: {
    borderColor: "#ff0000",
    area: {
      backgroundColor: mixWithBackground(0.75, palette.pink),
      foregroundColor: mixWithBackground(0.75, palette.pink),
    },
    row: { backgroundColor: "#ff00ff" },
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: editorGuidelinesColor,
    textColor,
    shortcutForeground: palette.pinkSaturated250,
    searchField: {
      backgroundColor: editorBackgroundColor,
    },
    toolbar: {
      borderColor: guidelinesColor,
    },
    bookmark: {
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.pink),
      errorStripeColor: mixWithEditorBackground(0.75, palette.pink),
    },
    breadcrumbs: {
      current: {
        backgroundColor: mixWithEditorBackground(
          0.95,
          textColor,
        ),
        textColor,
      },
      default: {
        backgroundColor: editorBackgroundColor,
        textColor: mixWithEditorBackground(0.5, textColor),
      },
      hovered: (() => {
        const color = mixWithEditorBackground(
          0.9,
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
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.red),
      errorStripeColor: mixWithEditorBackground(0.75, palette.red),
    },
    caret: {
      color: caretColor,
      rowBackgroundColor: lighten(0.05, editorBackgroundColor),
    },
    codeLens: {
      borderColor: palette.pink,
    },
    console: {
      output: {
        black: {
          backgroundColor: textColor,
          textColor: editorBackgroundColor,
        },
        red: palette.red,
        green: palette.green,
        yellow: palette.yellow,
        blue: palette.blue,
        pink: palette.pink,
        cyan: palette.blue,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.red)),
        greenBright: lighten(0.05, saturate(0.2, palette.green)),
        yellowBright: lighten(0.05, saturate(0.2, palette.yellow)),
        blueBright: lighten(0.05, saturate(0.2, palette.blue)),
        pinkBright: lighten(0.05, saturate(0.2, palette.pink)),
        cyanBright: lighten(0.05, saturate(0.2, palette.blue)),
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
      textColor: linkColor,
      effectColor: linkColor,
    },
    diff: {
      conflict: {
        importantColor: mixWithEditorBackground(0.75, palette.yellow),
        ignoredColor: mixWithEditorBackground(0.9, palette.yellow),
        errorStripeColor: mixWithEditorBackground(0.5, palette.yellow),
      },
      deleted: {
        importantColor: mixWithEditorBackground(0.75, palette.red),
        ignoredColor: mixWithEditorBackground(0.9, palette.red),
        errorStripeColor: mixWithEditorBackground(0.5, palette.red),
      },
      inserted: {
        importantColor: mixWithEditorBackground(0.75, palette.green),
        ignoredColor: mixWithEditorBackground(0.9, palette.green),
        errorStripeColor: mixWithEditorBackground(0.5, palette.green),
      },
      modified: {
        importantColor: mixWithEditorBackground(0.5, palette.blue),
        ignoredColor: mixWithEditorBackground(0.8, palette.blue),
        errorStripeColor: mixWithEditorBackground(0.5, palette.blue),
      },
      separatorWave: mixWithEditorBackground(0.25, palette.pink),
    },
    fileStatus: {
      added: palette.green,
      copied: palette.green,
      deleted: palette.red,
      modified: palette.blue,
    },
    foldedText: {
      textColor: mixWithEditorBackground(0.5, textColor),
      backgroundColor: mixWithEditorBackground(0.9, textColor),
    },
    gutter: {
      backgroundColor: mixWithEditorBackground(0.75, backgroundColor),
    },
    hint: {
      borderColor: editorGuidelinesColor,
      error: mixWithBackground(0.5, palette.red),
      info: backgroundColor,
      question: mixWithBackground(0.5, palette.purple),
      warning: mixWithBackground(0.5, palette.yellow),
    },
    identifierUnderCaret: {
      standard: {
        backgroundColor: mixWithEditorBackground(0.75, palette.pink),
        effectColor: mixWithEditorBackground(0.5, palette.pink),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
      },
      write: {
        backgroundColor: mixWithEditorBackground(0.75, palette.pink),
        effectColor: mixWithEditorBackground(0.5, palette.pink),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
      },
    },
    info: {
      effectColor: infoColor,
      errorStripeColor: infoColor,
    },
    indentGuide: {
      normal: { color: editorGuidelinesColor },
      selected: { color: mixWithEditorBackground(0.5, palette.pink) },
    },
    inlay: {
      default: {
        backgroundColor: palette.pink,
        textColor: palette.white,
      },
      noBackground: {
        textColor,
      },
    },
    inlineHint: {
      current: {
        backgroundColor: badgeBackgroundColor,
        textColor: badgeTextColor,
      },
      default: {
        backgroundColor: badgeBackgroundColor,
        textColor: badgeTextColor,
      },
      highlighted: {
        backgroundColor: badgeBackgroundColor,
        textColor: badgeTextColor,
      },
    },
    label: {
      textColor,
    },
    lineNumbers: {
      normal: { textColor },
      caretRow: { textColor: palette.pink },
    },
    matchingElement: {
      effectColor: palette.pink,
    },
    methodSeparators: editorGuidelinesColor,
    notification: {
      backgroundColor: mixWithEditorBackground(0.5, palette.pink),
    },
    readonly: {
      background: mixWithEditorBackground(0.95, palette.pink),
      fragmentBackground: mixWithEditorBackground(0.95, palette.pink),
    },
    rightMarginColor: editorGuidelinesColor,
    search: {
      searchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue),
        effectColor: mixWithEditorBackground(0.25, palette.blue),
      },
      textSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue),
        effectColor: mixWithEditorBackground(0.25, palette.blue),
      },
      writeSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue),
        effectColor: mixWithEditorBackground(0.25, palette.blue),
      },
    },
    selection: {
      backgroundColor: selectionColor,
      textColor: null,
    },
    softWrapSign: guidelinesColor,
    syntax,
    tabs: {
      tab: {
        inactive: { backgroundColor: editorBackgroundColor },
        active: {
          backgroundColor: null,
        },
        modifiedIconColor: palette.pink,
      },
    },
    vcs: {
      annotation: {
        textColor,
        lastCommit: {
          textColor,
        },
        color1: mixWithEditorBackground(0.3, palette.pink),
        color2: mixWithEditorBackground(0.45, palette.pink),
        color3: mixWithEditorBackground(0.6, palette.pink),
        color4: mixWithEditorBackground(0.75, palette.pink),
        color5: mixWithEditorBackground(0.9, palette.pink),
      },
      changedLinesPopup: {
        backgroundColor,
      },
      gutter: {
        addedLines: palette.green,
        modifiedLines: palette.blue,
        removedLines: palette.red,
      },
    },
    visualIndentGuideColor: "#ffff00",
  },
  field: {
    disabled: {
      borderColor: fieldBorderColor,
    },
    focused: {
      borderColor: fieldFocusColor,
    },
    iconColor: textColor,
    focusColor: fieldFocusColor,
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
    blue: mixWithBackground(0.75, desaturate(0.1, palette.blue)),
    gray: mixWithBackground(0.75, desaturate(0.1, textColor)),
    green: mixWithBackground(0.75, desaturate(0.1, palette.green)),
    orange: mixWithBackground(0.75, desaturate(0.1, palette.orange)),
    rose: mixWithBackground(0.75, desaturate(0.1, palette.red)),
    violet: mixWithBackground(0.75, desaturate(0.1, palette.purple)),
    yellow: mixWithBackground(0.75, desaturate(0.1, palette.yellow)),
  },
  group: {
    separatorColor: guidelinesColor,
    disabled: { separatorColor: mixWithBackground(0.5, guidelinesColor) },
  },
  label: {
    backgroundColor,
    textColor,
    disabled: {
      textColor: mixWithBackground(0.5, textColor),
    },
    error: {
      textColor: errorColor,
    },
    info: {
      textColor: mixWithBackground(0.25, textColor),
    },
    success: {
      textColor: successColor,
    },
  },
  link: {
    active: { textColor: linkColor },
    hover: { textColor: linkColor },
    visited: { textColor: linkColor },
    pressed: { textColor: linkColor },
    secondary: { textColor: linkColor },
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
    tab: {
      inactive: {
        backgroundColor: topBarBackgroundColor,
        textColor: mixWithTopBarBackground(0.5, textColor),
      },
      selected: {
        backgroundColor,
      },
      hover: {
        backgroundColor: mixWithTopBarBackground(0.5, backgroundColor),
        textColor: mixWithTopBarBackground(0.25, textColor),
      },
      separatorColor: guidelinesColor,
    },
  },
  menu: {
    backgroundColor: overlayBackgroundColor,
    textColor,
  },
  menuItem: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    accelerator: { textColor: mixWithBackground(0.25, textColor) },
    disabled: {
      backgroundColor,
      textColor: mixWithBackground(0.5, textColor),
    },
  },
  notification: {
    backgroundColor: overlayBackgroundColor,
    borderColor: guidelinesColor,
    textColor,
    hover: {
      backgroundColor: lighten(0.02, overlayBackgroundColor),
    },
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
    blue: palette.blue,
    blackText: palette.white,
    green: palette.green,
    grey: mixWithBackground(0.5, textColor),
    pink: palette.pink,
    purple: palette.purple,
    red: palette.red,
    redStatus: palette.red,
    yellow: palette.yellow,
    yellowDark: darken(0.2, palette.yellow),
  },
  panel: {
    backgroundColor,
    textColor,
  },
  plugins: {
    list: {
      backgroundColor,
      hover: {
        backgroundColor: lighten(0.05, backgroundColor),
      },
      disabled: {
        textColor: mixWithBackground(0.5, textColor),
      },
      selected: {
        backgroundColor: mixWithBackground(0.75, palette.pink),
      },
    },
    description: {
      tag: {
        backgroundColor: mixWithBackground(0.25, palette.blue),
        textColor: palette.white,
      },
      pagination: {
        current: palette.pink,
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
          backgroundColor: fieldFocusColor,
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
      backgroundColor: overlayBackgroundColor,
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
    backgroundColor: overlayBackgroundColor,
    separatorColor: textColor,
    borderColor: guidelinesColor,
    advertiser: {
      backgroundColor: overlayBackgroundColor,
      borderColor: guidelinesColor,
      textColor,
    },
    header: {
      inactive: {
        backgroundColor: overlayBackgroundColor,
        textColor,
      },
      active: {
        backgroundColor: overlayBackgroundColor,
        textColor,
      },
    },
  },
  popupMenu: {
    backgroundColor: overlayBackgroundColor,
    textColor,
  },
  progressBar: {
    backgroundColor: overlayBackgroundColor,
    foregroundColor: mixWithEditorBackground(0.5, lighten(0.15, palette.pink)),
    progressColor: mixWithEditorBackground(0.5, lighten(0.15, palette.pink)),
    indeterminate: {
      startColor: palette.pink,
      endColor: lighten(0.15, palette.pink),
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
    runningIconColor: palette.white,
    running: {
      backgroundColor: desaturate(0.3, darken(0.2, palette.green)),
    },
    stop: { backgroundColor: desaturate(0.3, darken(0.2, palette.red)) },
    hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
    pressed: { overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)) },
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.5, palette.pink),
    thumbBorderColor: mixWithBackground(0.25, palette.pink),
    hover: {
      thumbColor: mixWithBackground(0.25, palette.pink),
      thumbBorderColor: palette.pink,
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
      backgroundColor: mixWithBackground(0.5, palette.pink),
    },
    inactive: {
      backgroundColor: mixWithBackground(0.75, palette.pink),
    },
    textColor: lighten(0.15, palette.pink),
  },
  tab: {
    active: {
      backgroundColor: null,
      textColor: palette.pink,
      focused: {
        underlineColor: palette.pink,
      },
      unfocused: {
        underlineColor: palette.pink,
      },
    },
    hover: {
      backgroundColor: rgbaToHex(transparentize(0.9, palette.pink)),
    },
    inactive: {
      backgroundColor: backgroundColor,
    },
  },
  tabbedPane: {
    underlineColor: palette.pink,
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
        backgroundColor: mixWithBackground(0.5, palette.pink),
        iconColor: textColor,
      },
      hover: { backgroundColor: mixWithBackground(0.5, palette.pink) },
    },
    header: {
      backgroundColor,
      borderColor: guidelinesColor,
      inactive: { backgroundColor },
    },
  },
  tree: {
    rowHeight: 28,
    hash: treeLinesColor,
    iconColor: textColor,
    hover: {
      backgroundColor: mixWithBackground(0.9, palette.pink),
      inactive: {
        backgroundColor: mixWithBackground(0.9, palette.pink),
      },
    },
    error: { textColor: errorColor },
    modified: { textColor: palette.blue },
  },
  vcs: {
    log: {
      commit: {
        rowHeight: 28,
        currentBranch: {
          backgroundColor: mixWithBackground(0.9, palette.pink),
        },
        hover: {
          backgroundColor: mixWithBackground(0.8, palette.pink),
        },
        selected: {
          backgroundColor: mixWithBackground(0.5, palette.pink),
          textColor: palette.white,
          inactive: {
            backgroundColor: mixWithBackground(0.75, palette.pink),
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
        head: palette.pink,
        localBranch: palette.blue,
        remoteBranch: palette.green,
        tag: palette.yellow,
        other: palette.purple,
      },
    },
    markerPopup: {
      borderColor: guidelinesColor,
      toolbar: {
        backgroundColor: overlayBackgroundColor,
      },
    },
  },
  welcomeScreen: {
    backgroundColor,
    borderColor: guidelinesColor,
    caption: {
      backgroundColor: "#ff0000",
      textColor: "#00ffff",
    },
    details: {
      backgroundColor: editorBackgroundColor,
    },
    footer: {
      backgroundColor: "#0000ff",
      textColor: "#ffff00",
    },
    groupIcon: {
      borderColor: guidelinesColor,
    },
    header: {
      backgroundColor: "#ff00ff",
      textColor: "#80ff80",
    },
    learnTab: { courseCard: { hoverColor: "#8080ff" } },
    projects: {
      backgroundColor: "#ff8080",
      actions: {
        backgroundColor: "#ffaaff",
        selection: {
          backgroundColor: "#338080",
          borderColor: "#803333",
        },
      },
      selection: {
        inactive: {
          backgroundColor: "#aaaa00",
        },
        active: {
          backgroundColor: "#ff8000",
        },
      },
    },
    separatorColor: guidelinesColor,
  },
};
