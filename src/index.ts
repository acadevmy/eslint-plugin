import recommendedConfig from './configs/recommended';
import angularRecommendedConfig from './configs/angular-recommended';
import angularTemplateRecommendedConfig from './configs/angular-template-recommended';
import fs from "fs";

const pkg: { [key: string]: string } = JSON.parse(fs.readFileSync('./package.json', "utf8"));

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version
  },
  configs: {
    recommended: recommendedConfig,
    'angular-recommended': angularRecommendedConfig,
    'angular-template-recommended': angularTemplateRecommendedConfig,
  },
};

export default plugin;