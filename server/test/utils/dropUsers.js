import { User } from "../../models";

export default cb => {
  User.deleteMany({}, cb);
};
