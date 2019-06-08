import { Task, Backlog } from "../../models";

const addTask = async (obj, { backlogId, input }) => {
  const backlog = await Backlog.findById(backlogId);

  // Error handling
  if (!backlog) {
    throw new Error("Cannot find backlog with that ID");
  }

  const task = new Task({
    backlog: backlogId,
    title: input.title,
    description: input.description,
    priority: input.priority
  });

  task.save();

  backlog.tasks.push(task._id);
  backlog.save();

  return task;
};

const toggleTaskCompletion = async (obj, { taskId }) => {
  const task = await Task.findById(taskId);

  // Error handling
  if (!task) {
    throw new Error("Cannot find task with that ID");
  }

  task.completed = !task.completed;

  return task.save();
};

const editTask = async (obj, { taskId, input }) => {
  const newTask = await Task.findOneAndUpdate(taskId, input, { new: true });

  return newTask;
};

const deleteTask = (obj, { taskId }) => {
  const task = Task.findOneAndDelete(taskId);

  // Error handling
  if (!task) {
    throw new Error("Cannot find task with that ID");
  }

  return task;
};

export default {
  addTask,
  toggleTaskCompletion,
  editTask,
  deleteTask
};
