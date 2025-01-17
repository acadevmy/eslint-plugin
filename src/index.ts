import fs from "fs";

import angularRecommendedConfig from "./configs/angular-recommended";
import angularTemplateRecommendedConfig from "./configs/angular-template-recommended";
import cypressRecommendedConfig from "./configs/cypress-recommended";
import jestRecommendedConfig from "./configs/jest-recommended";
import recommendedConfig from "./configs/recommended";

const pkg: Record<string, string> = JSON.parse(
  fs.readFileSync("./package.json", "utf8"),
);

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  configs: {
    recommended: recommendedConfig,
    "angular-recommended": angularRecommendedConfig,
    "angular-template-recommended": angularTemplateRecommendedConfig,
    "cypress-recommended": cypressRecommendedConfig,
    "jest-recommended": jestRecommendedConfig,
  },
  rules: {},
};

export default plugin;
