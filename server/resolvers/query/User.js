import { User } from "../../models";

const users = () => {
  return User.find();
};

const user = (obj, { userId }) => {
  return User.findById(userId);
};

export default {
  users,
  user
};
