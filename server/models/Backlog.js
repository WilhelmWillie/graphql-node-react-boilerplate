import mongoose, { Schema } from "mongoose";

const BacklogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true
  },
  tasks: [
    {
      type: Schema.ObjectId,
      ref: "Task"
    }
  ],
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

BacklogSchema.pre("save", function(next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  next();
});

export default mongoose.model("Backlog", BacklogSchema);
