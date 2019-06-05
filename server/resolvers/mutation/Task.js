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

const toggleTaskCompletion = async (obj, { taskId }) => {
  const task = await Task.findById(taskId);
  task.completed = !task.completed;

  return task.save();
};

const editTask = async (obj, { taskId, input }) => {
  const newTask = await Task.findOneAndUpdate(taskId, input, { new: true });

  console.log(newTask);

  return newTask;
};

export default {
  addTask,
  toggleTaskCompletion,
  editTask
};
