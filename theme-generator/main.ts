import path from "node:path";
import { themesOutputDirectory } from "./constants.ts";
import { Handlebars } from "./deps.ts";

const createOutputDirectory = async (): Promise<void> => {
  await Deno.mkdir(themesOutputDirectory, { recursive: true });
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
  await createOutputDirectory();

  for await (
    const { name: themeName, isDirectory } of Deno.readDir("./themes")
  ) {
    if (!isDirectory) continue;

    await generateThemeJson(themeName);
    await generateXml(themeName);
  }
};

await main();
