import chai from "chai";

import mongoose from "mongoose";

import { User } from "../../models";
import Query from "../../resolvers/query";

import { dropUsers } from "../utils";

const expect = chai.expect;

// Connect to MongoDB database
mongoose.connect(process.env.DB_TEST || "mongodb://localhost/backlog-test");

describe("User Query", () => {
  const newUsers = [];
  beforeEach(done => {
    dropUsers(() => {
      newUsers.length = 0;

      for (let i = 0; i < 10; i++) {
        newUsers.push(
          new User({
            name: `User ${i}`,
            email: `user${i}@example.com`
          })
        );
      }

      User.create(newUsers, (err, users) => {
        done();
      });
    });
  });

  it("Load 10 users", done => {
    const result = Query.users();
    result.then(items => {
      expect(items.length).to.equal(10);
      done();
    });
  });

  it("Load a user", done => {
    const result = Query.user({}, { userId: newUsers[0]._id });

    result.then(user => {
      expect(user.email).to.equal("user0@example.com");
      done();
    });
  });
});
