import _ from 'lodash';

// TODO: Connect to MongoDB via Mongoose
// Temporary data for now
const users = [
  { id: '1', name: 'Willie', backlogId: '1' },
  { id: '2', name: 'Jenny', backlogId: '2' },
  { id: '3', name: 'Lexi', backlogId: '3' },
]

const backlogs = [
  { id: '1', authorId: '1', title: 'My Engineering Backlog', tasks: []},
  { id: '2', authorId: '2', title: 'My Design Backlog', tasks: []},
  { id: '3', authorId: '3', title: 'Dog Life Backlog', tasks: []},
]

// Sloppy queries + mutation
// TODO: Split up into diff files
export default {
  Query: {
    users: () => users,
    backlog: (obj, { userId }) => (
      _.find(backlogs, { id: userId })
    ),
    tasks: (obj, { backlogId }) => {
      const backlog = _.find(backlogs, { id: backlogId });
      return backlog.tasks;
    },
  },
  Mutation: {
    addTask: (obj, { backlogId, title }) => {
      const backlog = _.find(backlogs, { id: backlogId });

      if (!backlog) {
        throw new Error(`Couldn't find backlog with id ${backlogId}`);
      }

      backlog.tasks.push({
        backlogId,
        title
      });

      return {
        backlogId,
        title
      }
    }
  },
  User: {
    backlog: (user) => _.find(backlogs, { id: user.backlogId })
  },
  Backlog: {
    author: (backlog) => _.find(users, { id: backlog.authorId }),
    tasks: (backlog) => backlog.tasks
  },
  Task: {
    backlog: (task) => _.find(backlogs, { id: task.backlogId })
  }
}
