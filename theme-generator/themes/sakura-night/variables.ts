import { Polished } from "../../deps.ts";
import { palette } from "../palette.ts";
import { rgbaToHex } from "../../utilities.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

const themeName = "Sakura Night";

const backgroundColor = palette.washedBlack;
const overlayBackgroundColor = palette.infinity;
const topBarBackgroundColor = palette.riverStyx;
const editorBackgroundColor = palette.riverStyx;

const mixWithBackground = (percentage: number, color: string): string =>
  mix(percentage, backgroundColor, color);

const mixWithTopBarBackground = (percentage: number, color: string): string =>
  mix(percentage, topBarBackgroundColor, color);

const mixWithEditorBackground = (percentage: number, color: string): string =>
  mix(percentage, editorBackgroundColor, color);

const textColor = palette.brooklet;
const editorTextColor = palette.brooklet;

const fieldBackgroundColor = mixWithBackground(
  0.925,
  lighten(0.15, palette.pepto),
);
const fieldBorderColor = mixWithBackground(0.5, palette.sairaRed);
const fieldTextColor = textColor;

const disabledFieldBorderColor = mixWithBackground(0.5, fieldBorderColor);
const disabledFieldTextColor = mixWithBackground(0.5, fieldTextColor);

const checkboxBackgroundColor = palette.sairaRed;
const checkboxTickColor = palette.brooklet;

const buttonPrimaryBackgroundColor = palette.sairaRed;
const buttonPrimaryBorderColor = buttonPrimaryBackgroundColor;
const buttonPrimaryTextColor = palette.brooklet;

const buttonSecondaryBackgroundColor = fieldBackgroundColor;
const buttonSecondaryBorderColor = fieldBorderColor;
const buttonSecondaryTextColor = fieldTextColor;

const linkColor = palette.pacificHarbour;

const fieldFocusColor = mix(
  0.5,
  backgroundColor,
  buttonPrimaryBackgroundColor,
);

const caretColor = palette.sairaRed;

const errorColor = palette.briquette;
const infoColor = palette.pacificHarbour;
const successColor = palette.liveryGreen;
const warningColor = palette.overjoy;

const guidelinesColor = mixWithBackground(0.95, palette.brooklet);
const treeLinesColor = mixWithBackground(0.8, palette.brooklet);
const editorGuidelinesColor = mixWithEditorBackground(0.9, palette.brooklet);

const selectionColor = mixWithBackground(0.25, palette.sairaRed);
const editorSelectionColor = mixWithEditorBackground(
  0.75,
  palette.sairaRed,
);

const badgeBackgroundColor = palette.sairaRed;
const badgeTextColor = palette.brooklet;

const tabs = {
  hoverColor: rgbaToHex(transparentize(0.9, palette.sairaRed)),
  underlineColor: palette.sairaRed,
};

const commentColor = mixWithEditorBackground(0.25, palette.brooklet);
const constantColor = palette.brightLavender;
const enumCaseColor = palette.brightLavender;
const functionColor = palette.pacificHarbour;
const globalVariableColor = palette.overjoy;
const keywordColor = palette.pepto;
const localVariableColor = editorTextColor;
const metadataColor = palette.brightLavender;
const numberColor = palette.pacificHarbour;
const punctuationColor = mix(0.5, editorTextColor, palette.pepto);
const stringColor = palette.liveryGreen;
const stringEscapeColor = palette.pumpkinPie;
const templateLanguageBackgroundColor = mixWithEditorBackground(
  0.75,
  palette.pacificHarbour,
);
const todoColor = palette.pumpkinPie;
const typeNameColor = palette.overjoy;

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
  custom: {
    keyword1: keywordColor,
    keyword2: keywordColor,
    keyword3: keywordColor,
    keyword4: keywordColor,
  },
  deprecation: {
    effectColor: mixWithEditorBackground(0.5, editorTextColor),
    textColor: mixWithEditorBackground(0.5, editorTextColor),
  },
  docs: {
    comment: {
      textColor: mixWithEditorBackground(0.25, stringColor),
      tag: {
        textColor: palette.pepto,
        value: {
          textColor: palette.overjoy,
        },
      },
    },
    markup: {
      textColor: palette.pacificHarbour,
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
  functionCall: functionColor,
  functionDeclaration: functionColor,
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
  kotlin: {
    colon: punctuationColor,
  },
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
  whitespace: editorGuidelinesColor,
  xml: {
    nsPrefix: { textColor: palette.overjoy },
    attributeName: palette.overjoy,
    attributeValue: palette.pacificHarbour,
    tagName: palette.pepto,
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
      backgroundColor: mixWithBackground(0.5, palette.sairaRed),
      borderColor: mixWithBackground(0.25, palette.sairaRed),
    },
    pressed: {
      backgroundColor: mixWithBackground(0.4, palette.sairaRed),
      borderColor: mixWithBackground(0.25, palette.sairaRed),
    },
    separatorColor: guidelinesColor,
  },
  actions: {
    blue: palette.pacificHarbour,
    green: palette.liveryGreen,
    grey: textColor,
    greyInline: textColor,
    greyInlineDark: textColor,
    red: palette.briquette,
    yellow: palette.overjoy,
  },
  banner: {
    error: {
      backgroundColor: mixWithBackground(0.75, palette.briquette),
      borderColor: mixWithBackground(0.5, palette.briquette),
    },
    info: {
      backgroundColor: mixWithBackground(0.75, palette.pacificHarbour),
      borderColor: mixWithBackground(0.5, palette.pacificHarbour),
    },
    success: {
      backgroundColor: mixWithBackground(0.75, palette.liveryGreen),
      borderColor: mixWithBackground(0.5, palette.liveryGreen),
    },
    warning: {
      backgroundColor: mixWithBackground(0.75, palette.overjoy),
      borderColor: mixWithBackground(0.5, palette.overjoy),
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
  comboBox: {
    backgroundColor,
    textColor: fieldTextColor,
    disabled: {
      textColor: mixWithBackground(0.5, fieldTextColor),
    },
    modified: {
      textColor: mix(0.5, palette.pepto, fieldTextColor),
    },
    selected: {
      backgroundColor: selectionColor,
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
      textColor: palette.sairaRed,
    },
    textColor,
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
    borderColor: mixWithBackground(0.5, palette.sairaRed),
    area: {
      backgroundColor,
      foregroundColor: textColor,
    },
    row: {
      backgroundColor: rgbaToHex(transparentize(0.9, palette.sairaRed)),
    },
  },
  editor: {
    backgroundColor: editorBackgroundColor,
    borderColor: editorGuidelinesColor,
    textColor,
    shortcutForeground: palette.sairaRed,
    searchField: {
      backgroundColor: editorBackgroundColor,
    },
    toolbar: {
      borderColor: guidelinesColor,
    },
    bookmark: {
      lineBackgroundColor: mixWithEditorBackground(
        0.75,
        palette.sairaRed,
      ),
      errorStripeColor: mixWithEditorBackground(0.75, palette.sairaRed),
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
      lineBackgroundColor: mixWithEditorBackground(0.75, palette.briquette),
      errorStripeColor: mixWithEditorBackground(0.75, palette.briquette),
    },
    caret: {
      color: caretColor,
      rowBackgroundColor: lighten(0.05, editorBackgroundColor),
    },
    codeLens: {
      borderColor: palette.pepto,
    },
    console: {
      output: {
        black: {
          backgroundColor: textColor,
          textColor: editorBackgroundColor,
        },
        red: palette.briquette,
        green: palette.liveryGreen,
        yellow: palette.overjoy,
        blue: palette.pacificHarbour,
        pink: palette.pepto,
        cyan: palette.hiddenSeaGlass,
        gray: mixWithEditorBackground(0.25, textColor),
        darkGray: mixWithEditorBackground(0.5, textColor),
        redBright: lighten(0.05, saturate(0.2, palette.briquette)),
        greenBright: lighten(0.05, saturate(0.2, palette.liveryGreen)),
        yellowBright: lighten(0.05, saturate(0.2, palette.overjoy)),
        blueBright: lighten(0.05, saturate(0.2, palette.pacificHarbour)),
        pinkBright: lighten(0.05, saturate(0.2, palette.pepto)),
        cyanBright: lighten(0.05, saturate(0.2, palette.hiddenSeaGlass)),
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
        effectColor: palette.sairaRed,
      },
    },
    ctrlClickable: {
      textColor: linkColor,
      effectColor: linkColor,
    },
    debugger: {
      inlineValue: {
        executionLine: {
          textColor: mix(0.5, palette.pacificHarbour, commentColor),
        },
        modified: {
          textColor: mix(0.5, palette.overjoy, commentColor),
        },
        other: {
          textColor: commentColor,
        },
      },
    },
    diff: {
      conflict: {
        importantColor: mixWithEditorBackground(0.75, palette.overjoy),
        ignoredColor: mixWithEditorBackground(0.875, palette.overjoy),
        errorStripeColor: mixWithEditorBackground(0.5, palette.overjoy),
      },
      deleted: {
        importantColor: mixWithEditorBackground(0.75, palette.briquette),
        ignoredColor: mixWithEditorBackground(0.875, palette.briquette),
        errorStripeColor: mixWithEditorBackground(0.5, palette.briquette),
      },
      inserted: {
        importantColor: mixWithEditorBackground(0.75, palette.liveryGreen),
        ignoredColor: mixWithEditorBackground(0.875, palette.liveryGreen),
        errorStripeColor: mixWithEditorBackground(0.5, palette.liveryGreen),
      },
      modified: {
        importantColor: mixWithEditorBackground(0.75, palette.pacificHarbour),
        ignoredColor: mixWithEditorBackground(0.875, palette.pacificHarbour),
        errorStripeColor: mixWithEditorBackground(0.5, palette.pacificHarbour),
      },
      separatorWave: mixWithEditorBackground(0.5, palette.sairaRed),
    },
    fileStatus: {
      added: palette.liveryGreen,
      conflicts: palette.pumpkinPie,
      copied: palette.liveryGreen,
      deleted: palette.briquette,
      merged: palette.brightLavender,
      modified: palette.pacificHarbour,
      switched: palette.brightLavender,
      unknown: palette.pumpkinPie,
      warning: palette.overjoy,
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
      error: mixWithBackground(0.5, palette.briquette),
      info: backgroundColor,
      question: mixWithBackground(0.5, palette.brightLavender),
      warning: mixWithBackground(0.5, palette.overjoy),
    },
    htmlTagTreeLevels: {
      level0: palette.pepto,
      level1: palette.brightLavender,
      level2: palette.pacificHarbour,
      level3: palette.liveryGreen,
      level4: palette.overjoy,
      level5: palette.pumpkinPie,
    },
    identifierUnderCaret: {
      standard: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.sairaRed,
        ),
        effectColor: mixWithEditorBackground(0.5, palette.sairaRed),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.sairaRed,
        ),
      },
      write: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.sairaRed,
        ),
        effectColor: mixWithEditorBackground(0.5, palette.sairaRed),
        errorStripeColor: mixWithEditorBackground(
          0.5,
          palette.sairaRed,
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
      backgroundColor: mixWithEditorBackground(0.8, palette.pumpkinPie),
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
      caretRow: { textColor: palette.sairaRed },
    },
    matchedBracesIndentGuideColor: editorSelectionColor,
    matchingElement: {
      effectColor: palette.sairaRed,
    },
    methodSeparators: editorGuidelinesColor,
    notification: {
      backgroundColor: mixWithEditorBackground(0.5, palette.sairaRed),
    },
    pane: {
      textColor,
      selection: {
        backgroundColor: selectionColor,
        textColor,
      },
    },
    preview: {
      backgroundColor: editorBackgroundColor,
      borderColor: editorGuidelinesColor,
    },
    readonly: {
      background: mixWithEditorBackground(0.95, palette.sairaRed),
      fragmentBackground: mixWithEditorBackground(
        0.95,
        palette.sairaRed,
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
        backgroundColor: mixWithEditorBackground(0.5, palette.pacificHarbour),
        effectColor: mixWithEditorBackground(0.25, palette.pacificHarbour),
      },
      textSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.pacificHarbour),
        effectColor: mixWithEditorBackground(0.25, palette.pacificHarbour),
      },
      writeSearchResult: {
        backgroundColor: mixWithEditorBackground(0.5, palette.pacificHarbour),
        effectColor: mixWithEditorBackground(0.25, palette.pacificHarbour),
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
        modifiedIconColor: palette.sairaRed,
      },
    },
    vcs: {
      annotation: {
        textColor,
        lastCommit: {
          textColor,
        },
        color1: mixWithEditorBackground(0.3, palette.sairaRed),
        color2: mixWithEditorBackground(0.45, palette.sairaRed),
        color3: mixWithEditorBackground(0.6, palette.sairaRed),
        color4: mixWithEditorBackground(0.75, palette.sairaRed),
        color5: mixWithEditorBackground(0.9, palette.sairaRed),
      },
      changedLinesPopup: {
        backgroundColor,
      },
      gutter: {
        addedLines: palette.liveryGreen,
        deletedLines: palette.briquette,
        modifiedLines: palette.pacificHarbour,
        removedLines: palette.briquette,
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
    blue: mixWithBackground(0.9, saturate(0.5, palette.pacificHarbour)),
    gray: mixWithBackground(0.9, saturate(0.5, textColor)),
    green: mixWithBackground(0.9, saturate(0.5, palette.liveryGreen)),
    orange: mixWithBackground(0.9, saturate(0.5, palette.pumpkinPie)),
    rose: mixWithBackground(0.9, saturate(0.5, palette.briquette)),
    violet: mixWithBackground(0.9, saturate(0.5, palette.brightLavender)),
    yellow: mixWithBackground(0.9, saturate(0.5, palette.overjoy)),
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
    blue: palette.pacificHarbour,
    blackText: palette.brooklet,
    green: palette.liveryGreen,
    grey: mixWithBackground(0.5, textColor),
    pink: palette.pepto,
    purple: palette.brightLavender,
    red: palette.briquette,
    redStatus: palette.briquette,
    yellow: palette.overjoy,
    yellowDark: darken(0.2, palette.overjoy),
  },
  panel: {
    backgroundColor,
    textColor,
  },
  plugins: {
    list: {
      backgroundColor,
      hover: {
        backgroundColor: mixWithBackground(0.75, selectionColor),
      },
      disabled: {
        textColor: mixWithBackground(0.5, textColor),
      },
      selected: {
        backgroundColor: selectionColor,
      },
    },
    description: {
      tag: {
        backgroundColor: mixWithBackground(0.25, palette.pacificHarbour),
        textColor: palette.brooklet,
      },
      pagination: {
        current: palette.pepto,
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
  },
  problemsView: {
    projectAnalysisButton: {
      backgroundColor: mixWithBackground(0.5, palette.brooklet),
    },
  },
  progressBar: {
    backgroundColor: overlayBackgroundColor,
    foregroundColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.sairaRed),
    ),
    progressColor: mixWithEditorBackground(
      0.5,
      lighten(0.15, palette.sairaRed),
    ),
    indeterminate: {
      startColor: palette.sairaRed,
      endColor: lighten(0.15, palette.sairaRed),
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
    runningIconColor: palette.brooklet,
    running: {
      backgroundColor: desaturate(0.3, darken(0.2, palette.liveryGreen)),
    },
    stop: { backgroundColor: desaturate(0.3, darken(0.2, palette.briquette)) },
    hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
    pressed: { overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)) },
  },
  scrollBar: {
    thumbColor: mixWithBackground(0.75, palette.sairaRed),
    thumbBorderColor: mixWithBackground(0.5, palette.sairaRed),
    hover: {
      thumbColor: mixWithBackground(0.5, palette.sairaRed),
      thumbBorderColor: mixWithBackground(0.25, palette.sairaRed),
    },
  },
  searchField: {
    errorBackgroundColor: mix(0.5, fieldBackgroundColor, palette.briquette),
    errorTextColor: palette.briquette,
  },
  searchMatch: {
    backgroundColor: palette.pacificHarbour,
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
      backgroundColor: selectionColor,
    },
    inactive: {
      backgroundColor: mixWithBackground(0.5, selectionColor),
    },
    textColor: palette.brooklet,
  },
  separatorColor: guidelinesColor,
  settings: {
    spotlight: {
      borderColor: palette.sairaRed,
    },
  },
  speedSearch: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    errorTextColor: palette.briquette,
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
    alternateRowBackgroundColor: palette.briquette,
    textColor,
    gridColor: editorGuidelinesColor,
    sortIconColor: textColor,
    stripeColor: "#ff00ff",
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
          palette.sairaRed,
        ),
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.9,
          palette.sairaRed,
        ),
      },
    },
    selection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.sairaRed,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.sairaRed,
        ),
        textColor,
      },
    },
    lightSelection: {
      active: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.sairaRed,
        ),
        textColor,
      },
      inactive: {
        backgroundColor: mixWithEditorBackground(
          0.5,
          palette.sairaRed,
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
    textColor,
    caretColor,
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
  tipOfTheDay: {
    image: {
      borderColor: guidelinesColor,
    },
  },
  toggleButton: {
    backgroundColor,
    textColor: "#00ffff",
    borderColor: mix(0.25, palette.brooklet, guidelinesColor),
    buttonColor: palette.liveryGreen,
    disabledTextColor: "#0000ff",
    off: {
      backgroundColor,
      textColor,
    },
    on: {
      backgroundColor: mixWithBackground(0.5, palette.liveryGreen),
      textColor,
    },
  },
  tooltip: {
    backgroundColor: overlayBackgroundColor,
    textColor,
    borderColor: guidelinesColor,
    info: { textColor: "#ff0000" },
    shortcut: { textColor: palette.sairaRed },
    link: { textColor: "#ffff00" },
    actions: {
      info: {
        textColor: palette.sairaRed,
      },
      backgroundColor: overlayBackgroundColor,
    },
  },
  toolWindow: {
    backgroundColor,
    button: {
      selected: {
        backgroundColor: mixWithBackground(0.25, palette.sairaRed),
        iconColor: textColor,
      },
      hover: {
        backgroundColor: mixWithBackground(0.5, palette.sairaRed),
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
      backgroundColor: mixWithBackground(0.9, palette.pepto),
      inactive: {
        backgroundColor: mixWithBackground(0.9, palette.pepto),
      },
    },
    error: { textColor: errorColor },
    modified: { textColor: palette.pacificHarbour },
  },
  vcs: {
    log: {
      commit: {
        rowHeight: 28,
        currentBranch: {
          backgroundColor: mixWithBackground(0.9, palette.sairaRed),
        },
        hover: {
          backgroundColor: mixWithBackground(0.8, palette.sairaRed),
        },
        selected: {
          backgroundColor: mixWithBackground(0.5, palette.sairaRed),
          textColor: palette.brooklet,
          inactive: {
            backgroundColor: mixWithBackground(0.75, palette.sairaRed),
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
        head: palette.pepto,
        localBranch: palette.pacificHarbour,
        remoteBranch: palette.liveryGreen,
        tag: palette.overjoy,
        other: palette.brightLavender,
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
