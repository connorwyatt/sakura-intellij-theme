import { rgbaToHex } from "../utilities.ts";
import { Polished } from "../deps.ts";

const { darken, desaturate, lighten, mix, saturate, transparentize } = Polished;

export const generateLightTheme = (
  themeName: string,
  editorScheme: string,
  backgroundColor: string,
  overlayBackgroundColor: string,
  topBarBackgroundColor: string,
  editorBackgroundColor: string,
  black: string,
  blackLighten1: string,
  blackLighten2: string,
  blackLighten3: string,
  blackLighten4: string,
  blackLighten5: string,
  blackLighten6: string,
  white: string,
  whiteDarken1: string,
  whiteDarken2: string,
  whiteDarken3: string,
  whiteDarken4: string,
  red: string,
  orange: string,
  yellow: string,
  green: string,
  turquoise: string,
  blue: string,
  indigo: string,
  purple: string,
  pink: string,
) => {
  const mixWithBackground = (percentage: number, color: string): string =>
    mix(percentage, backgroundColor, color);

  const mixWithTopBarBackground = (percentage: number, color: string): string =>
    mix(percentage, topBarBackgroundColor, color);

  const mixWithEditorBackground = (percentage: number, color: string): string =>
    mix(percentage, editorBackgroundColor, color);

  const textColor = blackLighten5;
  const invertedTextColor = white;

  const fieldBackgroundColor = mixWithBackground(0.925, lighten(0.15, pink));
  const fieldBorderColor = mixWithBackground(0.5, pink);
  const fieldTextColor = textColor;

  const disabledFieldBorderColor = mixWithBackground(0.5, fieldBorderColor);
  const disabledFieldTextColor = mixWithBackground(0.5, fieldTextColor);

  const checkboxBackgroundColor = pink;
  const checkboxTickColor = white;

  const buttonPrimaryBackgroundColor = pink;
  const buttonPrimaryBorderColor = buttonPrimaryBackgroundColor;
  const buttonPrimaryTextColor = white;

  const buttonSecondaryBackgroundColor = fieldBackgroundColor;
  const buttonSecondaryBorderColor = fieldBorderColor;
  const buttonSecondaryTextColor = fieldTextColor;

  const linkColor = blue;

  const fieldFocusColor = mix(
    0.5,
    backgroundColor,
    buttonPrimaryBackgroundColor,
  );

  const caretColor = pink;

  const guidelinesColor = mixWithBackground(0.9, blackLighten5);
  const treeLinesColor = mixWithBackground(0.8, blackLighten5);
  const editorGuidelinesColor = mixWithEditorBackground(0.8, blackLighten5);

  const listItem = (() => {
    const hoverColor = mixWithBackground(0.8, pink);
    const inactiveSelectionColor = mixWithBackground(0.8, blackLighten5);
    const selectionColor = mixWithBackground(0.6, pink);

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

  const editorSelectionColor = mixWithEditorBackground(0.75, pink);

  const badgeBackgroundColor = pink;
  const badgeTextColor = white;

  const tabs = {
    hoverColor: rgbaToHex(transparentize(0.9, pink)),
    underlineColor: pink,
  };

  const editorTextColor = mixWithEditorBackground(0.25, blackLighten5);

  const commentColor = mixWithEditorBackground(0.5, editorTextColor);
  const constantColor = blue;
  const enumCaseColor = green;
  const globalVariableColor = blue;
  const identifierColor = editorTextColor;
  const instanceMethodColor = blue;
  const instanceFieldColor = purple;
  const keywordColor = pink;
  const localVariableColor = editorTextColor;
  const metadataColor = yellow;
  const numberColor = purple;
  const parameterColor = editorTextColor;
  const punctuationColor = mixWithEditorBackground(0.5, editorTextColor);
  const staticFieldColor = instanceFieldColor;
  const staticMethodColor = instanceMethodColor;
  const stringColor = green;
  const stringEscapeColor = orange;
  const tagAttributeNameColor = yellow;
  const tagAttributeValueColor = blue;
  const tagName = pink;
  const templateLanguageBackgroundColor = mixWithEditorBackground(0.9, pink);
  const todoColor = orange;
  const typeNameColor = yellow;
  const whitespaceColor = mix(0.5, editorGuidelinesColor, punctuationColor);

  const syntax = {
    attribute: metadataColor,
    badCharacter: {
      textColor: red,
      effectColor: red,
      errorStripeColor: red,
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
      backgroundColor: mixWithEditorBackground(0.75, yellow),
      errorStripeColor: yellow,
    },
    entity: stringEscapeColor,
    enumCase: enumCaseColor,
    error: {
      textColor: red,
      effectColor: red,
      errorStripeColor: red,
    },
    functionCall: instanceMethodColor,
    functionDeclaration: instanceMethodColor,
    globalVariable: globalVariableColor,
    grammarError: {
      effectColor: yellow,
      errorStripeColor: yellow,
    },
    genericServerError: {
      effectColor: yellow,
      errorStripeColor: yellow,
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
      effectColor: red,
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
        backgroundColor: mixWithEditorBackground(0.9, blue),
      },
    },
    runtimeError: {
      effectColor: red,
      errorStripeColor: red,
    },
    semicolon: punctuationColor,
    staticField: staticFieldColor,
    staticMethod: staticMethodColor,
    string: stringColor,
    stringEscape: {
      invalid: { textColor: stringEscapeColor, effectColor: red },
      valid: { textColor: stringEscapeColor },
    },
    suggestion: {
      effectColor: blue,
    },
    tabs: mixWithEditorBackground(0.5, punctuationColor),
    tag: punctuationColor,
    templateLanguage: {
      backgroundColor: templateLanguageBackgroundColor,
    },
    textStyleError: {
      effectColor: red,
    },
    textStyleSuggestion: {
      effectColor: blue,
    },
    textStyleWarning: {
      effectColor: yellow,
    },
    todo: {
      textColor: todoColor,
      errorStripeColor: todoColor,
    },
    typeParameter: typeNameColor,
    typo: {
      effectColor: yellow,
      errorStripeColor: yellow,
    },
    unusedElement: {
      backgroundColor: null,
      textColor: mixWithEditorBackground(0.5, editorTextColor),
      effectColor: mixWithEditorBackground(0.25, yellow),
    },
    warning: {
      effectColor: yellow,
      errorStripeColor: yellow,
    },
    whitespace: whitespaceColor,
    xml: {
      nsPrefix: { textColor: tagAttributeNameColor },
      attributeName: tagAttributeNameColor,
      attributeValue: tagAttributeValueColor,
      tagName: tagName,
    },
  };

  return {
    name: themeName,
    isDark: false,
    editorScheme,
    backgroundColor,
    bordersColor: guidelinesColor,
    textColor,
    actionButtons: {
      hover: {
        backgroundColor: mixWithBackground(0.75, pink),
        borderColor: mixWithBackground(0.5, pink),
      },
      pressed: {
        backgroundColor: mixWithBackground(0.65, pink),
        borderColor: mixWithBackground(0.5, pink),
      },
      separatorColor: guidelinesColor,
    },
    actions: {
      blue: blue,
      green: green,
      grey: textColor,
      greyInline: textColor,
      greyInlineDark: textColor,
      red: red,
      yellow: yellow,
    },
    banner: {
      error: {
        backgroundColor: mixWithBackground(0.8, red),
        borderColor: mixWithBackground(0.5, red),
      },
      info: {
        backgroundColor: mixWithBackground(0.8, blue),
        borderColor: mixWithBackground(0.5, blue),
      },
      success: {
        backgroundColor: mixWithBackground(0.8, green),
        borderColor: mixWithBackground(0.5, green),
      },
      warning: {
        backgroundColor: mixWithBackground(0.8, yellow),
        borderColor: mixWithBackground(0.5, yellow),
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
        textColor: mix(0.5, pink, fieldTextColor),
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
        textColor: pink,
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
        changedValue: { textColor: orange },
        collectingData: { textColor: blue },
        errorMessage: { textColor: red },
        evaluatingExpression: { textColor: blue },
        exception: { textColor: red },
        modifyingValue: { textColor: orange },
        type: { textColor: typeNameColor },
        value: { textColor },
      },
    },
    dragAndDrop: {
      borderColor: mixWithBackground(0.5, pink),
      area: {
        backgroundColor,
        foregroundColor: textColor,
      },
      row: {
        backgroundColor: rgbaToHex(transparentize(0.9, pink)),
      },
    },
    editor: {
      backgroundColor: editorBackgroundColor,
      borderColor: editorGuidelinesColor,
      textColor: editorTextColor,
      shortcutForeground: pink,
      searchField: {
        backgroundColor: editorBackgroundColor,
      },
      toolbar: {
        borderColor: guidelinesColor,
      },
      bookmark: {
        lineBackgroundColor: mixWithEditorBackground(0.75, pink),
        errorStripeColor: mixWithEditorBackground(0.75, pink),
      },
      breadcrumbs: {
        current: {
          backgroundColor: mixWithEditorBackground(0.95, textColor),
          textColor,
        },
        default: {
          backgroundColor: editorBackgroundColor,
          textColor: mixWithEditorBackground(0.5, textColor),
        },
        hovered: (() => {
          const color = mixWithEditorBackground(0.95, textColor);
          return {
            backgroundColor: color,
            textColor,
          };
        })(),
        inactive: {
          backgroundColor: editorBackgroundColor,
          textColor: mixWithEditorBackground(0.5, textColor),
        },
      },
      breakpoint: {
        lineBackgroundColor: mixWithEditorBackground(0.75, red),
        errorStripeColor: mixWithEditorBackground(0.75, red),
      },
      caret: {
        color: caretColor,
        rowBackgroundColor: backgroundColor,
      },
      codeLens: {
        borderColor: pink,
      },
      console: {
        output: {
          black: {
            backgroundColor: textColor,
            textColor: editorBackgroundColor,
          },
          red: red,
          green: green,
          yellow: yellow,
          blue: blue,
          magenta: pink,
          cyan: turquoise,
          gray: mixWithEditorBackground(0.25, textColor),
          darkGray: mixWithEditorBackground(0.5, textColor),
          redBright: lighten(0.05, saturate(0.2, red)),
          greenBright: lighten(0.05, saturate(0.2, green)),
          yellowBright: lighten(0.05, saturate(0.2, yellow)),
          blueBright: lighten(0.05, saturate(0.2, blue)),
          magentaBright: lighten(0.05, saturate(0.2, pink)),
          cyanBright: lighten(0.05, saturate(0.2, turquoise)),
          normal: textColor,
          error: red,
          system: textColor,
          white: {
            textColor,
          },
        },
        input: {
          user: textColor,
          runUsingIDE: {
            backgroundColor: mixWithEditorBackground(0.8, turquoise),
            textColor,
          },
        },
        rangeToExecute: {
          effectColor: pink,
        },
      },
      ctrlClickable: {
        textColor: linkColor,
        effectColor: linkColor,
      },
      debugger: {
        inlineValue: {
          executionLine: {
            textColor: mix(0.5, blue, commentColor),
          },
          modified: {
            textColor: mix(0.5, yellow, commentColor),
          },
          other: {
            textColor: commentColor,
          },
        },
      },
      diff: {
        conflict: {
          importantColor: mixWithEditorBackground(0.75, yellow),
          ignoredColor: mixWithEditorBackground(0.875, yellow),
          errorStripeColor: mixWithEditorBackground(0.5, yellow),
        },
        deleted: {
          importantColor: mixWithEditorBackground(0.75, red),
          ignoredColor: mixWithEditorBackground(0.875, red),
          errorStripeColor: mixWithEditorBackground(0.5, red),
        },
        inserted: {
          importantColor: mixWithEditorBackground(0.75, green),
          ignoredColor: mixWithEditorBackground(0.875, green),
          errorStripeColor: mixWithEditorBackground(0.5, green),
        },
        modified: {
          importantColor: mixWithEditorBackground(0.75, blue),
          ignoredColor: mixWithEditorBackground(0.875, blue),
          errorStripeColor: mixWithEditorBackground(0.5, blue),
        },
        separatorWave: mixWithEditorBackground(0.5, pink),
      },
      fileStatus: {
        added: green,
        conflicts: orange,
        copied: green,
        deleted: red,
        merged: purple,
        modified: blue,
        switched: purple,
        unknown: orange,
        warning: yellow,
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
        error: mixWithBackground(0.5, red),
        info: backgroundColor,
        question: mixWithBackground(0.5, purple),
        warning: mixWithBackground(0.5, yellow),
      },
      htmlTagTreeLevels: {
        level0: pink,
        level1: purple,
        level2: blue,
        level3: green,
        level4: yellow,
        level5: orange,
      },
      identifierUnderCaret: {
        standard: {
          backgroundColor: mixWithEditorBackground(0.9, editorTextColor),
          effectColor: mixWithEditorBackground(0.5, editorTextColor),
          errorStripeColor: mixWithEditorBackground(0.5, editorTextColor),
        },
        write: {
          backgroundColor: mixWithEditorBackground(0.75, editorTextColor),
          effectColor: mixWithEditorBackground(0.25, editorTextColor),
          errorStripeColor: mixWithEditorBackground(0.25, editorTextColor),
        },
      },
      images: {
        backgroundColor: editorBackgroundColor,
        alternateBackgroundColor: backgroundColor,
        gridLineColor: editorGuidelinesColor,
      },
      info: {
        effectColor: blue,
        errorStripeColor: blue,
      },
      indentGuide: {
        normal: { color: editorGuidelinesColor },
        selected: { color: editorSelectionColor },
      },
      injectedLanguageFragment: {
        backgroundColor: mixWithEditorBackground(0.8, blue),
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
        caretRow: { textColor: pink },
      },
      matchedBracesIndentGuideColor: editorSelectionColor,
      matchingElement: {
        effectColor: pink,
      },
      methodSeparators: editorGuidelinesColor,
      notification: {
        backgroundColor: mixWithEditorBackground(0.5, pink),
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
        background: mixWithEditorBackground(0.95, pink),
        fragmentBackground: mixWithEditorBackground(0.95, pink),
      },
      recentLocations: {
        selection: {
          backgroundColor: editorSelectionColor,
        },
      },
      rightMarginColor: editorGuidelinesColor,
      search: {
        searchResult: {
          backgroundColor: mixWithEditorBackground(0.75, blue),
          effectColor: mixWithEditorBackground(0.5, blue),
        },
        textSearchResult: {
          backgroundColor: mixWithEditorBackground(0.75, blue),
          effectColor: mixWithEditorBackground(0.5, blue),
        },
        writeSearchResult: {
          backgroundColor: mixWithEditorBackground(0.5, blue),
          effectColor: mixWithEditorBackground(0.25, blue),
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
          modifiedIconColor: pink,
        },
      },
      vcs: {
        annotation: {
          textColor,
          lastCommit: {
            textColor,
          },
          color1: mixWithEditorBackground(0.3, pink),
          color2: mixWithEditorBackground(0.45, pink),
          color3: mixWithEditorBackground(0.6, pink),
          color4: mixWithEditorBackground(0.75, pink),
          color5: mixWithEditorBackground(0.9, pink),
        },
        changedLinesPopup: {
          backgroundColor,
        },
        gutter: {
          addedLines: green,
          deletedLines: red,
          modifiedLines: blue,
          removedLines: red,
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
        focusColor: red,
        inactive: {
          focusColor: mixWithBackground(0.5, red),
        },
      },
      warning: {
        focusColor: yellow,
        inactive: {
          focusColor: mixWithBackground(0.5, yellow),
        },
      },
      infoTextColor: mixWithBackground(0.25, textColor),
    },
    fileColors: {
      blue: mixWithBackground(0.9, saturate(0.5, blue)),
      gray: mixWithBackground(0.9, saturate(0.5, textColor)),
      green: mixWithBackground(0.9, saturate(0.5, green)),
      orange: mixWithBackground(0.9, saturate(0.5, orange)),
      rose: mixWithBackground(0.9, saturate(0.5, red)),
      violet: mixWithBackground(0.9, saturate(0.5, purple)),
      yellow: mixWithBackground(0.9, saturate(0.5, yellow)),
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
        textColor: red,
      },
      info: {
        textColor: mixWithBackground(0.25, textColor),
      },
      success: {
        textColor: green,
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
          backgroundColor: mixWithTopBarBackground(0.5, pink),
        },
        pressed: {
          backgroundColor: mixWithTopBarBackground(0.6, pink),
        },
      },
      icon: {
        backgroundColor: topBarBackgroundColor,
        hover: {
          backgroundColor: mixWithTopBarBackground(0.5, pink),
        },
        pressed: {
          backgroundColor: mixWithTopBarBackground(0.6, pink),
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
      allocated: { backgroundColor: mixWithBackground(0.5, pink) },
      used: { backgroundColor: mixWithBackground(0.25, pink) },
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
      borderColor: mix(0.75, overlayBackgroundColor, blackLighten5),
      textColor,
      hover: {
        backgroundColor: darken(0.02, overlayBackgroundColor),
      },
      error: {
        backgroundColor: mixWithEditorBackground(0.8, red),
        borderColor: mixWithEditorBackground(0.5, red),
        textColor,
      },
      info: {
        backgroundColor: mixWithEditorBackground(0.8, blue),
        borderColor: mixWithEditorBackground(0.5, blue),
        textColor,
      },
      warning: {
        backgroundColor: mixWithEditorBackground(0.8, yellow),
        borderColor: mixWithEditorBackground(0.5, yellow),
        textColor,
      },
    },
    objects: {
      blue: blue,
      blackText: whiteDarken3,
      green: green,
      grey: mixWithBackground(0.25, textColor),
      pink: pink,
      purple: purple,
      red: red,
      redStatus: red,
      yellow: yellow,
      yellowDark: darken(0.2, yellow),
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
          backgroundColor: mixWithBackground(0.25, blue),
          textColor: whiteDarken2,
        },
        pagination: {
          current: pink,
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
        backgroundColor: mixWithBackground(0.5, whiteDarken2),
      },
    },
    progressBar: {
      backgroundColor: overlayBackgroundColor,
      foregroundColor: mixWithEditorBackground(0.5, lighten(0.15, pink)),
      progressColor: mixWithEditorBackground(0.5, lighten(0.15, pink)),
      indeterminate: {
        startColor: pink,
        endColor: lighten(0.15, pink),
      },
      failedColor: red,
      failedEndColor: lighten(0.1, red),
      warningColor: yellow,
      warningEndColor: lighten(0.1, yellow),
      passedColor: green,
      passedEndColor: lighten(0.1, green),
    },
    runWidget: {
      backgroundColor: mixWithBackground(0.75, pink),
      iconColor: textColor,
      textColor,
      runningIconColor: whiteDarken3,
      running: {
        backgroundColor: green,
      },
      stop: {
        backgroundColor: red,
      },
      hover: { overlayColor: rgbaToHex(transparentize(0.9, backgroundColor)) },
      pressed: {
        overlayColor: rgbaToHex(transparentize(0.8, backgroundColor)),
      },
    },
    scrollBar: {
      thumbColor: mixWithBackground(0.75, pink),
      thumbBorderColor: mixWithBackground(0.5, pink),
      hover: {
        thumbColor: mixWithBackground(0.5, pink),
        thumbBorderColor: mixWithBackground(0.25, pink),
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
      errorBackgroundColor: mix(0.5, fieldBackgroundColor, red),
      errorTextColor: red,
    },
    searchMatch: {
      backgroundColor: blue,
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
        borderColor: pink,
      },
    },
    speedSearch: {
      backgroundColor: overlayBackgroundColor,
      textColor,
      borderColor: guidelinesColor,
      errorTextColor: red,
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
          backgroundColor: mixWithEditorBackground(0.9, pink),
        },
        inactive: {
          backgroundColor: mixWithEditorBackground(0.9, pink),
        },
      },
      selection: {
        active: {
          backgroundColor: mixWithEditorBackground(0.5, pink),
          textColor,
        },
        inactive: {
          backgroundColor: mixWithEditorBackground(0.5, pink),
          textColor,
        },
      },
      lightSelection: {
        active: {
          backgroundColor: mixWithEditorBackground(0.5, pink),
          textColor,
        },
        inactive: {
          backgroundColor: mixWithEditorBackground(0.5, pink),
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
      highlightColor: blue,
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
      borderColor: mix(0.25, whiteDarken2, guidelinesColor),
      buttonColor: green,
      disabledTextColor: "#0000ff",
      off: {
        backgroundColor,
        textColor,
      },
      on: {
        backgroundColor: mixWithBackground(0.5, green),
        textColor,
      },
    },
    tooltip: {
      backgroundColor: overlayBackgroundColor,
      textColor,
      borderColor: guidelinesColor,
      info: { textColor: mix(0.5, overlayBackgroundColor, textColor) },
      shortcut: { textColor: pink },
      link: { textColor: linkColor },
      actions: {
        info: {
          textColor: pink,
        },
        backgroundColor: overlayBackgroundColor,
      },
    },
    toolWindow: {
      backgroundColor,
      button: {
        selected: {
          backgroundColor: mixWithBackground(0.25, pink),
          iconColor: invertedTextColor,
        },
        hover: {
          backgroundColor: mixWithBackground(0.5, pink),
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
      error: { textColor: red },
      modified: { textColor: blue },
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
        backgroundColor: mixWithBackground(0.75, red),
        borderColor: mixWithBackground(0.5, red),
      },
      warning: {
        backgroundColor: mixWithBackground(0.75, yellow),
        borderColor: mixWithBackground(0.5, yellow),
      },
    },
    vcs: {
      log: {
        commit: {
          rowHeight: 28,
          currentBranch: {
            backgroundColor: mixWithBackground(0.95, blue),
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
          head: pink,
          localBranch: blue,
          remoteBranch: green,
          tag: yellow,
          other: purple,
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
          backgroundColor: mixWithBackground(0.25, pink),
          selection: {
            backgroundColor: mixWithBackground(0.5, pink),
            borderColor: mixWithBackground(0.25, pink),
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
};
