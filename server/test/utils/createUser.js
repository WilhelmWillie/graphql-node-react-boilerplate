import { User } from "../../models";

export default async input => {
  const user = new User(input);
  const result = await user.save();
  return result;
};
