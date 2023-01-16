import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./components/Chat/context/ChatProvider"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ChatProvider>
      <App />
      </ChatProvider>
    </AuthContextProvider>
  </BrowserRouter>
);