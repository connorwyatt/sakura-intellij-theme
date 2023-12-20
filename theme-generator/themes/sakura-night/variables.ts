import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";
import { rgbaToHex } from "../../utilities.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

const themeName = "Sakura Night";

const backgroundColor = palette.blackLighten1;
const overlayBackgroundColor = palette.blackLighten2;
const topBarBackgroundColor = palette.black;
const editorBackgroundColor = palette.black;

const mixWithBackground = (percentage: number, color: string): string =>
  mix(percentage, backgroundColor, color);

const mixWithTopBarBackground = (percentage: number, color: string): string =>
  mix(percentage, topBarBackgroundColor, color);

const mixWithEditorBackground = (percentage: number, color: string): string =>
  mix(percentage, editorBackgroundColor, color);

const textColor = palette.whiteDarken4;

const fieldBackgroundColor = mixWithBackground(
  0.925,
  lighten(0.15, palette.pinkDarken1),
);
const fieldBorderColor = mixWithBackground(0.5, palette.pinkDarken1);
const fieldTextColor = textColor;

const disabledFieldBorderColor = mixWithBackground(0.5, fieldBorderColor);
const disabledFieldTextColor = mixWithBackground(0.5, fieldTextColor);

const checkboxBackgroundColor = palette.pinkDarken1;
const checkboxTickColor = palette.white;

const buttonPrimaryBackgroundColor = palette.pinkDarken1;
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

const guidelinesColor = mixWithBackground(0.95, palette.whiteDarken4);
const treeLinesColor = mixWithBackground(0.8, palette.whiteDarken4);
const editorGuidelinesColor = mixWithEditorBackground(
  0.9,
  palette.whiteDarken4,
);

const listItem = (() => {
  const hoverColor = mixWithBackground(0.9, palette.pink);
  const inactiveSelectionColor = mixWithBackground(0.9, palette.white);
  const selectionColor = mixWithBackground(0.8, palette.pink);

  return {
    hover: {
      active: {
        backgroundColor: hoverColor,
      },
      inactive: {
        backgroundColor: hoverColor,
      },
    },
    selection: {
      inactive: {
        backgroundColor: inactiveSelectionColor,
        textColor,
      },
      active: {
        backgroundColor: selectionColor,
        textColor,
      },
    },
  };
})();

const editorSelectionColor = mixWithEditorBackground(
  0.75,
  palette.pinkDarken1,
);

const badgeBackgroundColor = palette.pinkDarken1;
const badgeTextColor = palette.white;

const tabs = {
  hoverColor: rgbaToHex(transparentize(0.9, palette.pink)),
  underlineColor: palette.pink,
};

const editorTextColor = palette.whiteDarken4;

const commentColor = mixWithEditorBackground(0.25, editorTextColor);
const constantColor = palette.turquoise;
const enumCaseColor = palette.green;
const globalVariableColor = palette.blue;
const identifierColor = editorTextColor;
const instanceMethodColor = palette.blue;
const instanceFieldColor = palette.purple;
const keywordColor = palette.pink;
const localVariableColor = editorTextColor;
const metadataColor = palette.purple;
const numberColor = palette.purple;
const parameterColor = editorTextColor;
const punctuationColor = mixWithEditorBackground(0.25, editorTextColor);
const staticFieldColor = instanceFieldColor;
const staticMethodColor = instanceMethodColor;
const stringColor = palette.green;
const stringEscapeColor = palette.orange;
const tagAttributeNameColor = palette.yellow;
const tagAttributeValueColor = palette.blue;
const tagName = palette.pink;
const templateLanguageBackgroundColor = mixWithEditorBackground(
  0.75,
  palette.orange,
);
const todoColor = palette.orange;
const typeNameColor = palette.yellow;
const whitespaceColor = mix(0.5, editorGuidelinesColor, punctuationColor);

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
  css: {
    unit: punctuationColor,
  },
  custom: {
    keyword1: keywordColor,
    keyword2: keywordColor,
    keyword3: keywordColor,
    keyword4: keywordColor,
  },
  deprecation: {
    effectColor: commentColor,
    textColor: commentColor,
  },
  docs: {
    comment: {
      textColor: mixWithEditorBackground(0.25, stringColor),
      tag: {
        textColor: mixWithEditorBackground(0.25, tagAttributeNameColor),
        value: {
          textColor: mixWithEditorBackground(0.25, tagAttributeValueColor),
        },
      },
    },
    markup: {
      textColor: mixWithEditorBackground(0.25, tagName),
    },
  },
  dot: punctuationColor,
  duplicateFromServer: {
    backgroundColor: mixWithEditorBackground(0.75, warningColor),
    errorStripeColor: warningColor,
  },
  entity: stringEscapeColor,
  enumCase: enumCaseColor,
  error: {
    textColor: errorColor,
    effectColor: errorColor,
    errorStripeColor: errorColor,
  },
  functionCall: instanceMethodColor,
  functionDeclaration: instanceMethodColor,
  globalVariable: globalVariableColor,
  grammarError: {
    effectColor: warningColor,
    errorStripeColor: warningColor,
  },
  genericServerError: {
    effectColor: warningColor,
    errorStripeColor: warningColor,
  },
  highlightedReference: {
    textColor: stringColor,
    effectColor: stringColor,
  },
  hyperlinks: {
    textColor: linkColor,
    effectColor: linkColor,
  },
  identifier: identifierColor,
  instanceField: instanceFieldColor,
  instanceMethod: instanceMethodColor,
  interfaceName: typeNameColor,
  json: {
    propertyKey: keywordColor,
  },
  label: metadataColor,
  localVariable: localVariableColor,
  keyword: keywordColor,
  kotlin: {
    colon: punctuationColor,
    doubleColon: punctuationColor,
    questionMark: punctuationColor,
  },
  markedForRemoval: {
    effectColor: errorColor,
    textColor: commentColor,
  },
  metadata: metadataColor,
  modifiers: mixWithEditorBackground(0.25, keywordColor),
  namedArgument: metadataColor,
  number: numberColor,
  operator: punctuationColor,
  parameter: parameterColor,
  primitiveTypes: typeNameColor,
  runtimeError: {
    effectColor: errorColor,
    errorStripeColor: errorColor,
  },
  semicolon: punctuationColor,
  staticField: staticFieldColor,
  staticMethod: staticMethodColor,
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
  textStyleError: {
    effectColor: errorColor,
  },
  textStyleSuggestion: {
    effectColor: infoColor,
  },
  textStyleWarning: {
    effectColor: warningColor,
  },
  todo: {
    textColor: todoColor,
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
  whitespace: whitespaceColor,
  xml: {
    nsPrefix: { textColor: tagAttributeNameColor },
    attributeName: tagAttributeNameColor,
    attributeValue: tagAttributeValueColor,
    tagName: tagName,
  },
};

export default {
  name: themeName,
  isDark: true,
  editorScheme: "/themes/sakura-night.xml",
  backgroundColor,
  bordersColor: guidelinesColor,
  textColor,
  actionButtons: {
    hover: {
      backgroundColor: mixWithBackground(0.5, palette.pinkDarken1),
      borderColor: mixWithBackground(0.25, palette.pinkDarken1),
    },
    pressed: {
      backgroundColor: mixWithBackground(0.4, palette.pinkDarken1),
      borderColor: mixWithBackground(0.25, palette.pinkDarken1),
    },
    separatorColor: guidelinesColor,
  },
  actions: {
    blue: palette.blue,
    green: palette.green,
    grey: textColor,
    greyInline: textColor,
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
  bigSpinner: {
    backgroundColor,
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
      backgroundColor: checkboxBackgroundColor,
      borderColor: checkboxBackgroundColor,
      focusColor: fieldFocusColor,
      tickColor: checkboxTickColor,
    },
    unselected: {
      backgroundColor,
      borderColor: checkboxBackgroundColor,
      focusColor: fieldFocusColor,
    },
    disabled: {
      backgroundColor,
      borderColor: mixWithBackground(0.5, checkboxBackgroundColor),
      tickColor: mixWithBackground(0.5, checkboxTickColor),
    },
  },
  checkboxMenuItem: {
    selection: {
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
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
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
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
    selection: {
      active: { backgroundColor: listItem.selection.active.backgroundColor },
      inactive: {
        backgroundColor: listItem.selection.inactive.backgroundColor,
      },
    },
  },
  complexPopup: { header: { backgroundColor } },
  counter: {
    backgroundColor: badgeBackgroundColor,
    textColor: badgeTextColor,
  },
  debugger: {
    evaluateExpression: {
      backgroundColor: fieldBackgroundColor,
    },
    variables: {
      changedValue: { textColor: "#ffff00" },
      collectingData: { textColor: "#ff0000" },
      errorMessage: { textColor: "#ff00ff" },
      evaluatingExpression: { textColor: "#00ffff" },
      exception: { textColor: "#00ff00" },
      modifyingValue: { textColor: "#ffff00" },
      type: { textColor: typeNameColor },
      value: { textColor },
    },
  },
  dragAndDrop: {
    borderColor: mixWithBackground(0.5, palette.pink),
    area: {
      backgroundColor,
      foregroundColor: textColor,
    },
    row: {
      backgroundColor: rgbaToHex(transparentize(0.9, palette.pink)),
    },
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: editorGuidelinesColor,
    textColor: editorTextColor,
    shortcutForeground: palette.pink,
    searchField: {
      backgroundColor: editorBackgroundColor,
    },
    toolbar: {
      borderColor: guidelinesColor,
    },
    bookmark: {
      lineBackgroundColor: mixWithEditorBackground(
        0.75,
        palette.pink,
      ),
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
          0.95,
          textColor,
        );
        return ({
          backgroundColor: color,
          textColor,
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
        cyan: palette.turquoise,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.red)),
        greenBright: lighten(0.05, saturate(0.2, palette.green)),
        yellowBright: lighten(0.05, saturate(0.2, palette.yellow)),
        blueBright: lighten(0.05, saturate(0.2, palette.blue)),
        pinkBright: lighten(0.05, saturate(0.2, palette.pink)),
        cyanBright: lighten(0.05, saturate(0.2, palette.turquoise)),
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
      rangeToExecute: {
        effectColor: palette.pink,
      },
    },
    ctrlClickable: {
      textColor: linkColor,
      effectColor: linkColor,
    },
    debugger: {
      inlineValue: {
        executionLine: {
          textColor: mix(0.5, palette.blue, commentColor),
        },
        modified: {
          textColor: mix(0.5, palette.yellow, commentColor),
        },
        other: {
          textColor: commentColor,
        },
      },
    },
    diff: {
      conflict: {
        importantColor: mixWithEditorBackground(0.75, palette.yellow),
        ignoredColor: mixWithEditorBackground(0.875, palette.yellow),
        errorStripeColor: mixWithEditorBackground(0.5, palette.yellow),
      },
      deleted: {
        importantColor: mixWithEditorBackground(0.75, palette.red),
        ignoredColor: mixWithEditorBackground(0.875, palette.red),
        errorStripeColor: mixWithEditorBackground(0.5, palette.red),
      },
      inserted: {
        importantColor: mixWithEditorBackground(0.75, palette.green),
        ignoredColor: mixWithEditorBackground(0.875, palette.green),
        errorStripeColor: mixWithEditorBackground(0.5, palette.green),
      },
      modified: {
        importantColor: mixWithEditorBackground(0.75, palette.blue),
        ignoredColor: mixWithEditorBackground(0.875, palette.blue),
        errorStripeColor: mixWithEditorBackground(0.5, palette.blue),
      },
      separatorWave: mixWithEditorBackground(0.5, palette.pink),
    },
    fileStatus: {
      added: palette.green,
      conflicts: palette.orange,
      copied: palette.green,
      deleted: palette.red,
      merged: palette.purple,
      modified: palette.blue,
      switched: palette.purple,
      unknown: palette.orange,
      warning: palette.yellow,
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
    htmlTagTreeLevels: {
      level0: palette.pink,
      level1: palette.purple,
      level2: palette.blue,
      level3: palette.green,
      level4: palette.yellow,
      level5: palette.orange,
    },
    identifierUnderCaret: {
      standard: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.pink,
        ),
        effectColor: mixWithEditorBackground(0.5, palette.pink),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
      },
      write: {
        backgroundColor: mixWithEditorBackground(
          0.75,
          palette.pink,
        ),
        effectColor: mixWithEditorBackground(0.25, palette.pink),
        errorStripeColor: mixWithEditorBackground(
          0.25,
          palette.pink,
        ),
      },
    },
    images: {
      backgroundColor: editorBackgroundColor,
      alternateBackgroundColor: backgroundColor,
      gridLineColor: editorGuidelinesColor,
    },
    info: {
      effectColor: infoColor,
      errorStripeColor: infoColor,
    },
    indentGuide: {
      normal: { color: editorGuidelinesColor },
      selected: { color: editorSelectionColor },
    },
    injectedLanguageFragment: {
      backgroundColor: mixWithEditorBackground(0.8, palette.orange),
    },
    inlay: {
      default: {
        backgroundColor: badgeBackgroundColor,
        textColor: badgeTextColor,
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
    matchedBracesIndentGuideColor: editorSelectionColor,
    matchingElement: {
      effectColor: palette.pink,
    },
    methodSeparators: editorGuidelinesColor,
    notification: {
      backgroundColor: mixWithEditorBackground(0.5, palette.pink),
    },
    pane: {
      backgroundColor: overlayBackgroundColor,
      textColor,
      selection: {
        backgroundColor: listItem.selection.active.backgroundColor,
        textColor: listItem.selection.active.textColor,
      },
    },
    preview: {
      backgroundColor: editorBackgroundColor,
      borderColor: editorGuidelinesColor,
    },
    readonly: {
      background: mixWithEditorBackground(0.95, palette.pink),
      fragmentBackground: mixWithEditorBackground(
        0.95,
        palette.pink,
      ),
    },
    recentLocations: {
      selection: {
        backgroundColor: editorSelectionColor,
      },
    },
    rightMarginColor: editorGuidelinesColor,
    search: {
      searchResult: {
        backgroundColor: mixWithEditorBackground(0.75, palette.blue),
        effectColor: mixWithEditorBackground(0.5, palette.blue),
      },
      textSearchResult: {
        backgroundColor: mixWithEditorBackground(0.75, palette.blue),
        effectColor: mixWithEditorBackground(0.5, palette.blue),
      },
      writeSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blue),
        effectColor: mixWithEditorBackground(0.25, palette.blue),
      },
    },
    selection: {
      backgroundColor: editorSelectionColor,
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
        deletedLines: palette.red,
        modifiedLines: palette.blue,
        removedLines: palette.red,
      },
    },
    visualIndentGuideColor: editorGuidelinesColor,
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
    infoTextColor: mixWithBackground(0.5, textColor),
  },
  fileColors: {
    blue: mixWithBackground(0.9, saturate(0.5, palette.blue)),
    gray: mixWithBackground(0.9, saturate(0.5, textColor)),
    green: mixWithBackground(0.9, saturate(0.5, palette.green)),
    orange: mixWithBackground(0.9, saturate(0.5, palette.orange)),
    rose: mixWithBackground(0.9, saturate(0.5, palette.red)),
    violet: mixWithBackground(0.9, saturate(0.5, palette.purple)),
    yellow: mixWithBackground(0.9, saturate(0.5, palette.yellow)),
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
    selected: {
      textColor,
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
    backgroundColor,
    textColor,
    hover: {
      active: {
        backgroundColor: listItem.hover.active.backgroundColor,
      },
      inactive: {
        backgroundColor: listItem.hover.inactive.backgroundColor,
      },
    },
    selection: {
      inactive: {
        backgroundColor: listItem.selection.inactive.backgroundColor,
        textColor: listItem.selection.inactive.textColor,
      },
      active: {
        backgroundColor: listItem.selection.active.backgroundColor,
        textColor: listItem.selection.active.textColor,
      },
    },
  },
  mainToolbar: {
    backgroundColor: topBarBackgroundColor,
    separatorColor: guidelinesColor,
    tab: {
      inactive: {
        backgroundColor: topBarBackgroundColor,
        textColor: mixWithTopBarBackground(0.75, textColor),
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
    separatorColor: guidelinesColor,
    borderColor: guidelinesColor,
    selection: {
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
    },
  },
  menuItem: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    accelerator: { textColor: mixWithBackground(0.25, textColor) },
    disabled: {
      backgroundColor,
      textColor: mixWithBackground(0.5, textColor),
    },
    selection: {
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
    },
  },
  newUIOnboardingDialog: { backgroundColor },
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
    blackText: palette.whiteDarken2,
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
    borderColor: guidelinesColor,
    list: {
      backgroundColor,
      hover: {
        backgroundColor: listItem.hover.active.backgroundColor,
      },
      disabled: {
        textColor: mixWithBackground(0.5, textColor),
      },
      selected: {
        backgroundColor: listItem.selection.active.backgroundColor,
      },
    },
    description: {
      tag: {
        backgroundColor: mixWithBackground(0.25, palette.blue),
        textColor: palette.whiteDarken2,
      },
      pagination: {
        current: palette.pink,
      },
      suggestedLabel: {
        backgroundColor: overlayBackgroundColor,
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
    selection: {
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
    },
  },
  problemsView: {
    projectAnalysisButton: {
      backgroundColor: mixWithBackground(0.5, palette.whiteDarken2),
    },
  },
  progressBar: {
    backgroundColor: overlayBackgroundColor,
    foregroundColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.pink),
    ),
    progressColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.pink),
    ),
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
    backgroundColor: mixWithBackground(0.5, palette.pinkDarken1),
    iconColor: textColor,
    textColor,
    runningIconColor: palette.whiteDarken2,
    running: {
      backgroundColor: desaturate(0.3, darken(0.2, palette.green)),
    },
    stop: {
      backgroundColor: desaturate(0.3, darken(0.2, palette.red)),
    },
    hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
    pressed: { overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)) },
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.75, palette.pink),
    thumbBorderColor: mixWithBackground(0.5, palette.pink),
    hover: {
      thumbColor: mixWithBackground(0.5, palette.pink),
      thumbBorderColor: mixWithBackground(0.25, palette.pink),
    },
  },
  searchEverywhere: {
    advertiser: {
      backgroundColor: overlayBackgroundColor,
      textColor,
    },
  },
  searchField: {
    errorBackgroundColor: mix(0.5, fieldBackgroundColor, palette.red),
    errorTextColor: palette.red,
  },
  searchMatch: {
    backgroundColor: palette.blue,
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
  separatorColor: guidelinesColor,
  settings: {
    spotlight: {
      borderColor: palette.pink,
    },
  },
  speedSearch: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    errorTextColor: palette.red,
  },
  spinner: {
    backgroundColor,
  },
  tab: {
    active: {
      backgroundColor: null,
      textColor,
      focused: {
        underlineColor: tabs.underlineColor,
      },
      unfocused: {
        underlineColor: tabs.underlineColor,
      },
    },
    hover: {
      backgroundColor: tabs.hoverColor,
    },
    inactive: {
      backgroundColor,
    },
  },
  tabbedPane: {
    backgroundColor,
    textColor,
    contentAreaColor: guidelinesColor,
    hoverColor: tabs.hoverColor,
    underlineColor: tabs.underlineColor,
  },
  table: {
    backgroundColor: editorBackgroundColor,
    alternateRowBackgroundColor: backgroundColor,
    textColor,
    gridColor: editorGuidelinesColor,
    sortIconColor: textColor,
    stripeColor: backgroundColor,
    dropLine: {
      normal: {
        color: "#ff0000",
      },
      short: {
        color: "#ffff00",
      },
    },
    cell: {
      focus: {
        backgroundColor: "#00ffff",
        textColor: "#00ff00",
      },
    },
    hover: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.pink,
        ),
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.pink,
        ),
      },
    },
    selection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
        textColor,
      },
    },
    lightSelection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pink,
        ),
        textColor,
      },
    },
    header: {
      backgroundColor: editorBackgroundColor,
      textColor,
      separatorColor: editorBackgroundColor,
      bottomSeparatorColor: editorGuidelinesColor,
      cell: {
        borderColor: editorBackgroundColor,
        focus: {
          backgroundColor,
        },
      },
    },
  },
  textArea: {
    backgroundColor: editorBackgroundColor,
    textColor,
    caretColor,
    selection: {
      backgroundColor: editorSelectionColor,
      textColor,
    },
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
    selection: {
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
    },
  },
  tipOfTheDay: {
    image: {
      borderColor: guidelinesColor,
    },
  },
  toggleButton: {
    backgroundColor,
    textColor: "#00ffff",
    borderColor: mix(0.25, palette.whiteDarken2, guidelinesColor),
    buttonColor: palette.green,
    disabledTextColor: "#0000ff",
    off: {
      backgroundColor,
      textColor,
    },
    on: {
      backgroundColor: mixWithBackground(0.5, palette.green),
      textColor,
    },
  },
  tooltip: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    info: { textColor: mix(0.5, overlayBackgroundColor, textColor) },
    shortcut: { textColor: palette.pink },
    link: { textColor: linkColor },
    actions: {
      info: {
        textColor: palette.pink,
      },
      backgroundColor: overlayBackgroundColor,
    },
  },
  toolWindow: {
    backgroundColor,
    button: {
      selected: {
        backgroundColor: mixWithBackground(0.25, palette.pink),
        iconColor: textColor,
      },
      hover: {
        backgroundColor: mixWithBackground(0.5, palette.pink),
      },
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
      active: {
        backgroundColor: listItem.hover.active.backgroundColor,
      },
      inactive: {
        backgroundColor: listItem.hover.inactive.backgroundColor,
      },
    },
    error: { textColor: errorColor },
    modified: { textColor: palette.blue },
    selection: {
      textColor: listItem.selection.active.textColor,
      active: {
        backgroundColor: listItem.selection.active.backgroundColor,
      },
      inactive: {
        backgroundColor: listItem.selection.inactive.backgroundColor,
      },
    },
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
          textColor: palette.whiteDarken2,
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
    refLabel: {
      backgroundColor: null,
      textColor,
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
