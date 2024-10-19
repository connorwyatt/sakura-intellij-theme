import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";
import { rgbaToHex } from "../../utilities.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

const themeName = "Sakura Day Saturated";

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

const textColor = palette.blueBlackLighten5;
const invertedTextColor = palette.whiteDarken1;

const fieldBackgroundColor = mixWithBackground(
  0.925,
  lighten(0.15, palette.saturatedPink),
);
const fieldBorderColor = mixWithBackground(0.5, palette.saturatedPink);
const fieldTextColor = textColor;

const disabledFieldBorderColor = mixWithBackground(0.5, fieldBorderColor);
const disabledFieldTextColor = mixWithBackground(0.5, fieldTextColor);

const checkboxBackgroundColor = palette.saturatedPink;
const checkboxTickColor = palette.white;

const buttonPrimaryBackgroundColor = palette.saturatedPink;
const buttonPrimaryBorderColor = buttonPrimaryBackgroundColor;
const buttonPrimaryTextColor = palette.white;

const buttonSecondaryBackgroundColor = fieldBackgroundColor;
const buttonSecondaryBorderColor = fieldBorderColor;
const buttonSecondaryTextColor = fieldTextColor;

const linkColor = palette.saturatedBlueDarken1;

const fieldFocusColor = mix(
  0.5,
  backgroundColor,
  buttonPrimaryBackgroundColor,
);

const caretColor = palette.saturatedPinkDarken1;

const guidelinesColor = mixWithBackground(
  0.9,
  palette.blueBlackLighten5,
);
const treeLinesColor = mixWithBackground(
  0.8,
  palette.blueBlackLighten5,
);
const editorGuidelinesColor = mixWithEditorBackground(
  0.8,
  palette.blueBlackLighten5,
);

const listItem = (() => {
  const hoverColor = mixWithBackground(0.8, palette.saturatedPink);
  const inactiveSelectionColor = mixWithBackground(
    0.8,
    palette.blueBlackLighten5,
  );
  const selectionColor = mixWithBackground(0.6, palette.saturatedPink);

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
  palette.saturatedPink,
);

const badgeBackgroundColor = palette.saturatedPink;
const badgeTextColor = palette.white;

const tabs = {
  hoverColor: rgbaToHex(transparentize(0.9, palette.saturatedPink)),
  underlineColor: palette.saturatedPink,
};

const editorTextColor = mixWithEditorBackground(
  0.25,
  palette.blueBlackLighten5,
);

const commentColor = mixWithEditorBackground(0.5, editorTextColor);
const constantColor = palette.saturatedBlueDarken1;
const enumCaseColor = palette.saturatedGreenDarken1;
const globalVariableColor = palette.saturatedBlueDarken1;
const identifierColor = editorTextColor;
const instanceMethodColor = palette.saturatedBlueDarken1;
const instanceFieldColor = palette.saturatedPurpleDarken1;
const keywordColor = palette.saturatedPinkDarken1;
const localVariableColor = editorTextColor;
const metadataColor = palette.saturatedPurpleDarken1;
const numberColor = palette.saturatedPurpleDarken1;
const parameterColor = editorTextColor;
const punctuationColor = mixWithEditorBackground(0.5, editorTextColor);
const staticFieldColor = instanceFieldColor;
const staticMethodColor = instanceMethodColor;
const stringColor = palette.saturatedGreenDarken1;
const stringEscapeColor = palette.saturatedOrangeDarken1;
const tagAttributeNameColor = palette.saturatedYellowDarken1;
const tagAttributeValueColor = palette.saturatedBlueDarken1;
const tagName = palette.saturatedPinkDarken1;
const templateLanguageBackgroundColor = mixWithEditorBackground(
  0.9,
  palette.saturatedPinkDarken1,
);
const todoColor = palette.saturatedOrangeDarken1;
const typeNameColor = palette.saturatedYellowDarken1;
const whitespaceColor = mix(0.5, editorGuidelinesColor, punctuationColor);

const syntax = {
  attribute: metadataColor,
  badCharacter: {
    textColor: palette.saturatedRedDarken1,
    effectColor: palette.saturatedRedDarken1,
    errorStripeColor: palette.saturatedRedDarken1,
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
      textColor: stringColor,
      tag: {
        textColor: tagAttributeNameColor,
        value: {
          textColor: tagAttributeValueColor,
        },
      },
    },
    markup: {
      textColor: tagName,
    },
  },
  dot: punctuationColor,
  duplicateFromServer: {
    backgroundColor: mixWithEditorBackground(
      0.75,
      palette.saturatedYellowDarken1,
    ),
    errorStripeColor: palette.saturatedYellowDarken1,
  },
  entity: stringEscapeColor,
  enumCase: enumCaseColor,
  error: {
    textColor: palette.saturatedRedDarken1,
    effectColor: palette.saturatedRedDarken1,
    errorStripeColor: palette.saturatedRedDarken1,
  },
  functionCall: instanceMethodColor,
  functionDeclaration: instanceMethodColor,
  globalVariable: globalVariableColor,
  grammarError: {
    effectColor: palette.saturatedYellowDarken1,
    errorStripeColor: palette.saturatedYellowDarken1,
  },
  genericServerError: {
    effectColor: palette.saturatedYellowDarken1,
    errorStripeColor: palette.saturatedYellowDarken1,
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
    nonNullAssertion: punctuationColor,
    questionMark: punctuationColor,
  },
  markedForRemoval: {
    effectColor: palette.saturatedRedDarken1,
    textColor: commentColor,
  },
  metadata: metadataColor,
  modifiers: keywordColor,
  mutableVariable: {
    effectColor: mixWithEditorBackground(0.5, localVariableColor),
  },
  namedArgument: metadataColor,
  number: numberColor,
  operator: punctuationColor,
  parameter: parameterColor,
  primitiveTypes: typeNameColor,
  regexp: {
    matchedGroups: {
      backgroundColor: mixWithEditorBackground(
        0.9,
        palette.saturatedBlueDarken1,
      ),
    },
  },
  runtimeError: {
    effectColor: palette.saturatedRedDarken1,
    errorStripeColor: palette.saturatedRedDarken1,
  },
  semicolon: punctuationColor,
  staticField: staticFieldColor,
  staticMethod: staticMethodColor,
  string: stringColor,
  stringEscape: {
    invalid: {
      textColor: stringEscapeColor,
      effectColor: palette.saturatedRedDarken1,
    },
    valid: { textColor: stringEscapeColor },
  },
  suggestion: {
    effectColor: palette.saturatedBlueDarken1,
  },
  tabs: mixWithEditorBackground(0.5, punctuationColor),
  tag: punctuationColor,
  templateLanguage: {
    backgroundColor: templateLanguageBackgroundColor,
  },
  textStyleError: {
    effectColor: palette.saturatedRedDarken1,
  },
  textStyleSuggestion: {
    effectColor: palette.saturatedBlueDarken1,
  },
  textStyleWarning: {
    effectColor: palette.saturatedYellowDarken1,
  },
  todo: {
    textColor: todoColor,
    errorStripeColor: todoColor,
  },
  typeParameter: typeNameColor,
  typo: {
    effectColor: palette.saturatedYellowDarken1,
    errorStripeColor: palette.saturatedYellowDarken1,
  },
  unusedElement: {
    backgroundColor: null,
    textColor: mixWithEditorBackground(0.5, editorTextColor),
    effectColor: mixWithEditorBackground(0.25, palette.saturatedYellowDarken1),
  },
  warning: {
    effectColor: palette.saturatedYellowDarken1,
    errorStripeColor: palette.saturatedYellowDarken1,
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
  editorScheme: "/themes/sakura-day-saturated.xml",
  backgroundColor,
  bordersColor: guidelinesColor,
  textColor,
  actionButtons: {
    hover: {
      backgroundColor: mixWithBackground(0.75, palette.saturatedPink),
      borderColor: mixWithBackground(0.5, palette.saturatedPink),
    },
    pressed: {
      backgroundColor: mixWithBackground(0.65, palette.saturatedPink),
      borderColor: mixWithBackground(0.5, palette.saturatedPink),
    },
    separatorColor: guidelinesColor,
  },
  actions: {
    blue: palette.saturatedBlue,
    green: palette.saturatedGreen,
    grey: textColor,
    greyInline: textColor,
    greyInlineDark: textColor,
    red: palette.saturatedRed,
    yellow: palette.saturatedYellow,
  },
  banner: {
    error: {
      backgroundColor: mixWithBackground(0.8, palette.saturatedRed),
      borderColor: mixWithBackground(0.5, palette.saturatedRed),
    },
    info: {
      backgroundColor: mixWithBackground(0.8, palette.saturatedBlue),
      borderColor: mixWithBackground(0.5, palette.saturatedBlue),
    },
    success: {
      backgroundColor: mixWithBackground(0.8, palette.saturatedGreen),
      borderColor: mixWithBackground(0.5, palette.saturatedGreen),
    },
    warning: {
      backgroundColor: mixWithBackground(0.8, palette.saturatedYellow),
      borderColor: mixWithBackground(0.5, palette.saturatedYellow),
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
      backgroundColor: mixWithBackground(0.95, fieldTextColor),
      textColor: mixWithBackground(0.5, fieldTextColor),
    },
    modified: {
      textColor: mix(0.5, palette.saturatedPink, fieldTextColor),
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
  comboPopup: {
    borderColor: guidelinesColor,
  },
  completionPopup: {
    match: {
      textColor: palette.saturatedPink,
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
      changedValue: { textColor: palette.saturatedOrangeDarken1 },
      collectingData: { textColor: palette.saturatedBlueDarken1 },
      errorMessage: { textColor: palette.saturatedRedDarken1 },
      evaluatingExpression: { textColor: palette.saturatedBlueDarken1 },
      exception: { textColor: palette.saturatedRedDarken1 },
      modifyingValue: { textColor: palette.saturatedOrangeDarken1 },
      type: { textColor: typeNameColor },
      value: { textColor },
    },
  },
  dragAndDrop: {
    borderColor: mixWithBackground(0.5, palette.saturatedPink),
    area: {
      backgroundColor,
      foregroundColor: textColor,
    },
    row: {
      backgroundColor: rgbaToHex(transparentize(0.9, palette.saturatedPink)),
    },
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: editorGuidelinesColor,
    textColor: editorTextColor,
    shortcutForeground: palette.saturatedPink,
    searchField: {
      backgroundColor: editorBackgroundColor,
    },
    toolbar: {
      borderColor: guidelinesColor,
    },
    bookmark: {
      lineBackgroundColor: mixWithEditorBackground(
        0.75,
        palette.saturatedPink,
      ),
      errorStripeColor: mixWithEditorBackground(0.75, palette.saturatedPink),
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
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.saturatedRed),
      errorStripeColor: mixWithEditorBackground(0.75, palette.saturatedRed),
    },
    caret: {
      color: caretColor,
      rowBackgroundColor: backgroundColor,
    },
    codeLens: {
      borderColor: palette.saturatedPink,
    },
    console: {
      output: {
        black: {
          backgroundColor: textColor,
          textColor: editorBackgroundColor,
        },
        red: palette.saturatedRedDarken1,
        green: palette.saturatedGreenDarken1,
        yellow: palette.saturatedYellowDarken1,
        blue: palette.saturatedBlueDarken1,
        magenta: palette.saturatedPinkDarken1,
        cyan: palette.saturatedTurquoiseDarken1,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.saturatedRedDarken1)),
        greenBright: lighten(
          0.05,
          saturate(0.2, palette.saturatedGreenDarken1),
        ),
        yellowBright: lighten(
          0.05,
          saturate(0.2, palette.saturatedYellowDarken1),
        ),
        blueBright: lighten(0.05, saturate(0.2, palette.saturatedBlueDarken1)),
        magentaBright: lighten(
          0.05,
          saturate(0.2, palette.saturatedPinkDarken1),
        ),
        cyanBright: lighten(
          0.05,
          saturate(0.2, palette.saturatedTurquoiseDarken1),
        ),
        normal: textColor,
        error: palette.saturatedRedDarken1,
        system: textColor,
        white: {
          textColor,
        },
      },
      input: {
        user: textColor,
        runUsingIDE: {
          backgroundColor: mixWithEditorBackground(
            0.8,
            palette.saturatedTurquoiseDarken1,
          ),
          textColor,
        },
      },
      rangeToExecute: {
        effectColor: palette.saturatedPinkDarken1,
      },
    },
    ctrlClickable: {
      textColor: linkColor,
      effectColor: linkColor,
    },
    debugger: {
      inlineValue: {
        executionLine: {
          textColor: mix(0.5, palette.saturatedBlueDarken1, commentColor),
        },
        modified: {
          textColor: mix(0.5, palette.saturatedYellowDarken1, commentColor),
        },
        other: {
          textColor: commentColor,
        },
      },
    },
    diff: {
      conflict: {
        importantColor: mixWithEditorBackground(0.75, palette.saturatedYellow),
        ignoredColor: mixWithEditorBackground(0.875, palette.saturatedYellow),
        errorStripeColor: mixWithEditorBackground(0.5, palette.saturatedYellow),
      },
      deleted: {
        importantColor: mixWithEditorBackground(0.75, palette.saturatedRed),
        ignoredColor: mixWithEditorBackground(0.875, palette.saturatedRed),
        errorStripeColor: mixWithEditorBackground(0.5, palette.saturatedRed),
      },
      inserted: {
        importantColor: mixWithEditorBackground(0.75, palette.saturatedGreen),
        ignoredColor: mixWithEditorBackground(0.875, palette.saturatedGreen),
        errorStripeColor: mixWithEditorBackground(0.5, palette.saturatedGreen),
      },
      modified: {
        importantColor: mixWithEditorBackground(0.75, palette.saturatedBlue),
        ignoredColor: mixWithEditorBackground(0.875, palette.saturatedBlue),
        errorStripeColor: mixWithEditorBackground(0.5, palette.saturatedBlue),
      },
      separatorWave: mixWithEditorBackground(0.5, palette.saturatedPink),
    },
    fileStatus: {
      added: palette.saturatedGreenDarken1,
      conflicts: palette.saturatedOrangeDarken1,
      copied: palette.saturatedGreenDarken1,
      deleted: palette.saturatedRedDarken1,
      merged: palette.saturatedPurpleDarken1,
      modified: palette.saturatedBlueDarken1,
      switched: palette.saturatedPurpleDarken1,
      unknown: palette.saturatedOrangeDarken1,
      warning: palette.saturatedYellowDarken1,
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
      error: mixWithBackground(0.5, palette.saturatedRed),
      info: backgroundColor,
      question: mixWithBackground(0.5, palette.saturatedPurple),
      warning: mixWithBackground(0.5, palette.saturatedYellow),
    },
    htmlTagTreeLevels: {
      level0: palette.saturatedPink,
      level1: palette.saturatedPurple,
      level2: palette.saturatedBlue,
      level3: palette.saturatedGreen,
      level4: palette.saturatedYellow,
      level5: palette.saturatedOrange,
    },
    identifierUnderCaret: {
      standard: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          editorTextColor,
        ),
        effectColor: mixWithEditorBackground(0.5, editorTextColor),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          editorTextColor,
        ),
      },
      write: {
        backgroundColor: mixWithEditorBackground(
          0.75,
          editorTextColor,
        ),
        effectColor: mixWithEditorBackground(0.25, editorTextColor),
        errorStripeColor: mixWithEditorBackground(
          0.25,
          editorTextColor,
        ),
      },
    },
    images: {
      backgroundColor: editorBackgroundColor,
      alternateBackgroundColor: backgroundColor,
      gridLineColor: editorGuidelinesColor,
    },
    info: {
      effectColor: palette.saturatedBlue,
      errorStripeColor: palette.saturatedBlue,
    },
    indentGuide: {
      normal: { color: editorGuidelinesColor },
      selected: { color: editorSelectionColor },
    },
    injectedLanguageFragment: {
      backgroundColor: mixWithEditorBackground(
        0.8,
        palette.saturatedBlueDarken1,
      ),
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
      caretRow: { textColor: palette.saturatedPinkDarken1 },
    },
    matchedBracesIndentGuideColor: editorSelectionColor,
    matchingElement: {
      effectColor: palette.saturatedPinkDarken1,
    },
    methodSeparators: editorGuidelinesColor,
    notification: {
      backgroundColor: mixWithEditorBackground(0.5, palette.saturatedPink),
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
      background: mixWithEditorBackground(0.95, palette.saturatedPink),
      fragmentBackground: mixWithEditorBackground(
        0.95,
        palette.saturatedPink,
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
        backgroundColor: mixWithEditorBackground(0.75, palette.saturatedBlue),
        effectColor: mixWithEditorBackground(0.5, palette.saturatedBlue),
      },
      textSearchResult: {
        backgroundColor: mixWithEditorBackground(0.75, palette.saturatedBlue),
        effectColor: mixWithEditorBackground(0.5, palette.saturatedBlue),
      },
      writeSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.saturatedBlue),
        effectColor: mixWithEditorBackground(0.25, palette.saturatedBlue),
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
          underlineColor: tabs.underlineColor,
        },
        modifiedIconColor: palette.saturatedPink,
      },
    },
    vcs: {
      annotation: {
        textColor,
        lastCommit: {
          textColor,
        },
        color1: mixWithEditorBackground(0.3, palette.saturatedPink),
        color2: mixWithEditorBackground(0.45, palette.saturatedPink),
        color3: mixWithEditorBackground(0.6, palette.saturatedPink),
        color4: mixWithEditorBackground(0.75, palette.saturatedPink),
        color5: mixWithEditorBackground(0.9, palette.saturatedPink),
      },
      changedLinesPopup: {
        backgroundColor,
      },
      gutter: {
        addedLines: palette.saturatedGreen,
        deletedLines: palette.saturatedRed,
        modifiedLines: palette.saturatedBlue,
        removedLines: palette.saturatedRed,
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
      focusColor: palette.saturatedRed,
      inactive: {
        focusColor: mixWithBackground(0.5, palette.saturatedRed),
      },
    },
    warning: {
      focusColor: palette.saturatedYellow,
      inactive: {
        focusColor: mixWithBackground(0.5, palette.saturatedYellow),
      },
    },
    infoTextColor: mixWithBackground(0.25, textColor),
  },
  fileColors: {
    blue: mixWithBackground(0.9, saturate(0.5, palette.saturatedBlueDarken1)),
    gray: mixWithBackground(0.9, saturate(0.5, textColor)),
    green: mixWithBackground(0.9, saturate(0.5, palette.saturatedGreenDarken1)),
    orange: mixWithBackground(
      0.9,
      saturate(0.5, palette.saturatedOrangeDarken1),
    ),
    rose: mixWithBackground(0.9, saturate(0.5, palette.saturatedRedDarken1)),
    violet: mixWithBackground(
      0.9,
      saturate(0.5, palette.saturatedPurpleDarken1),
    ),
    yellow: mixWithBackground(
      0.9,
      saturate(0.5, palette.saturatedYellowDarken1),
    ),
  },
  gotItTooltip: {
    backgroundColor: overlayBackgroundColor,
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
      textColor: palette.saturatedRed,
    },
    info: {
      textColor: mixWithBackground(0.25, textColor),
    },
    success: {
      textColor: palette.saturatedGreen,
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
    active: {
      backgroundColor: topBarBackgroundColor,
    },
    inactive: {
      backgroundColor: topBarBackgroundColor,
    },
    separatorColor: guidelinesColor,
    dropdown: {
      backgroundColor: topBarBackgroundColor,
      hover: {
        backgroundColor: mixWithTopBarBackground(0.5, palette.saturatedPink),
      },
      pressed: {
        backgroundColor: mixWithTopBarBackground(0.6, palette.saturatedPink),
      },
    },
    icon: {
      backgroundColor: topBarBackgroundColor,
      hover: {
        backgroundColor: mixWithTopBarBackground(0.5, palette.saturatedPink),
      },
      pressed: {
        backgroundColor: mixWithTopBarBackground(0.6, palette.saturatedPink),
      },
    },
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
      borderColor: guidelinesColor,
      separatorColor: topBarBackgroundColor,
    },
  },
  memoryIndicator: {
    allocated: {
      backgroundColor: mixWithBackground(0.5, palette.saturatedPink),
    },
    used: { backgroundColor: mixWithBackground(0.25, palette.saturatedPink) },
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
  navBar: {
    borderColor: guidelinesColor,
  },
  newUIOnboardingDialog: { backgroundColor },
  notification: {
    backgroundColor: overlayBackgroundColor,
    borderColor: mix(0.75, overlayBackgroundColor, palette.blueBlackLighten5),
    textColor,
    hover: {
      backgroundColor: darken(0.02, overlayBackgroundColor),
    },
    error: {
      backgroundColor: mixWithEditorBackground(0.8, palette.saturatedRed),
      borderColor: mixWithEditorBackground(0.5, palette.saturatedRed),
      textColor,
    },
    info: {
      backgroundColor: mixWithEditorBackground(0.8, palette.saturatedBlue),
      borderColor: mixWithEditorBackground(0.5, palette.saturatedBlue),
      textColor,
    },
    warning: {
      backgroundColor: mixWithEditorBackground(0.8, palette.saturatedYellow),
      borderColor: mixWithEditorBackground(0.5, palette.saturatedYellow),
      textColor,
    },
  },
  objects: {
    blue: palette.saturatedBlue,
    blackText: palette.whiteDarken3,
    green: palette.saturatedGreen,
    grey: mixWithBackground(0.25, textColor),
    pink: palette.saturatedPink,
    purple: palette.saturatedPurple,
    red: palette.saturatedRed,
    redStatus: palette.saturatedRed,
    yellow: palette.saturatedYellow,
    yellowDark: darken(0.2, palette.saturatedYellow),
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
        backgroundColor: mixWithBackground(0.25, palette.saturatedBlue),
        textColor: palette.whiteDarken2,
      },
      pagination: {
        current: palette.saturatedPink,
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
      lighten(0.15, palette.saturatedPink),
    ),
    progressColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.saturatedPink),
    ),
    indeterminate: {
      startColor: palette.saturatedPink,
      endColor: lighten(0.15, palette.saturatedPink),
    },
    failedColor: palette.saturatedRed,
    failedEndColor: lighten(0.1, palette.saturatedRed),
    warningColor: palette.saturatedYellow,
    warningEndColor: lighten(0.1, palette.saturatedYellow),
    passedColor: palette.saturatedGreen,
    passedEndColor: lighten(0.1, palette.saturatedGreen),
  },
  runWidget: {
    backgroundColor: mixWithBackground(0.75, palette.saturatedPink),
    iconColor: textColor,
    textColor,
    runningIconColor: palette.whiteDarken3,
    running: {
      backgroundColor: desaturate(0.1, lighten(0.1, palette.saturatedGreen)),
    },
    stop: {
      backgroundColor: desaturate(0.1, lighten(0.1, palette.saturatedRed)),
    },
    hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
    pressed: { overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)) },
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.75, palette.saturatedPink),
    thumbBorderColor: mixWithBackground(0.5, palette.saturatedPink),
    hover: {
      thumbColor: mixWithBackground(0.5, palette.saturatedPink),
      thumbBorderColor: mixWithBackground(0.25, palette.saturatedPink),
    },
  },
  searchEverywhere: {
    advertiser: {
      backgroundColor: overlayBackgroundColor,
      textColor,
    },
    moreText: {
      textColor: linkColor,
    },
  },
  searchField: {
    errorBackgroundColor: mix(0.5, fieldBackgroundColor, palette.saturatedRed),
    errorTextColor: palette.saturatedRed,
  },
  searchMatch: {
    backgroundColor: palette.saturatedBlue,
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
      borderColor: palette.saturatedPink,
    },
  },
  speedSearch: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    errorTextColor: palette.saturatedRed,
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
          palette.saturatedPink,
        ),
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.saturatedPink,
        ),
      },
    },
    selection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.saturatedPink,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.saturatedPink,
        ),
        textColor,
      },
    },
    lightSelection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.saturatedPink,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.saturatedPink,
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
    inactive: {
      backgroundColor: editorBackgroundColor,
      textColor: mixWithEditorBackground(0.5, textColor),
    },
  },
  textField: {
    backgroundColor: fieldBackgroundColor,
    textColor: fieldTextColor,
    caretColor,
    shadowColor: mixWithBackground(0.9, fieldTextColor),
    highlightColor: palette.saturatedBlueDarken1,
    inactive: {
      textColor: mixWithBackground(0.5, fieldTextColor),
    },
    selection: {
      backgroundColor: listItem.selection.active.backgroundColor,
      textColor: listItem.selection.active.textColor,
    },
  },
  textPane: {
    textColor,
  },
  tipOfTheDay: {
    image: {
      borderColor: guidelinesColor,
    },
  },
  titledBorder: {
    titleColor: textColor,
  },
  titlePane: {
    backgroundColor,
    button: {
      hoverColor: fieldFocusColor,
    },
  },
  toggleButton: {
    backgroundColor,
    textColor: "#00ffff",
    borderColor: mix(0.25, palette.whiteDarken2, guidelinesColor),
    buttonColor: palette.saturatedGreen,
    disabledTextColor: "#0000ff",
    off: {
      backgroundColor,
      textColor,
    },
    on: {
      backgroundColor: mixWithBackground(0.5, palette.saturatedGreen),
      textColor,
    },
  },
  tooltip: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    info: { textColor: mix(0.5, overlayBackgroundColor, textColor) },
    shortcut: { textColor: palette.saturatedPink },
    link: { textColor: linkColor },
    actions: {
      info: {
        textColor: palette.saturatedPink,
      },
      backgroundColor: overlayBackgroundColor,
    },
  },
  toolWindow: {
    backgroundColor,
    button: {
      selected: {
        backgroundColor: mixWithBackground(0.25, palette.saturatedPink),
        iconColor: invertedTextColor,
      },
      hover: {
        backgroundColor: mixWithBackground(0.5, palette.saturatedPink),
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
    error: { textColor: palette.saturatedRed },
    modified: { textColor: palette.saturatedBlue },
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
  validationTooltip: {
    error: {
      backgroundColor: mixWithBackground(0.75, palette.saturatedRed),
      borderColor: mixWithBackground(0.5, palette.saturatedRed),
    },
    warning: {
      backgroundColor: mixWithBackground(0.75, palette.saturatedYellow),
      borderColor: mixWithBackground(0.5, palette.saturatedYellow),
    },
  },
  vcs: {
    log: {
      commit: {
        rowHeight: 28,
        currentBranch: {
          backgroundColor: mixWithBackground(0.95, palette.saturatedBlue),
        },
        hover: {
          backgroundColor: listItem.hover.active.backgroundColor,
        },
        selected: {
          active: {
            backgroundColor: listItem.selection.active.backgroundColor,
            textColor: listItem.selection.active.textColor,
          },
          inactive: {
            backgroundColor: listItem.selection.inactive.backgroundColor,
            textColor: listItem.selection.inactive.textColor,
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
        head: palette.saturatedPink,
        localBranch: palette.saturatedBlue,
        remoteBranch: palette.saturatedGreen,
        tag: palette.saturatedYellow,
        other: palette.saturatedPurple,
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
  viewport: {
    backgroundColor: overlayBackgroundColor,
    textColor,
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
