import gql from 'graphql-tag';

export default gql`
  type Query {
    users: [User]
    user(userId: ID!): User
    backlog(userId: ID!): Backlog
    tasks(backlogId: ID!): [Task]
    task(taskId: ID!): Task
  }
`
