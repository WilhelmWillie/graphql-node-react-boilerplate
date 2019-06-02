import gql from 'graphql-tag';

export default gql`
  # import * from './Task.js

  type Backlog {
    id: ID!
    title: String!
    user: User!
    tasks: [Task]
    updatedAt: String
    createdAt: String
  }
`
