import { Backlog, Task } from "../../models";

const tasks = async (obj, { backlogId }) => {
  const backlog = await Backlog.findById(backlogId).populate("tasks");

  // Error handling
  if (!backlog) {
    throw new Error("Cannot find backlog with that ID");
  }

  return backlog.tasks;
};

const task = (obj, { taskId }) => {
  const task = Task.findById(taskId);

  // Error handling
  if (!task) {
    throw new Error("Cannot find task with that ID");
  }

  return task;
};

export default {
  tasks,
  task
};
