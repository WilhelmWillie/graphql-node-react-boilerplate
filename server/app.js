import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

// Connect to our MongoDB instance
const db = mongoose.connect(process.env.DB || 'mongodb://localhost/backlog')

// Import GraphQL schema
import schema from './schema.js';

const app = express();

// Bind app with GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production'
}))

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 Server live on port ${port}`)
})
