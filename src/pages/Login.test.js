import { fireEvent, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import configureMockStore from "redux-mock-store";
import Login from "./Login";
import reducer from "../reducers";
import middleware from "../middleware";

const mockStore = configureMockStore();

const users = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "https://i.imgur.com/d8BSuEu.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    password: "abc321",
    name: "Tyler McGinnis",
    avatarURL: "https://i.imgur.com/1gLpnj1.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  mtsamis: {
    id: "mtsamis",
    password: "xyz123",
    name: "Mike Tsamis",
    avatarURL: "https://i.imgur.com/UI83gyB.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  zoshikanlu: {
    id: "zoshikanlu",
    password: "pass246",
    name: "Zenobia Oshikanlu",
    avatarURL: "https://i.imgur.com/b0cK6zx.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
    },
    questions: [],
  },
};

describe("Login", () => {
  it("will match snapshot", () => {
    const store = createStore(reducer, middleware);
    const view = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });

  it("select user to fill input", () => {
    const store = mockStore({
      users: users,
    });
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const cards = screen.getAllByTestId("card-user");

    cards.forEach((card) => {
      fireEvent.click(card);

      const usernameInput = screen.getByTestId("username");
      const passwordInput = screen.getByTestId("password");

      setTimeout(() => {
        expect(usernameInput.value).toBe(card.key);
        expect(passwordInput.value).toBe(
          users.find((u) => u.id === card.key).password
        );
      }, 500);
    });
  });

  it("Login error with wrong username", () => {
    const store = mockStore({
      users: users,
    });
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    var userInput = screen.getByTestId("username");
    var passInput = screen.getByTestId("password");
    fireEvent.change(userInput, {
      target: { value: "wrongUserName" },
    });
    fireEvent.change(passInput, { target: { value: "password123" } });
    var submitButton = screen.getByTestId("btn-submit");
    fireEvent.click(submitButton);
    setTimeout(() => {
      expect(
        screen.getByText("Invalid username or password")
      ).toBeInTheDocument();
    }, 500);
  });

  it("login error with wrong password", () => {
    const store = mockStore({
      users: users,
    });
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    var userInput = screen.getByTestId("username");
    var passInput = screen.getByTestId("password");
    fireEvent.change(userInput, {
      target: { value: "sarahedo" },
    });
    fireEvent.change(passInput, { target: { value: "wrongPassword" } });
    var submitButton = screen.getByTestId("btn-submit");
    fireEvent.click(submitButton);
    setTimeout(() => {
      expect(
        screen.getByText("Invalid username or password")
      ).toBeInTheDocument();
    }, 500);
  });

  it("login successful", async () => {
    const store = mockStore({
      users: users,
    });

    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    var userInput = screen.getByTestId("username");
    var passInput = screen.getByTestId("password");

    fireEvent.change(userInput, {
      target: { value: "sarahedo" },
    });

    fireEvent.change(passInput, { target: { value: "password123" } });

    var submitButton = screen.getByTestId("btn-submit");

    fireEvent.click(submitButton);

    store.dispatch({ type: "LOGIN", payload: { user: users["sarahedo"] } });

    expect(store.getActions()).toEqual([
      { type: "LOGIN", payload: { user: users["sarahedo"] } },
    ]);
  });
});
