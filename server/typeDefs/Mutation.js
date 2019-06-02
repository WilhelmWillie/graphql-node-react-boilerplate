import gql from 'graphql-tag';

export default gql`
  type Mutation {
    createUser(
      name: String!,
      email: String!
    ): User
    editBacklog(
      backlogId: ID!,
      title: String!
    ): Backlog
    addTask(
      backlogId: ID!,
      title: String!,
      description: String,
      priority: Int
    ): Task
  }
`
