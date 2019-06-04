import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  backlog: {
    type: Schema.ObjectId,
    ref: "Backlog",
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  priority: {
    type: Number,
    default: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Task", TaskSchema);
