import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("Navbar", () => {
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

  it("will display all expected links", async () => {
    const store = mockStore({
      users: users,
      authedUser: {
        currentUser: users["sarahedo"],
        isLoggedIn: true,
      },
    });
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    const home = screen.getByText("Home");
    const leaderboard = screen.getByText("Leader Board");
    const add = screen.getByText("New");
    const loggedInUser = screen.getByTestId("profile-name").innerHTML;
    const logout = screen.getByText("Logout");

    expect(home).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
    expect(add).toBeInTheDocument();
    expect(loggedInUser).toBe(users["sarahedo"].name);
    expect(logout).toBeInTheDocument();
  });
});
