import { User } from "../../models";

export default cb => {
  User.collection.drop(cb());
};
