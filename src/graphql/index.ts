import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Thread } from "./thread";
import { Like } from "./like";
import { Comment } from "./comment";

async function createApolloServer() {
  const typeDefs = `
  ${User.typeDefs}
  ${Thread.typeDefs}
  ${Like.typeDefs}
  ${Comment.typeDefs}

  type Query {
    ${User.queries}
    ${Thread.queries}
    ${Like.queries}
    ${Comment.queries}
 }
 type Mutation {
    ${User.mutations}
    ${Thread.mutations}
    ${Like.mutations}
    ${Comment.mutations}
 }

`;
  const resolvers = {
    Query: {
      ...User.resolvers.queries,
      ...Thread.resolvers.queries,
      ...Like.resolvers.queries,
      ...Comment.resolvers.queries,
    },
    Mutation: {
      ...User.resolvers.mutations,
      ...Thread.resolvers.mutations,
      ...Like.resolvers.mutations,
      ...Comment.resolvers.mutations,
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  return server;
}
export default createApolloServer;
