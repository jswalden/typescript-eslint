import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { TSTypeParameterInstantiation } from '../../special/TSTypeParameterInstantiation/spec';
import type { EntityName } from '../../unions/EntityName';
import type { TypeNode } from '../../unions/TypeNode';

export interface TSImportType extends BaseNode {
  argument: TypeNode;
  qualifier: EntityName | null;
  type: AST_NODE_TYPES.TSImportType;
  typeArguments: TSTypeParameterInstantiation | null;
}
