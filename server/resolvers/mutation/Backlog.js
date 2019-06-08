import { Backlog } from "../../models";

const editBacklog = async (obj, { backlogId, title }) => {
  const backlog = await Backlog.findById(backlogId);

  // Error handling
  if (!backlog) {
    throw new Error("Cannot find backlog with that ID");
  }

  backlog.title = title;
  return backlog.save();
};

export default {
  editBacklog
};
