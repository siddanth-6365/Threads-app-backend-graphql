import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  const typeDefs = `
  type Query {
hello : String
  }
  `;
  const resolvers = {
    Query: {
      hello: () => "hello world",
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start()

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
