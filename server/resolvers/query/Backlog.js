import { Backlog } from "../../models";

const backlog = (obj, { userId }) => {
  const backlog = Backlog.findById(userId);

  // Error handling
  if (!backlog) {
    throw new Error("Cannot find backlog with that ID");
  }
};

export default {
  backlog
};
