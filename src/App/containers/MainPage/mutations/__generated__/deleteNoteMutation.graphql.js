/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteNoteMutationVariables = {|
  _id?: ?string
|};
export type deleteNoteMutationResponse = {|
  +deleteNote: ?string
|};
export type deleteNoteMutation = {|
  variables: deleteNoteMutationVariables,
  response: deleteNoteMutationResponse,
|};
*/


/*
mutation deleteNoteMutation(
  $_id: ID
) {
  deleteNote(_id: $_id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id",
    "type": "ID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteNote",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "deleteNoteMutation",
    "operationKind": "mutation",
    "text": "mutation deleteNoteMutation(\n  $_id: ID\n) {\n  deleteNote(_id: $_id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a5371187186204b2942ad2583c87fbc9';

module.exports = node;
