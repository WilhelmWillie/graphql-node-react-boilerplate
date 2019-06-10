import chai from "chai";

import mongoose from "mongoose";

import { Task, User, Backlog } from "../models";

const expect = chai.expect;

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/backlog-test");

describe("Task Model", () => {
  beforeEach(done => {
    Task.collection.drop(() => {
      done();
    });
  });

  it("Updated at and created date is set to now", done => {
    const date = new Date();

    const user = new User({
      name: "Bob",
      email: "bob@example.com"
    });

    user.save();

    const backlog = new Backlog({
      title: `Backlog`,
      user: user,
      tasks: []
    });

    backlog.save();

    const task = new Task({
      backlog: backlog,
      title: "New Task",
      description: "Test description",
      priority: 3
    });

    task.save();

    expect(backlog.updatedAt, date);
    expect(backlog.createdAt, date);

    done();
  });
});
