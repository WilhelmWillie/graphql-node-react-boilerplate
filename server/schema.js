/*
  Loads in GraphQL schema for use by app server
*/

import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
