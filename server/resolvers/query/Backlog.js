import { Backlog } from "../../models";

const backlog = (obj, { userId }) => {
  return Backlog.findById(userId);
};

export default {
  backlog
};
