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

const unfollowUser = (obj, { userId, targetId }) => {};

export default {
  createUser,
  followUser,
  unfollowUser
};
