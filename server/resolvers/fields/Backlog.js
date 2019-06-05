import { Backlog } from "../../models";

const user = async backlog => {
  const _backlog = await Backlog.findById(backlog).populate("user");
  return _backlog.user;
};

const tasks = async backlog => {
  const _backlog = await Backlog.findById(backlog).populate("tasks");
  return _backlog.tasks;
};

export default {
  user,
  tasks
};
