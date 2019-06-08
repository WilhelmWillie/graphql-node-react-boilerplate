import { User } from "../../models";

const users = () => {
  return User.find();
};

const user = (obj, { userId }) => {
  const user = User.findById(userId);

  // Error handling
  if (!user) {
    throw new Error("Cannot find user with that ID");
  }
};

export default {
  users,
  user
};
