import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import App from "./App";
import appStore from "../store/store";

describe("Render of each component", () => {
  test("App should have correct initial render", () => {
    render(<App />, {
      wrapper: ({ children }) => (
        <Provider store={appStore}>{children}</Provider>
      ),
    });

    const buttons = screen.getAllByRole("button");

    expect(screen.getByText(/todos/i, { selector: "h1" })).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: "What needs to be done?" }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("No planned tasks yet", { selector: "h2" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(buttons.length).toBe(4);
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Active" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Completed" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Clear completed" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("chip", { value: "total tasks 0" }),
    ).toBeInTheDocument();
  });
});

describe("Switching by navigation buttons", () => {
  test("No tasks switching", async () => {
    render(<App />, {
      wrapper: ({ children }) => (
        <Provider store={appStore}>{children}</Provider>
      ),
    });

    const allButton = screen.getByRole("button", { name: "All" });
    const activeButton = screen.getByRole("button", { name: "Active" });
    const completedButton = screen.getByRole("button", { name: "Completed" });

    await userEvent.click(activeButton);
    expect(
      screen.getByText("No active tasks yet", { selector: "h2" }),
    ).toBeInTheDocument();

    await userEvent.click(completedButton);
    expect(
      screen.getByText("No completed tasks yet", { selector: "h2" }),
    ).toBeInTheDocument();

    await userEvent.click(allButton);
    expect(
      screen.getByText("No planned tasks yet", { selector: "h2" }),
    ).toBeInTheDocument();
  });
});

describe("Interaction with the input field", () => {
  test("The input field should behave correctly", async () => {
    render(<App />, {
      wrapper: ({ children }) => (
        <Provider store={appStore}>{children}</Provider>
      ),
    });

    const input = screen.getByRole("textbox");

    await userEvent.click(input);
    expect(
      screen.getByRole("textbox", { value: "add task" }),
    ).toBeInTheDocument();

    await userEvent.type(screen.getByRole("textbox"), "Task one");
    await userEvent.type(input, "{enter}");

    expect(
      screen.getByText("List of all tasks", { selector: "h2" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Task one")).toBeInTheDocument();

    expect(
      screen.getByRole("chip", { value: "total tasks 1" }),
    ).toBeInTheDocument();

    await userEvent.type(screen.getByRole("textbox"), "Task two");
    await userEvent.type(input, "{enter}");
    await userEvent.type(screen.getByRole("textbox"), "Task three");
    await userEvent.type(input, "{enter}");

    expect(screen.getByText("Task two")).toBeInTheDocument();
    expect(screen.getByText("Task three")).toBeInTheDocument();

    expect(
      screen.getByRole("chip", { value: "total tasks 3" }),
    ).toBeInTheDocument();
  });
});
