import {
  convertAnnotatedSourceToFailureCase,
  RuleTester,
} from '@angular-eslint/test-utils';
import { InvalidTestCase, ValidTestCase } from '@typescript-eslint/rule-tester';
import { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import rule, { MessageIds, Options } from '../../rules/prefer-class-bindings';

const messageId: MessageIds = 'avoidNgClass';

export const valid: ReadonlyArray<string | ValidTestCase<Options>> = [
  '<div [class.test]="someCondition"></div>',
];

export const invalid: ReadonlyArray<InvalidTestCase<MessageIds, Options>> = [
  convertAnnotatedSourceToFailureCase({
    description: 'should fail when using ngClass',
    annotatedSource: `
      <div [ngClass]="someCondition"> 
           ^^^^^^^^^^^^^^^^^^^^^^^^^
      </div>
    `,
    messages: [{ char: '^', messageId }],
  }),
];

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require('@angular-eslint/template-parser'),
  },
} as FlatConfig.Config);

ruleTester.run('prefer-class-bindings', rule, {
  valid,
  invalid,
});
