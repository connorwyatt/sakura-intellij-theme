import path from "node:path";
import Handlebars from "handlebars";
import { outputDirectory } from "./constants.ts";

const generateThemeJson = async (themeName: string): Promise<void> => {
  const templateString = await Deno.readTextFile("./template.theme.json");

  const template = Handlebars.compile(templateString);

  const variables = await import(`./themes/${themeName}/variables.ts`)
    .then((module) => module.jsonVariables);

  const theme = { ...JSON.parse(template(variables)), dark: variables.isDark };

  await Deno.writeTextFile(
    path.join(outputDirectory, `${themeName}.theme.json`),
    JSON.stringify(theme, null, 2),
  );
};

const generateXml = async (themeName: string): Promise<void> => {
  const templateString = await Deno.readTextFile("./template.xml");

  const template = Handlebars.compile(templateString);

  const variables = await import(`./themes/${themeName}/variables.ts`)
    .then((module) => module.xmlVariables);

  await Deno.writeTextFile(
    path.join(outputDirectory, `${themeName}.xml`),
    template(variables),
  );
};

const main = async (): Promise<void> => {
  for await (const { name: themeName } of Deno.readDir("./themes")) {
    await generateThemeJson(themeName);
    await generateXml(themeName);
  }
};

await main();
