require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import { Users } from "./models/Users";
import { ConnectDB } from "../database/connection";

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  await ConnectDB();

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`🚀 Server launched at http://localhost:${PORT}${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
