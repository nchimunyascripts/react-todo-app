import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TodosContextProvider from "./context/TodosContextProvider";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="51eebc7a22194be285935c0f1eae0a48"
      domain="https://backlogcode.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production" ? "" : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production" ? "" : "http://localhost:5173"
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
