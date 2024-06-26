import React from "react";

import { StyledEngineProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app/App";
import appStore from "./store/store";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <StyledEngineProvider injectFirst>
      <React.StrictMode>
        <Provider store={appStore}>
          <App />
        </Provider>
      </React.StrictMode>
    </StyledEngineProvider>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
