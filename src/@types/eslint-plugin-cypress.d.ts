declare module "eslint-plugin-cypress/flat" {
  import type { Linter } from "eslint";

  interface CypressRules {
    "cypress/assertion-before-screenshot": Linter.RuleEntry;
    "cypress/no-assigning-return-values": Linter.RuleEntry;
    "cypress/no-async-before": Linter.RuleEntry;
    "cypress/no-async-tests": Linter.RuleEntry;
    "cypress/no-debug": Linter.RuleEntry;
    "cypress/no-force": Linter.RuleEntry;
    "cypress/no-pause": Linter.RuleEntry;
    "cypress/no-unnecessary-waiting": Linter.RuleEntry;
    "cypress/require-data-selectors": Linter.RuleEntry;
    "cypress/unsafe-to-chain-command": Linter.RuleEntry;
  }

  interface CypressConfigs {
    recommended: Linter.Config;
  }

  import { type ConfigWithExtends } from "typescript-eslint";

  const plugin: {
    rules: CypressRules;
    configs: CypressConfigs;
  } & ConfigWithExtends;

  export = plugin;
}
