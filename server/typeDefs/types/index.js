import { importSchema } from 'graphql-import';

const Backlog= importSchema('./Backlog.graphql');
const Task = importSchema('./Task.graphql');
const User = importSchema('./User.graphql');

export default [
  Backlog,
  Task,
  User
]
