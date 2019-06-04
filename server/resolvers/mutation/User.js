import { User, Backlog } from "../../models";

const createUser = (obj, { name, email }) => {
  const user = new User({
    name,
    email
  });

  const backlog = new Backlog({
    title: `${name}'s Backlog`,
    user: user,
    tasks: []
  });

  backlog.save();
  user.backlog = backlog;

  return user.save();
};

export default {
  createUser
};
