import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Thread } from "./thread";

async function createApolloServer() {
  const typeDefs = `
  ${User.typeDefs}
  ${Thread.typeDefs}

  type Query {
    ${User.queries}
    ${Thread.queries}
 }
 type Mutation {
    ${User.mutations}
    ${Thread.mutations}
 }

`;
  const resolvers = {
    Query: {
      ...User.resolvers.queries,
      ...Thread.resolvers.queries,
    },
    Mutation: {
      ...User.resolvers.mutations,
      ...Thread.resolvers.mutations,
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
