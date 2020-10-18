require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Post = require('./models/Post');
const User = require('./models/User');
const { MONGODB } = process.env;

//GraphQL Model Schema
const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

//GraphQL Actions
const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new error(err);
      }
    },
  },
};

//Server Configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//MongoDB Conection
mongoose
  .connect(`${MONGODB}`, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 3000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
