import { importSchema } from 'graphql-import';

import types from './types';

const Query = importSchema('./Query.graphql');
const Mutation = importSchema('./Mutation.graphql');

export default [
  ...types,
  Query,
  Mutation
]
