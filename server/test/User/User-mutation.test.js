import chai from "chai";

import mongoose from "mongoose";
import bluebird from "bluebird";

import { User } from "../../models";
import Mutation from "../../resolvers/mutation";

import { dropUsers, createUser } from "../utils";

const expect = chai.expect;

// Connect to MongoDB database
mongoose.connect(process.env.DB_TEST || "mongodb://localhost/backlog-test");
mongoose.Promise = bluebird;

describe("User Mutation", () => {
  beforeEach(done => {
    dropUsers(done);
  });

  it("Create user", done => {
    const input = {
      name: "user test",
      email: "user@test.com"
    };

    Mutation.createUser({}, input).then(
      user => {
        expect(user.name).to.equal("user test");
        expect(user.email).to.equal("user@test.com");
        done();
      },
      () => {
        done();
      }
    );
  });

  it("Follow then unfollow user", async () => {
    const userA = await createUser({
      name: "User A",
      email: "usera@example.com"
    });

    const userB = await createUser({
      name: "User B",
      email: "userb@example.com"
    });

    let result = await Mutation.followUser(
      {},
      {
        userId: userA._id,
        targetId: userB._id
      }
    );

    expect(result.user.following.indexOf(userB._id)).to.not.equal(-1);
    expect(result.target.followers.indexOf(userA._id)).to.not.equal(-1);

    result = await Mutation.unfollowUser(
      {},
      {
        userId: userA._id,
        targetId: userB._id
      }
    );

    expect(result.user.following.indexOf(userB._id)).to.equal(-1);
    expect(result.target.followers.indexOf(userA._id)).to.equal(-1);
  });
});
