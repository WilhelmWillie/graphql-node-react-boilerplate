import gql from 'graphql-tag';

export default gql`
  type Task {
    id: ID!
    title: String!
    backlog: Backlog!
    description: String
    priority: Int
    completed: Boolean
    updatedAt: String
    createdAt: String
  }
`
