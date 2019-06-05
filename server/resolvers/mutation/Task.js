import { Task, Backlog } from "../../models";

const addTask = async (obj, { backlogId, title, description, priority }) => {
  const backlog = await Backlog.findById(backlogId);

  const task = new Task({
    backlog: backlogId,
    title,
    description,
    priority
  });

  task.save();

  backlog.tasks.push(task._id);
  backlog.save();

  return task;
};

export default {
  addTask
};
