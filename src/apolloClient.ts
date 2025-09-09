import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Replace with your GraphQL endpoint
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql", // or your deployed backend
});

export const dataConnectClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
