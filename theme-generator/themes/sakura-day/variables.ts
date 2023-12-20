import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";
import { rgbaToHex } from "../../utilities.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

const themeName = "Sakura Day";

const backgroundColor = palette.whiteDarken1;
const overlayBackgroundColor = palette.whiteDarken2;
const topBarBackgroundColor = palette.whiteDarken2;
const editorBackgroundColor = palette.white;

const mixWithBackground = (percentage: number, color: string): string =>
  mix(percentage, backgroundColor, color);

const mixWithTopBarBackground = (percentage: number, color: string): string =>
  mix(percentage, topBarBackgroundColor, color);

const mixWithEditorBackground = (percentage: number, color: string): string =>
  mix(percentage, editorBackgroundColor, color);

const textColor = palette.blackLighten3;
const invertedTextColor = palette.whiteDarken1;

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

const linkColor = palette.blueDarken1;

const fieldFocusColor = mix(
  0.5,
  backgroundColor,
  buttonPrimaryBackgroundColor,
);

const caretColor = palette.pinkDarken1;

const errorColor = palette.redDarken1;
const infoColor = palette.blueDarken1;
const successColor = palette.greenDarken1;
const warningColor = palette.yellowDarken1;

const guidelinesColor = mixWithBackground(0.9, palette.blackLighten3);
const treeLinesColor = mixWithBackground(0.8, palette.blackLighten3);
const editorGuidelinesColor = mixWithEditorBackground(
  0.8,
  palette.blackLighten3,
);

const listItem = (() => {
  const hoverColor = mixWithBackground(0.9, palette.pinkDarken1);
  const inactiveSelectionColor = mixWithBackground(0.9, palette.blackLighten3);
  const selectionColor = mixWithBackground(0.8, palette.pinkDarken1);

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
  hoverColor: rgbaToHex(transparentize(0.9, palette.pinkDarken1)),
  underlineColor: palette.pinkDarken1,
};

const editorTextColor = mixWithEditorBackground(0.25, palette.blackLighten3);

const commentColor = mixWithEditorBackground(0.5, editorTextColor);
const constantColor = palette.turquoiseDarken1;
const enumCaseColor = palette.greenDarken1;
const globalVariableColor = palette.blueDarken1;
const identifierColor = editorTextColor;
const instanceMethodColor = palette.blueDarken1;
const instanceFieldColor = palette.purpleDarken1;
const keywordColor = palette.pinkDarken1;
const localVariableColor = editorTextColor;
const metadataColor = palette.purpleDarken1;
const numberColor = palette.purpleDarken1;
const parameterColor = editorTextColor;
const punctuationColor = mixWithEditorBackground(0.5, editorTextColor);
const staticFieldColor = instanceFieldColor;
const staticMethodColor = instanceMethodColor;
const stringColor = palette.greenDarken1;
const stringEscapeColor = palette.orangeDarken1;
const tagAttributeNameColor = palette.yellowDarken1;
const tagAttributeValueColor = palette.blueDarken1;
const tagName = palette.pinkDarken1;
const templateLanguageBackgroundColor = mixWithEditorBackground(
  0.75,
  palette.orangeDarken1,
);
const todoColor = palette.orangeDarken1;
const typeNameColor = palette.yellowDarken1;
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
  isDark: false,
  editorScheme: "/themes/sakura-light.xml",
  backgroundColor,
  bordersColor: guidelinesColor,
  textColor,
  actionButtons: {
    hover: {
      backgroundColor: mixWithBackground(0.75, palette.pinkDarken1),
      borderColor: mixWithBackground(0.5, palette.pinkDarken1),
    },
    pressed: {
      backgroundColor: mixWithBackground(0.65, palette.pinkDarken1),
      borderColor: mixWithBackground(0.5, palette.pinkDarken1),
    },
    separatorColor: guidelinesColor,
  },
  actions: {
    blue: palette.blueDarken1,
    green: palette.greenDarken1,
    grey: textColor,
    greyInline: textColor,
    greyInlineDark: textColor,
    red: palette.redDarken1,
    yellow: palette.yellowDarken1,
  },
  banner: {
    error: {
      backgroundColor: mixWithBackground(0.8, palette.redDarken1),
      borderColor: mixWithBackground(0.5, palette.redDarken1),
    },
    info: {
      backgroundColor: mixWithBackground(0.8, palette.blueDarken1),
      borderColor: mixWithBackground(0.5, palette.blueDarken1),
    },
    success: {
      backgroundColor: mixWithBackground(0.8, palette.greenDarken1),
      borderColor: mixWithBackground(0.5, palette.greenDarken1),
    },
    warning: {
      backgroundColor: mixWithBackground(0.8, palette.yellowDarken1),
      borderColor: mixWithBackground(0.5, palette.yellowDarken1),
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
      textColor: mix(0.5, palette.pinkDarken1, fieldTextColor),
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
      textColor: palette.pinkDarken1,
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
    borderColor: mixWithBackground(0.5, palette.pinkDarken1),
    area: {
      backgroundColor,
      foregroundColor: textColor,
    },
    row: {
      backgroundColor: rgbaToHex(transparentize(0.9, palette.pinkDarken1)),
    },
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: editorGuidelinesColor,
    textColor: editorTextColor,
    shortcutForeground: palette.pinkDarken1,
    searchField: {
      backgroundColor: editorBackgroundColor,
    },
    toolbar: {
      borderColor: guidelinesColor,
    },
    bookmark: {
      lineBackgroundColor: mixWithEditorBackground(
        0.75,
        palette.pinkDarken1,
      ),
      errorStripeColor: mixWithEditorBackground(0.75, palette.pinkDarken1),
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
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.redDarken1),
      errorStripeColor: mixWithEditorBackground(0.75, palette.redDarken1),
    },
    caret: {
      color: caretColor,
      rowBackgroundColor: backgroundColor,
    },
    codeLens: {
      borderColor: palette.pinkDarken1,
    },
    console: {
      output: {
        black: {
          backgroundColor: textColor,
          textColor: editorBackgroundColor,
        },
        red: palette.redDarken1,
        green: palette.greenDarken1,
        yellow: palette.yellowDarken1,
        blue: palette.blueDarken1,
        pink: palette.pinkDarken1,
        cyan: palette.turquoiseDarken1,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.redDarken1)),
        greenBright: lighten(0.05, saturate(0.2, palette.greenDarken1)),
        yellowBright: lighten(0.05, saturate(0.2, palette.yellowDarken1)),
        blueBright: lighten(0.05, saturate(0.2, palette.blueDarken1)),
        pinkBright: lighten(0.05, saturate(0.2, palette.pinkDarken1)),
        cyanBright: lighten(0.05, saturate(0.2, palette.turquoiseDarken1)),
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
        effectColor: palette.pinkDarken1,
      },
    },
    ctrlClickable: {
      textColor: linkColor,
      effectColor: linkColor,
    },
    debugger: {
      inlineValue: {
        executionLine: {
          textColor: mix(0.5, palette.blueDarken1, commentColor),
        },
        modified: {
          textColor: mix(0.5, palette.yellowDarken1, commentColor),
        },
        other: {
          textColor: commentColor,
        },
      },
    },
    diff: {
      conflict: {
        importantColor: mixWithEditorBackground(0.85, palette.yellowDarken1),
        ignoredColor: mixWithEditorBackground(0.925, palette.yellowDarken1),
        errorStripeColor: mixWithEditorBackground(0.5, palette.yellowDarken1),
      },
      deleted: {
        importantColor: mixWithEditorBackground(0.85, palette.redDarken1),
        ignoredColor: mixWithEditorBackground(0.925, palette.redDarken1),
        errorStripeColor: mixWithEditorBackground(0.5, palette.redDarken1),
      },
      inserted: {
        importantColor: mixWithEditorBackground(0.85, palette.greenDarken1),
        ignoredColor: mixWithEditorBackground(0.925, palette.greenDarken1),
        errorStripeColor: mixWithEditorBackground(0.5, palette.greenDarken1),
      },
      modified: {
        importantColor: mixWithEditorBackground(0.85, palette.blueDarken1),
        ignoredColor: mixWithEditorBackground(0.925, palette.blueDarken1),
        errorStripeColor: mixWithEditorBackground(0.5, palette.blueDarken1),
      },
      separatorWave: mixWithEditorBackground(0.5, palette.pinkDarken1),
    },
    fileStatus: {
      added: palette.greenDarken1,
      conflicts: palette.orangeDarken1,
      copied: palette.greenDarken1,
      deleted: palette.redDarken1,
      merged: palette.purpleDarken1,
      modified: palette.blueDarken1,
      switched: palette.purpleDarken1,
      unknown: palette.orangeDarken1,
      warning: palette.yellowDarken1,
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
      error: mixWithBackground(0.5, palette.redDarken1),
      info: backgroundColor,
      question: mixWithBackground(0.5, palette.purpleDarken1),
      warning: mixWithBackground(0.5, palette.yellowDarken1),
    },
    htmlTagTreeLevels: {
      level0: palette.pinkDarken1,
      level1: palette.purpleDarken1,
      level2: palette.blueDarken1,
      level3: palette.greenDarken1,
      level4: palette.yellowDarken1,
      level5: palette.orangeDarken1,
    },
    identifierUnderCaret: {
      standard: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.pinkDarken1,
        ),
        effectColor: mixWithEditorBackground(0.5, palette.pinkDarken1),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.pinkDarken1,
        ),
      },
      write: {
        backgroundColor: mixWithEditorBackground(
          0.75,
          palette.pinkDarken1,
        ),
        effectColor: mixWithEditorBackground(0.25, palette.pinkDarken1),
        errorStripeColor: mixWithEditorBackground(
          0.25,
          palette.pinkDarken1,
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
      backgroundColor: mixWithEditorBackground(0.8, palette.orangeDarken1),
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
      caretRow: { textColor: palette.pinkDarken1 },
    },
    matchedBracesIndentGuideColor: editorSelectionColor,
    matchingElement: {
      effectColor: palette.pinkDarken1,
    },
    methodSeparators: editorGuidelinesColor,
    notification: {
      backgroundColor: mixWithEditorBackground(0.5, palette.pinkDarken1),
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
      background: mixWithEditorBackground(0.95, palette.pinkDarken1),
      fragmentBackground: mixWithEditorBackground(
        0.95,
        palette.pinkDarken1,
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
        backgroundColor: mixWithEditorBackground(0.75, palette.blueDarken1),
        effectColor: mixWithEditorBackground(0.5, palette.blueDarken1),
      },
      textSearchResult: {
        backgroundColor: mixWithEditorBackground(0.75, palette.blueDarken1),
        effectColor: mixWithEditorBackground(0.5, palette.blueDarken1),
      },
      writeSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.blueDarken1),
        effectColor: mixWithEditorBackground(0.25, palette.blueDarken1),
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
        modifiedIconColor: palette.pinkDarken1,
      },
    },
    vcs: {
      annotation: {
        textColor,
        lastCommit: {
          textColor,
        },
        color1: mixWithEditorBackground(0.3, palette.pinkDarken1),
        color2: mixWithEditorBackground(0.45, palette.pinkDarken1),
        color3: mixWithEditorBackground(0.6, palette.pinkDarken1),
        color4: mixWithEditorBackground(0.75, palette.pinkDarken1),
        color5: mixWithEditorBackground(0.9, palette.pinkDarken1),
      },
      changedLinesPopup: {
        backgroundColor,
      },
      gutter: {
        addedLines: palette.greenDarken1,
        deletedLines: palette.redDarken1,
        modifiedLines: palette.blueDarken1,
        removedLines: palette.redDarken1,
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
    blue: mixWithBackground(0.9, saturate(0.5, palette.blueDarken1)),
    gray: mixWithBackground(0.9, saturate(0.5, textColor)),
    green: mixWithBackground(0.9, saturate(0.5, palette.greenDarken1)),
    orange: mixWithBackground(0.9, saturate(0.5, palette.orangeDarken1)),
    rose: mixWithBackground(0.9, saturate(0.5, palette.redDarken1)),
    violet: mixWithBackground(0.9, saturate(0.5, palette.purpleDarken1)),
    yellow: mixWithBackground(0.9, saturate(0.5, palette.yellowDarken1)),
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
    borderColor: mix(0.75, overlayBackgroundColor, palette.blackLighten3),
    textColor,
    hover: {
      backgroundColor: darken(0.02, overlayBackgroundColor),
    },
    error: {
      backgroundColor: mixWithEditorBackground(0.8, errorColor),
      borderColor: mixWithEditorBackground(0.5, errorColor),
      textColor,
    },
    info: {
      backgroundColor: mixWithEditorBackground(0.8, infoColor),
      borderColor: mixWithEditorBackground(0.5, infoColor),
      textColor,
    },
    warning: {
      backgroundColor: mixWithEditorBackground(0.8, warningColor),
      borderColor: mixWithEditorBackground(0.5, warningColor),
      textColor,
    },
  },
  objects: {
    blue: palette.blueDarken1,
    blackText: palette.whiteDarken3,
    green: palette.greenDarken1,
    grey: mixWithBackground(0.5, textColor),
    pink: palette.pinkDarken1,
    purple: palette.purpleDarken1,
    red: palette.redDarken1,
    redStatus: palette.redDarken1,
    yellow: palette.yellowDarken1,
    yellowDark: darken(0.2, palette.yellowDarken1),
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
        backgroundColor: mixWithBackground(0.25, palette.blueDarken1),
        textColor: palette.whiteDarken2,
      },
      pagination: {
        current: palette.pinkDarken1,
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
  // Contirnue from here
  progressBar: {
    backgroundColor: overlayBackgroundColor,
    foregroundColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.pinkDarken1),
    ),
    progressColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.pinkDarken1),
    ),
    indeterminate: {
      startColor: palette.pinkDarken1,
      endColor: lighten(0.15, palette.pinkDarken1),
    },
    failedColor: errorColor,
    failedEndColor: lighten(0.1, errorColor),
    warningColor,
    warningEndColor: lighten(0.1, warningColor),
    passedColor: successColor,
    passedEndColor: lighten(0.1, successColor),
  },
  runWidget: {
    backgroundColor: mixWithBackground(0.75, palette.pinkDarken1),
    iconColor: textColor,
    textColor,
    runningIconColor: palette.whiteDarken3,
    running: {
      backgroundColor: desaturate(0.1, darken(0.2, palette.greenDarken1)),
    },
    stop: {
      backgroundColor: desaturate(0.1, darken(0.2, palette.redDarken1)),
    },
    hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
    pressed: { overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)) },
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.75, palette.pinkDarken1),
    thumbBorderColor: mixWithBackground(0.5, palette.pinkDarken1),
    hover: {
      thumbColor: mixWithBackground(0.5, palette.pinkDarken1),
      thumbBorderColor: mixWithBackground(0.25, palette.pinkDarken1),
    },
  },
  searchEverywhere: {
    advertiser: {
      backgroundColor: overlayBackgroundColor,
      textColor,
    },
  },
  searchField: {
    errorBackgroundColor: mix(0.5, fieldBackgroundColor, palette.redDarken1),
    errorTextColor: palette.redDarken1,
  },
  searchMatch: {
    backgroundColor: palette.blueDarken1,
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
      borderColor: palette.pinkDarken1,
    },
  },
  speedSearch: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    errorTextColor: palette.redDarken1,
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
          palette.pinkDarken1,
        ),
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.pinkDarken1,
        ),
      },
    },
    selection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pinkDarken1,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pinkDarken1,
        ),
        textColor,
      },
    },
    lightSelection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pinkDarken1,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.pinkDarken1,
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
    buttonColor: palette.greenDarken1,
    disabledTextColor: "#0000ff",
    off: {
      backgroundColor,
      textColor,
    },
    on: {
      backgroundColor: mixWithBackground(0.5, palette.greenDarken1),
      textColor,
    },
  },
  tooltip: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    info: { textColor: "#ff0000" },
    shortcut: { textColor: palette.pinkDarken1 },
    link: { textColor: "#ffff00" },
    actions: {
      info: {
        textColor: palette.pinkDarken1,
      },
      backgroundColor: overlayBackgroundColor,
    },
  },
  toolWindow: {
    backgroundColor,
    button: {
      selected: {
        backgroundColor: mixWithBackground(0.25, palette.pinkDarken1),
        iconColor: invertedTextColor,
      },
      hover: {
        backgroundColor: mixWithBackground(0.5, palette.pinkDarken1),
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
    modified: { textColor: palette.blueDarken1 },
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
          backgroundColor: mixWithBackground(0.9, palette.pinkDarken1),
        },
        hover: {
          backgroundColor: mixWithBackground(0.8, palette.pinkDarken1),
        },
        selected: {
          backgroundColor: mixWithBackground(0.5, palette.pinkDarken1),
          textColor: palette.whiteDarken2,
          inactive: {
            backgroundColor: mixWithBackground(0.75, palette.pinkDarken1),
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
        head: palette.pinkDarken1,
        localBranch: palette.blueDarken1,
        remoteBranch: palette.greenDarken1,
        tag: palette.yellowDarken1,
        other: palette.purpleDarken1,
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
