// Forked from https://github.com/eslint/eslint/blob/ad9dd6a933fd098a0d99c6a9aa059850535c23ee/lib/shared/config-validator.js#LL50-L82C2

import type { JSONSchema4 } from '@typescript-eslint/utils/json-schema';
import type { AnyRuleModule } from '@typescript-eslint/utils/ts-eslint';

import { isReadonlyArray } from './isReadonlyArray';

/**
 * Gets a complete options schema for a rule.
 * @param rule A new-style rule object
 * @returns JSON Schema for the rule's options.
 */
export function getRuleOptionsSchema(
  rule: Partial<AnyRuleModule>,
): JSONSchema4 | null {
  const schema = rule.meta?.schema;

  // Given a tuple of schemas, insert warning level at the beginning
  if (isReadonlyArray(schema)) {
    if (schema.length) {
      return {
        items: schema as JSONSchema4[],
        maxItems: schema.length,
        minItems: 0,
        type: 'array',
      };
    }
    return {
      maxItems: 0,
      minItems: 0,
      type: 'array',
    };
  }

  // Given a full schema, leave it alone
  return schema ?? null;
}
