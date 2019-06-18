import { User, Backlog } from "../../models";

import { remove } from "lodash";

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

const followUser = async (obj, { userId, targetId }) => {
  const user = await User.findById(userId).exec();
  const target = await User.findById(targetId).exec();

  user.following.push(target._id);
  target.followers.push(user._id);

  const updatedUser = await user.save();
  const updatedTarget = await target.save();

  return {
    user: updatedUser,
    target: updatedTarget
  };
};

const unfollowUser = async (obj, { userId, targetId }) => {
  const user = await User.findById(userId).exec();
  const target = await User.findById(targetId).exec();

  user.following = remove(user.following, item => item === targetId);
  target.followers = remove(target.followers, item => item === userId);

  const updatedUser = await user.save();
  const updatedTarget = await target.save();

  return {
    user: updatedUser,
    target: updatedTarget
  };
};

export default {
  createUser,
  followUser,
  unfollowUser
};
