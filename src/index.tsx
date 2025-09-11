import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { dataConnectClient } from "./apolloClient";  // ✅ this file exists
import App from "./App";  // ✅ make sure src/App.tsx exists and exports default

// Assuming you have a root App component
// import App from "./App";
 
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
 
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* Placeholder for your main App component */}
      <div>App is ready to be rendered here.</div>
      {/* <App /> */}
    </ApolloProvider>
  </React.StrictMode>
);