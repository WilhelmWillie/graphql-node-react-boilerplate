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

const followUser = (obj, { userId, targetId }) => {};

const unfollowUser = (obj, { userId, targetId }) => {};

export default {
  createUser
};
