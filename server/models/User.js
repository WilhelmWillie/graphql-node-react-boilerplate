import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  },
  backlog: {
    type: Schema.ObjectId,
    ref: "Backlog"
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  followers: [
    {
      type: Schema.ObjectId,
      ref: "User"
    }
  ],
  following: [
    {
      type: Schema.ObjectId,
      ref: "User"
    }
  ]
});

UserSchema.pre("save", function(next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  next();
});

export default mongoose.model("User", UserSchema);
