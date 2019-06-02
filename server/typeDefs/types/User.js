import gql from 'graphql-tag';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    status: String
    link: String
    backlog: Backlog
    createdAt: String
  }
`
