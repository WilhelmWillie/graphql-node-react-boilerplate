import { Task, Backlog } from "../../models";

const backlog = task => {
  return Backlog.findById(task.backlog);
};

export default {
  backlog
};
