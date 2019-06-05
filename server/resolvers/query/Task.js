import { Backlog, Task } from "../../models";

const tasks = async (obj, { backlogId }) => {
  const backlog = await Backlog.findById(backlogId).populate("tasks");
  return backlog.tasks;
};

const task = (obj, { taskId }) => {
  return Task.findById(taskId);
};

export default {
  tasks,
  task
};
