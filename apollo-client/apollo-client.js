import { ApolloClient } from "@apollo/client";
import { typeDefs } from "../graphql/typeDefs/typeDefs";
import { resolvers } from "../graphql/resolvers/resolvers";

// 1. Create an Apollo client and pass it to all child components
//    (uses svelte's built-in context)
export const client = new ApolloClient({
  typeDefs,
  resolvers,
});
console.log(client);
