import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TodosContextProvider from "./context/TodosContextProvider";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.KINDE_CLIENT_ID}
      domain={import.meta.env.KINDE_DOMAIN}
      redirectUri="http://localhost:5173/"
      logoutUri="http://localhost:5173/"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
