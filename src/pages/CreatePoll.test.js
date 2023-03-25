/* eslint-disable */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CreatePoll from "./CreatePoll";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";

describe("CreatePoll", () => {
  const store = createStore(reducer, middleware);

  it("will match snapshot", () => {
    const view = render(
      <Provider store={store}>
        <Router>
          <CreatePoll />
        </Router>
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });

  it("will show 2 inputs on page", () => {
    render(
      <Provider store={store}>
        <Router>
          <CreatePoll />
        </Router>
      </Provider>
    );
    const optionOneInput = screen.getByPlaceholderText("Option One");
    const optionTwoInput = screen.getByPlaceholderText("Option Two");
    const createButton = screen.getByText("Create Poll");

    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it("disable create button if all inputs are empty", () => {
    render(
      <Provider store={store}>
        <Router>
          <CreatePoll />
        </Router>
      </Provider>
    );
    const createButton = screen.getByText("Create Poll");
    expect(createButton).toBeDisabled();
  });

  it("enable create button if all inputs are not empty", () => {
    render(
      <Provider store={store}>
        <Router>
          <CreatePoll />
        </Router>
      </Provider>
    );

    const optionOneInput = screen.getByPlaceholderText("Option One");
    const optionTwoInput = screen.getByPlaceholderText("Option Two");
    fireEvent.change(optionOneInput, {
      target: {
        value: "Learning English",
      },
    });
    fireEvent.change(optionTwoInput, {
      target: {
        value: "Learning Mathematics",
      },
    });
    const submitQuestionButton = screen.getByText("Create Poll");
    expect(submitQuestionButton).not.toBeDisabled();
  });
});
