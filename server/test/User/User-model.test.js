import chai from "chai";

import mongoose from "mongoose";

import { User } from "../../models";
import { dropUsers } from "../utils";

const expect = chai.expect;

// Connect to MongoDB database
mongoose.connect(process.env.DB_TEST || "mongodb://localhost/backlog-test");

describe("User Model", () => {
  beforeEach(done => {
    dropUsers(() => {
      done();
    });
  });

  /*
  TEMP: Re-do this
  it("Prevent duplicate accounts", done => {
    const userA = new User({
      name: "Bob",
      email: "bob@example.com"
    });

    userA.save();

    const userB = new User({
      name: "Bob",
      email: "bob@example.com"
    });

    userB.save(result => {
      expect(result).to.be.null;
      done();
    });
  });
  */
});
