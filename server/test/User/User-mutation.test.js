import chai from "chai";

import mongoose from "mongoose";
import bluebird from "bluebird";

import { User } from "../../models";
import Mutation from "../../resolvers/mutation";

import { dropUsers } from "../utils";

const expect = chai.expect;

// Connect to MongoDB database
mongoose.connect(process.env.DB_TEST || "mongodb://localhost/backlog-test");
mongoose.Promise = bluebird;

describe("User Mutation", () => {
  beforeEach(done => {
    dropUsers(done);
  });

  it("Create user", done => {
    done();
  });

  it("Follow user", done => {
    done();
  });

  it("Unfollow user", done => {
    done();
  });
});
