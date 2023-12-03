import path from "node:path";
import Handlebars from "handlebars";
import { previewsOutputDirectory, themesOutputDirectory } from "./constants.ts";

const createOutputDirectories = async (): Promise<void> => {
  await Deno.mkdir(previewsOutputDirectory, { recursive: true });
  await Deno.mkdir(themesOutputDirectory, { recursive: true });
};

const generatePreview = async (themeName: string): Promise<void> => {
  const templateString = await Deno.readTextFile("./preview-template.svg");

  const template = Handlebars.compile(templateString);

  const variables = await import(`./themes/${themeName}/variables.ts`)
    .then((module) => module.default);

  await Deno.writeTextFile(
    path.join(previewsOutputDirectory, `${themeName}.svg`),
    template(variables),
  );
};

const generateThemeJson = async (themeName: string): Promise<void> => {
  const templateString = await Deno.readTextFile("./template.theme.json");

  const template = Handlebars.compile(templateString);

  const variables = await import(`./themes/${themeName}/variables.ts`)
    .then((module) => module.default);

  const theme = { ...JSON.parse(template(variables)), dark: variables.isDark };

  await Deno.writeTextFile(
    path.join(themesOutputDirectory, `${themeName}.theme.json`),
    JSON.stringify(theme, null, 2),
  );
};

const generateXml = async (themeName: string): Promise<void> => {
  const templateString = await Deno.readTextFile("./template.xml");

  const template = Handlebars.compile(templateString);

  const variables = await import(`./themes/${themeName}/variables.ts`)
    .then((module) => module.default);

  await Deno.writeTextFile(
    path.join(themesOutputDirectory, `${themeName}.xml`),
    template(variables),
  );
};

const main = async (): Promise<void> => {
  await createOutputDirectories();

  for await (
    const { name: themeName, isDirectory } of Deno.readDir("./themes")
  ) {
    if (!isDirectory) continue;

    await generatePreview(themeName);
    await generateThemeJson(themeName);
    await generateXml(themeName);
  }
};

await main();
