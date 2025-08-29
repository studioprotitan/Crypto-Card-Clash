import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

// 1. Import the createClient function from your generated SDK
import { createClient } from "../dataconnect/generated/client";

// Assuming you have a root component, e.g., App.tsx
// import App from './App';

// 2. Create an instance of the Data Connect client
const dataConnectClient = createClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 3. Wrap your application with the ApolloProvider to make the client available
root.render(
  <React.StrictMode>
    <ApolloProvider client={dataConnectClient}>{/* <App /> */}</ApolloProvider>
  </React.StrictMode>
);