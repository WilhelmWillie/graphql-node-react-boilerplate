import chai from "chai";
import request from "supertest";

import app from "../app";

const expect = chai.expect;
const url = `http://localhost:8000/`;

describe("Server", () => {
  it("Returns 404 at / route", done => {
    request(app)
      .get("/")
      .expect(404, done);
  });
});
