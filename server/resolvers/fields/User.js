import { User, Backlog } from "../../models";

const backlog = user => {
  return Backlog.findById(user.backlog);
};

export default {
  backlog
};
