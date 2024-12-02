import fs from "fs";
import recommendedConfig from './configs/recommended';
import angularRecommendedConfig from './configs/angular-recommended';

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version
  },
  configs: {
    recommended: recommendedConfig,
    'angular-recommended': angularRecommendedConfig,
  },
};

export default plugin;