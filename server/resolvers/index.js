// Import Mongoose models
import { Backlog, Task, User } from "../models";

import Query from "./query";
import Mutation from "./mutation";
import Fields from "./fields";

// Define resolvers for Query and Mutation
export default {
  Query,
  Mutation,
  ...Fields
};
