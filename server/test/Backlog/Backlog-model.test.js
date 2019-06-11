import chai from "chai";

import mongoose from "mongoose";

import { Backlog, User } from "../../models";

const expect = chai.expect;

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/backlog-test");

describe("Backlog Model", () => {
  beforeEach(done => {
    Backlog.collection.drop(() => {
      done();
    });
  });

  it("Updated at and created date is set to now", done => {
    const date = new Date();

    const user = new User({
      name: "Bob",
      email: "bob@example.com"
    });

    const backlog = new Backlog({
      title: `Backlog`,
      user: user,
      tasks: []
    });

    backlog.save();

    expect(backlog.updatedAt, date);
    expect(backlog.createdAt, date);

    done();
  });
});
