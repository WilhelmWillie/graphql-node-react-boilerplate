import { Backlog } from "../../models";

const editBacklog = async (obj, { backlogId, title }) => {
  const backlog = await Backlog.findById(backlogId);
  backlog.title = title;
  return backlog.save();
};

export default {
  editBacklog
};
