import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/soho-light/theme.css";
import "primeflex/primeflex.css";
import App from "./App.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
