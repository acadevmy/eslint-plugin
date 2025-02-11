import {
  TmplAstBoundAttribute,
  TmplAstElement,
  TmplAstTextAttribute,
} from '@angular-eslint/bundled-angular-compiler';
import { getTemplateParserServices } from '@angular-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';

export type Options = [];
export type MessageIds = 'avoidNgClass';

const createRule = ESLintUtils.RuleCreator(() => '');

export default createRule<Options, MessageIds>({
  name: 'prefer-class-bindings',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Ensures the usage of class bindings instead of ngClass for elements',
    },
    schema: [],
    messages: {
      avoidNgClass: "Avoid using 'ngClass'. Use class bindings instead.",
    },
  },
  defaultOptions: [],
  create(context) {
    const parserServices = getTemplateParserServices(context);

    return {
      Element$1(element: TmplAstElement): void {
        const ngClassAttribute = hasNgClassAttribute(element);

        if (!ngClassAttribute) {
          return;
        }

        const loc = parserServices.convertNodeSourceSpanToLoc(
          ngClassAttribute.sourceSpan,
        );

        context.report({
          loc,
          messageId: 'avoidNgClass',
        });
      },
    };
  },
});

function hasNgClassAttribute(
  element: TmplAstElement,
): TmplAstTextAttribute | TmplAstBoundAttribute | undefined {
  const { inputs, attributes } = element;

  return [...inputs, ...attributes].find(({ name }) => name === 'ngClass');
}
