import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloServer from "./graphql";
import UserService from "./services/user";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.use(
    "/graphql",
    expressMiddleware(await createApolloServer(), {
      context: async ({ req }) => {
        const token = req.headers["jwt-token"];
        try {
          const user = UserService.decodeJWT(token as string);
          return { user };
        } catch (err) {
          return {
            message: "errror in context fn",
            error: err,
          };
        }
      },
    })
  );

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
