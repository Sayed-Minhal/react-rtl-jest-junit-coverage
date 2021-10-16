import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { INCREMENT } from "../redux/actions/index.action.type";
import * as actions from "../redux/actions/main.actions";
import store from "./../store";
import Greetings from "./Greetings";

describe("Component load", () => {
  it("should load the greetings component correctly", () => {
    render(
      <Provider store={store}>
        <Greetings />
      </Provider>
    );
    expect(screen.getByText("Greetings", { exact: false })).toBeInTheDocument();
  });

  it("should have increment button", () => {
    render(
      <Provider store={store}>
        <Greetings />
      </Provider>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.innerHTML).toContain("Increment");
  });

  it("should increment the count and reflect on component", () => {
    render(
      <Provider store={store}>
        <Greetings />
      </Provider>
    );

    store.dispatch({ type: INCREMENT, payload: undefined });

    expect(store.getState()).toEqual({ count: { count: 1 } });
    expect(
      screen.getByText("Greetings", { exact: false }).textContent
    ).toContain("Greetings the count is 1");
  });

  it("should call the dispatch on click", () => {
    jest.mock("./../redux/actions/main.actions.js");

    const spyIncrement = jest.spyOn(actions, "increment");

    render(
      <Provider store={store}>
        <Greetings />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(spyIncrement).toHaveBeenCalledTimes(1);
  });
});
