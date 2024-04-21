import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import appStore from "../store/store";
// import { renderWithProviders } from "../utils/test-utils";

test("App should have correct initial render", () => {
  render(<App />, {
    wrapper: ({ children }) => <Provider store={appStore}>{children}</Provider>,
  });

  expect(screen.getByText(/todos/i)).toBeInTheDocument();
});
